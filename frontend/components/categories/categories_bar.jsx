import React from "react";

class CategoriesBar extends React.Component {
  componentDidMount() {
    this.props.requestAllCategories();
  }
  render() {
      const { categories} = this.props;
      const categoryList = categories.map( category => (
      <li>{category.title}</li>
      ))
    return (
      <div>
        <h1>this is CategoriesBar!</h1>
            <p>{categoryList}</p>
      </div>
    );
  }
}

export default CategoriesBar;
