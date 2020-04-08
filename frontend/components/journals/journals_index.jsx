import React from 'react';
import { Link } from 'react-router-dom';


class JournalIndex extends React.Component{
    
    componentDidMount(){
        this.props.requestCategoryJournals();
    }

    render(){
        const {journals} = this.props;
        const journalList = journals.map( journal => (
        <li key={journal.id}>{journal.title}</li>
        ));

        return(
            <div>
                <p>this is category name</p>
                <h1>this is description</h1>
                <p>this is follow and cound of follow</p>
                <p>this is list of journal pic and journal title and an overview</p>
            </div>
        )
    }

}

export default JournalIndex;