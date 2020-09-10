import React, { Component, useState } from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";
const Container = styled.div`
  margin: 8px;
  border: 1px solid red;
  border-radius: 2px;
  margin-bottom: 8px;

  background-color: ${(props) => (props.isDragging ? "green" : "white")};
`;

class Task extends Component {
  render() {
    console.log(this.props.tasks.id);
    console.log(this.props.index);
    return (
      <Draggable draggableId={this.props.tasks.id} index={this.props.index}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            isDragging={snapshot.isDragging}
          >
            <Container>{this.props.tasks.content}</Container>
          </div>
        )}
      </Draggable>
    );
  }
}

export default Task;
