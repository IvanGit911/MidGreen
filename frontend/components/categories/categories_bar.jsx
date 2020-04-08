import React from "react";
import { Link } from "react-router-dom";


class CategoriesBar extends React.Component {
  componentDidMount() {
    this.props.requestAllCategories();
  }
  render() {
    const { categories } = this.props;
    const categoryList = categories.map((category) => (
      <li key={category.id}><Link to={`/categories/${category.id}/journals`}>{category.title}</Link></li>
    ));

    return (
      <div>
        <ul className="categoryList">{categoryList}</ul>
      </div>
    );
  }
}

export default CategoriesBar;
