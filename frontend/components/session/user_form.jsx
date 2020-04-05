

// class EditUserForm extends React.Component {
//     componentDidMount() {
//         this.props.fetchUser(this.props.match.params.userId)
//     }

//     render() {
//         const { user, formType, processForm } = this.props;

//         if (!user) return null;
//         return (
            
//         )

//     }
// }

// const msp = (state, ownProps) => {
//     // debugger
//     return {
//         user: state.entities.users[ownProps.match.params.userId],
//         formType: 'signup'
//     }
// };

// const mdp = dispatch => ({
//     fetchUser: (userId) => dispatch(fetchUser(userId)),
//     processForm: (user) => dispatch(signup(user))
// });


// export default connect(msp, mdp)(EditUserForm);