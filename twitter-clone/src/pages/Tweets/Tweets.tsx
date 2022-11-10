import React, { FormEvent, SyntheticEvent, useContext, useEffect, useState } from 'react';
import { Button, ErrorPopup, Tweet } from '../../components';
import { createTweet, getTweets} from '../../api/tweets';
import { getUserbyId } from '../../api/user';
import { TweetInfo } from '../../utils/types';
import { UserContext } from '../../utils/UserContext';
import './Tweets.scss';

export const TweetsPage: React.FC = () => {
  const [tweetList, setTweetList] = useState<TweetInfo[]>([]);
  const [tweetWithAuthor, setTweetWithAuthor] = useState<{author: string, text: string, id: string}[]>([]);
  const [error, setError] = useState<string>('');
  const [toggleAdd, setToggleAdd] = useState<boolean>(false);
  const [newTweet, setNewTweet] = useState<string>('');
  const { userId } = useContext(UserContext);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if(newTweet && userId) {
      try {
        await createTweet({text: newTweet, author_id: userId});
        setToggleAdd(!toggleAdd);
        setNewTweet('');
      } catch (err) {
        const error = err as unknown as Error;
        setError(error.message);
      }
    }
  };

  const handleChange = (e: SyntheticEvent) => {
    setNewTweet((e.target as HTMLTextAreaElement).value);
  };

  useEffect(() => {
    (async() => {
      try {
        setTweetList((await getTweets()).reverse());
      } catch (err) {
        const error = err as unknown as Error;
        setError(error.message);
      }
    })();
  }, [toggleAdd]);

  useEffect (() => {
    (async () => {
      const tweets = tweetList.map(async (tweet) => {
        const user = await getUserbyId(tweet.author_id);
        return {
          author: user.name,
          text: tweet.text,
          id: tweet.id
        };
      });
      setTweetWithAuthor(await Promise.all(tweets));
    })();
  }, [tweetList]);

  return (
    <>
    {userId && 
    <div className='tweets__wrapper'>
      <form onSubmit={handleSubmit}>
        <textarea 
          className='tweets__textarea' 
          placeholder='What&apos;s happening?' 
          value={newTweet} id="tweet" 
          cols={30} 
          rows={5}
          onChange={handleChange}
          />
        <Button text='Tweet'></Button>
      </form>
      <div>
      {tweetWithAuthor.reverse().map((tweet) => <Tweet key={tweet.id} userFullName={tweet.author} text={tweet.text}></Tweet>)}
      </div>
      <ErrorPopup text={error} className={error ? 'error-show': ''}></ErrorPopup>
    </div>
    }
    </>
  );
};
