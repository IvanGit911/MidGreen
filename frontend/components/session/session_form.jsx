import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    update(field){
        return e => this.setState({[field]: e.target.value});
    }

    render() {
        const { formType, navLink, errors } = this.props;
        const errList = errors.map((err, idx) => (
            <li key={idx}>{err}</li>
        ))
            // debugger
        return (
            <div>
                <h1>{formType}</h1>
                <ul className="session-err">
                    {errList}
                </ul>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="username">Username
                        <input type="text" value={this.state.username} onChange={this.update('username')}/>
                    </label>
                    <label htmlFor="password">password
                        <input type="password" value={this.state.password} onChange={this.update('password')}/>
                    </label>

                    <input type="submit" value={formType} />

                </form>
                {navLink}
            </div>
        )
    }
}

export default SessionForm;