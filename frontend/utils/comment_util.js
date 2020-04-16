export const fetchComment = (commentId) => (
    $.ajax({
        method: "GET",
        url: `/api/comments/${commentId}`
    })
);



export const createComment = comment => (
    $.ajax({
        method: 'POST',
        url: '/api/comments',
        data: { comment }
    })
);