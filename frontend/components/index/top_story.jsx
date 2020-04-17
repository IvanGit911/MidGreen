import React from "react";
import { Link } from "react-router-dom";
import dateHelper from "../../utils/date_helper";

const TopStory = ({ topStory }) => (
  <ul className="index-top-left">
    <li>
      <Link to={`/journals/${topStory.id}`}>
        <img src={topStory.photo} />
      </Link>
    </li>
    <div className="index-j-info">
      <li className="title">
        <Link to={`/journals/${topStory.id}`}>{topStory.title}</Link>
      </li>
      <li className="subtitle">{topStory.subtitle}</li>
      <li className="btm">
        <p>
          {topStory.author} in {topStory.category}
        </p>
        <ul className="date">
          <li>{dateHelper(topStory.updated_at)}</li>
          <li>
            <i className="fas fa-circle"></i>
          </li>
          <li>{`${Math.floor(Math.random() * 10 + 2)} min read`}</li>
          <li>
            <i className="fas fa-star"></i>
          </li>
        </ul>
      </li>
    </div>
  </ul>
);

export default TopStory;
