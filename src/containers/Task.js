import React, { Component, useState } from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";
const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  margin-bottom: 8px;
`;

class Task extends Component {
  render() {
    return (
      <Draggable draggableId={this.props.tasks.id} index={this.props.index}>
        {(provided) => (
          <Container
            innerRef={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            {this.props.tasks.content}
          </Container>
        )}
      </Draggable>
    );
  }
}

export default Task;
