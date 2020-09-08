import React, { Component, useState } from "react";
import initialData from "./InitialData";
import { DragDropContext } from "react-beautiful-dnd";
import Column from "./Column";
class DndColumn extends Component {
  state = initialData;
  onDragEnd = (result) => {};
  render() {
    console.log(initialData);
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        {this.state.columnOrder.map((columnId) => {
          const column = this.state.columns[columnId];
          const tasks = column.taskIds.map(
            (taskId) => this.state.tasks[taskId]
          );
          return <Column key={column.id} column={column} tasks={tasks} />;
        })}
      </DragDropContext>
    );
  }
}

export default DndColumn;
