const initialData = {
  tasks: {
    "task-1": { id: "task-1", content: "Working on it" },
    "task-2": { id: "task-2", content: "Stuck" },
    "task-3": { id: "task-3", content: "Waiting for review" },
    "task-4": { id: "task-4", content: "Done" },
    "task-5": { id: "task-5", content: "Stuck" },
    "task-6": { id: "task-6", content: "Done" },
    "task-7": { id: "task-7", content: "task1" },
    "task-8": { id: "task-8", content: "task2" },
    "task-9": { id: "task-9", content: "task3" },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "Owner",
      taskIds: ["task-8", "task-9"],
    },
    "column-2": {
      id: "column-2",
      title: "Status",
      taskIds: ["task-1", "task-2", "task-3", "task-4", "task-5", "task-6"],
    },
    "column-3": {
      id: "column-3",
      title: "Due Date",
      taskIds: ["task-7", "task-8"],
    },
    "column-4": {
      id: "column-4",
      title: "Priority",
      taskIds: ["task-7", "task-8"],
    },
  },
  columnOrder: ["column-1", "column-2", "column-3", "column-4"],
};
export default initialData;
