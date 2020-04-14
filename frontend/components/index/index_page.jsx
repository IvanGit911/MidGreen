import React from "react";
import dateHelper from "../../utils/date_helper";

class IndexPage extends React.Component {
  componentDidMount() {
    // debugger
    this.props.requestAllJournals();
  }

  render() {
    const { journals, categories } = this.props;

    //todo this may need to change
    const topStory = journals[30];

    const journal1 = journals[Math.floor(Math.random() * 30)];
    const journal2 = journals[Math.floor(Math.random() * 30)];
    const journal3 = journals[Math.floor(Math.random() * 30)];
    const journal4 = journals[Math.floor(Math.random() * 30)];
    const journal5 = journals[Math.floor(Math.random() * 30)];
    const journal6 = journals[Math.floor(Math.random() * 30)];
    const journal7 = journals[Math.floor(Math.random() * 30)];
    const journal8 = journals[Math.floor(Math.random() * 30)];
    const journal9 = journals[Math.floor(Math.random() * 30)];
    // debugger
    if (!topStory) return null;

    return (
      <div className="index">
        <div className="index-top">
          <div className="index-top-left">
            <ul>
              <li>
                <img src={topStory.photo} />
              </li>
              <div className="index-j-info">
                <li className="title">{topStory.title}</li>
                <li className="subtitle">{topStory.subtitle}</li>
                <li className="btm">
                  <p>{topStory.author}</p>
                  <div className="date">
                    <li>{dateHelper(topStory.updated_at)}</li>
                    <li>
                      <i className="fas fa-circle"></i>
                    </li>
                    <li>{`${Math.floor(Math.random() * 10 + 2)} min read`}</li>
                  </div>
                </li>
              </div>
            </ul>
          </div>

          <div className="index-top-mid">
            <div>
              <img src="" alt="" />

              <ul>
                <li>title</li>
                <li>author in category</li>
                <li>date ic min ic</li>
              </ul>
            </div>

            <div>
              <img src="" alt="" />

              <ul>
                <li>title</li>
                <li>author in category</li>
                <li>date ic min ic</li>
              </ul>
            </div>

            <div>
              <img src="" alt="" />

              <ul>
                <li>title</li>
                <li>author in category</li>
                <li>date ic min ic</li>
              </ul>
            </div>
          </div>

          <div>
            <ul>
              <li>
                <img src="" alt="" />
              </li>
              <li>title</li>
              <li>subtitle</li>
              <li>author in category</li>
              <li>date ic min ic</li>
            </ul>
            <div>SEE EDITOR'S PICKS</div>
          </div>
        </div>

        <div>
          <div>BASED ON YOUR READING HISTORY</div>

          <div>
            <h3>Popular on Midgreen</h3>

            <div>
              01..
              <ul>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default IndexPage;
