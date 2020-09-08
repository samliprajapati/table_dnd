import React, { Component, useState } from "react";

class Column extends Component {
  render() {
    return <div>{this.props.column.title}</div>;
  }
}

export default Column;
