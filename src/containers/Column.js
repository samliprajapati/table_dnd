import React, { Component, useState } from "react";
import styled from "styled-components";
import { Droppable, Draggable } from "react-beautiful-dnd";
import Task from "./Task";
const Container = styled.div`
  margin: 8px;
  border: 1px solid blue;
  border-radius: 2px;
  width: 220px;
  display: flex;
  flex-direction: column;
`;
const Title = styled.h3`
  padding: 8px;
`;
const TaskList = styled.div`
  padding: 8px;
  min-height: 100px;
  background-color: ${(props) => (props.isDraggingOver ? "blue" : "white")};
`;

class Column extends Component {
  render() {
    console.log(this.props.column.id);
    return (
      <Draggable draggableId={this.props.column.id} index={this.props.index}>
        {(provided) => (
          <Container
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <Title>{this.props.column.title}</Title>

            <Droppable droppableId={this.props.column.id} type="task">
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  isDraggingOver={snapshot.isDraggingOver}
                >
                  <TaskList>
                    {this.props.tasks.map((task, index) => (
                      <Task Key={task.id} tasks={task} index={index} />
                    ))}
                    {provided.placeholder}
                  </TaskList>
                </div>
              )}
            </Droppable>
          </Container>
        )}
      </Draggable>
    );
  }
}

export default Column;
