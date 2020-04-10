import React from "react";

class CreateJournalForm extends React.Component {
    constructor(props){
        super(props);
        this.state = this.props.journal
    }
  render() {
    return (
      <div>
        <div>this is create page</div>
        <form action="">
            <input type="text" placeholder="Title"/>

            <textarea name="" id="" cols="30" rows="10" placeholder="Tell your story..."></textarea>
            <input type="submit" value='create'/>
        </form>
        <button></button>
      </div>
    );
  }
}

export default CreateJournalForm;
