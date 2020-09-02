const { updateComment } = require("../../utils/comment_util")
const { connect } = require("react-redux")

const msp = (state, ownProps) => {

}

const mdp = dispatch =< ({
    updateComment: comment => dispatch(updateComment)
})

export default connect