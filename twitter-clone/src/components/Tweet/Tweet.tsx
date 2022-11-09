import React from "react";
import './Tweet.scss';

export const Tweet: React.FC<{userFullName: string, text: any}> = ({userFullName, text}) => {

  return (
    <div className="tweet">
      <span className="tweet__abbr"></span>
      <div>
        <h3 className="tweet__full-name">{userFullName}</h3>
        <p dangerouslySetInnerHTML={{ __html: text }}></p>
      </div>
    </div>
  );
};