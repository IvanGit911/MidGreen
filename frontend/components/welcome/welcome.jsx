import React from "react";
import { connect } from "react-redux";

class Welcome extends React.Component {
  render() {
    return (
      <div>
        <h1>this is the welcome page!!</h1>
      </div>
    );
  }
}



const msp = state => ({

})

const mdp = dispatch => ({

})

export default connect(msp, mdp)(Welcome);
