import React, { FormEvent, SyntheticEvent, useContext, useEffect, useState } from 'react';
import { Button } from '../../components/Button';
import { ErrorPopup } from '../../components/ErrorPopup/ErrorPopup';
import { Tweet } from '../../components/Tweet/Tweet';
import { createTweet, getTweets, getUserbyId} from '../../server/server';
import { TweetInfo } from '../../utils/types';
import { UserContext } from '../../utils/UserContext';
import './Tweets.scss';

export const TweetsPage: React.FC = () => {
  const [tweetList, setTweetList] = useState<TweetInfo[]>([]);
  const [tweetWithAuthor, setTweetWithAuthor] = useState<{author: string, text: string}[]>([]);
  const [error, setError] = useState<string>('');
  const [newTweet, setNewTweet] = useState<string>('');
  const {userId} = useContext(UserContext);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if(newTweet && userId) {
      await createTweet({text: newTweet, author_id: newTweet});
    }
  };

  const handleChange = (e: SyntheticEvent) => {
    setNewTweet((e.target as HTMLTextAreaElement).value);
  };

  useEffect(() => {
    (async() => {
      try {
        setTweetList(await getTweets());
      } catch (err) {
        const error = err as unknown as Error;
        setError(error.message);
      }
    })();
  }, []);

  useEffect (() => {
    (async () => {
      const tweets = tweetList.map(async (tweet) => {
        const user = await getUserbyId(tweet.author_id);
        return {
          author: user.name,
          text: tweet.text
        };
      });
      setTweetWithAuthor(await Promise.all(tweets));
    })();
  }, [tweetList]);

  return (
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
      {tweetWithAuthor.map((tweet) => <Tweet key={tweet.author} userFullName={tweet.author} text={tweet.text}></Tweet>)}

      <ErrorPopup text={error} className={error ? 'error-show': ''}></ErrorPopup>
    </div>
  );
};
