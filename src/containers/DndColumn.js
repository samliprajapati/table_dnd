import React, { Component, useState } from "react";
import initialData from "./InitialData";
import Column from "./Column";
class DndColumn extends Component {
  state = initialData;
  render() {
    console.log(initialData);
    return (
      <div>
        {this.state.columnOrder.map((columnId) => {
          debugger;
          const column = this.state.columns[columnId];
          const tasks = column.taskIds.map(
            (taskId) => this.state.tasks[taskId]
          );
          return <Column key={column.id} column={column} tasks={tasks} />;
        })}
      </div>
    );
  }
}

export default DndColumn;
