import React from "react";

class JournalForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.journal;
  }

  update(field){
    return e=> this.setState({[field]: e.target.value})
  }


  render() {
    return (
      <div>
        <div>{this.props.btnText}</div>
        <form action="">
          <input
            type="text"
            placeholder="Title"
            onChange={this.update("title")}
            value={this.state.title}
          />

          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Tell your story..."
            onChange={this.update("body")}
            value={this.state.body}
          ></textarea>
          <input type="submit" value={this.props.btnText} />
        </form>
        <button></button>
      </div>
    );
  }
}

export default JournalForm;
