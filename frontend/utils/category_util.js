export const fetchAllCategories = () =>
  $.ajax({
    method: "GET",
    url: "/api/categories",
  });

export const fetchCategory = (category) =>
  $.ajax({
    method: "GET",
      url: `/api/categories/${category.id}`,
  });
