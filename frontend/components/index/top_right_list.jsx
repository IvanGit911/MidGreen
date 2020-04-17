import React from "react";
import { Link } from "react-router-dom";
import dateHelper from "../../utils/date_helper";

const TopRightList = ({ journal }) => (
  <ul className="index-top-right">
    <li className="right-img">
      <Link to={`/journals/${journal.id}`}>
        <img src={journal.photo} />
      </Link>
    </li>
    <h3>
      <Link to={`/journals/${journal.id}`}>{journal.title}</Link>
    </h3>
    <li className="subtitle">{journal.subtitle}</li>

    <ul className="btm">
      <li>
        {journal.author} in {journal.category}
      </li>
      <ul className="date">
        <li>{dateHelper(journal.updated_at)}</li>
        <li>
          <i className="fas fa-circle"></i>
        </li>
        <li>{`${Math.floor(Math.random() * 10 + 2)} min read`}</li>
        <li>
          <i className="fas fa-star"></i>
        </li>
      </ul>
    </ul>
  </ul>
);

export default TopRightList;
