const initialData = {
  tasks: {
    "task-1": { id: "task-1", content: "task1" },
    "task-2": { id: "task-2", content: "task2" },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "Owner",
      taskIds: ["task-1", "task-2"],
    },
    "column-2": {
      id: "column-2",
      title: "Status",
      taskIds: ["task-1", "task-2"],
    },
  },
  columnOrder: ["column-1", "column-2"],
};
export default initialData;
