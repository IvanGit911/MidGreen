import React from "react";

class SelectCategory extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "solar" };

    // this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    const categoryList = this.props.categories.map((category) => (
      <option key={category.id} value="mango">
        {category.title}
      </option>
    ));
    return <select className="select-cat-list">{categoryList}</select>;
  }
  //
}

export default SelectCategory;
