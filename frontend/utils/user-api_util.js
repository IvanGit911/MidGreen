export const signup = (user) => (
  $.ajax({
    method: "POST",
    url: "/api/users",
    data: { user },
  })
);


export const fetchUser = (userId) => (
  $.ajax({
    method: "GET",
    url: `/api/users/${userId}`,
  })
);

export const updateUser = (user) =>(
  $.ajax({
    method: "PATCH",
    url: `/api/users/${user.id}`,
    data: { user },
  })
);


export const deleteUser = (userId) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/users/${userId}`
  })
)

export const follow = (userId) => {
  // debugger
  return $.ajax({
    method: "POST",
    url: `/api/users/${userId}/follow`,
    data: {userId}
  })
}


export const unfollow = (userId) => (
  $.ajax({
    method: "POST",
    url: `/api/users/${userId}/unfollow`,
    data: { userId }
  })
)
