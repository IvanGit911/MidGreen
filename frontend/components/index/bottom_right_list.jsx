import React from "react";
import { Link } from "react-router-dom";
import dateHelper from "../../utils/date_helper";

const BottomRightList = ({ journal, i }) => (
  <ul className="index-btm-right-content">
    <li>
      <p className="num">{`0${i+1}`}</p>
      <div className="info">
        <h4>
          <Link to={`/journals/${journal.id}`}>{journal.title}</Link>
        </h4>
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
      </div>
    </li>
  </ul>
);

export default BottomRightList;
