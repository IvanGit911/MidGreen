import React from "react";

class CategoriesBar extends React.Component {
  componentDidMount() {
    this.props.requestAllCategories();
  }
  render() {
    const { categories } = this.props;
    const categoryList = categories.map((category) => (
      <li key={category.id}>{category.title}</li>
    ));

    return (
      <div>
        <ul className="categoryList">{categoryList}</ul>
      </div>
    );
  }
}

export default CategoriesBar;
