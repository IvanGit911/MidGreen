import React from "react";
import dateHelper from "../../utils/date_helper";
import { Link } from "react-router-dom";
import TopMidList from "./top_mid_list";
import BottomLeftList from "./bottom_left_list";
import BottomRightList from "./bottom_right_list";
import TopStory from "./top_story";
import TopRightList from "./top_right_list";

class IndexPage extends React.Component {
  componentDidMount() {
    this.props.requestAllJournals();
  }

  render() {
    const { journals } = this.props;

    //todo this may need to change

    if (!journals[0]) return null;

    const randomJournals = [];
    for (let i = 0; i < 15; i++) {
      randomJournals.push(
        journals[Math.floor(Math.random() * journals.length)]
      );
    }

    const topStory = randomJournals[0];

    const topRightJournal = randomJournals[1];

    const topMidJournals = randomJournals.slice(2, 5);
    const topMidList = topMidJournals.map((journal) => (
      <>
        <TopMidList key={journal.id} journal={journal} />
      </>
    ));

    const btmLeftJournals = randomJournals.slice(5, 10);
    const btmLeftList = btmLeftJournals.map((journal) => (
      <>
        <BottomLeftList key={journal.id} journal={journal} />
      </>
    ));

    const btmRightJournals = randomJournals.slice(10, 14);
    const btmRightList = btmRightJournals.map((journal, idx) => (
      <>
        <BottomRightList key={journal.id} journal={journal} i={idx} />
      </>
    ));

    return (
      <div className="index">
        <div className="index-top">
          <TopStory key={topStory.id} topStory={topStory} />

          <div className="index-top-mid">{topMidList}</div>

          <TopRightList key={topRightJournal.id} journal={topRightJournal} />
        </div>
        <div className="index-mid">SEE EDITOR'S PICKS</div>

        <div className="index-btm">
          <div className="index-btm-left">{btmLeftList}</div>

          <div className="index-btm-right">
            <h3 className="title">Popular on Midgreen</h3>
            {btmRightList}
          </div>
        </div>
      </div>
    );
  }
}

export default IndexPage;
