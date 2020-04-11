import React from "react";
import { Link } from "react-router-dom";

const UserJournalsList = ({ user }) => {
  // debugger
  const myList = user.journals.map((journal) => (
    <li key={journal.id}>
      <Link to={`/journals/${journal.id}`}>{journal.title}</Link>
    </li>
  ));
  return (
    <>
      <ul>{myList}</ul>
    </>
  );
};

export default UserJournalsList;
