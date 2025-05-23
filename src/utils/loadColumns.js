/**
 * Loads the columns data of the Kanban Board.
 * @returns {Object[]} Array of the loaded columns.
 */
export default function loadColumns() {
  const data = localStorage.getItem("columns");
  return data
    ? JSON.parse(data)
    : [
        {
          id: "backlog",
          name: "Backlog",
          default: false,
          enabled: true,
          data: [{ name: "log 1", id: 1 }],
        },
        {
          id: "tasks",
          name: "Tasks",
          default: true,
          enabled: true,
          data: [
            { name: "taks 1", id: 2 },
            { name: "task 2", id: 3 },
          ],
        },
        {
          id: "progress",
          name: "In progress",
          default: true,
          enabled: true,
          data: [],
        },
        {
          id: "done",
          name: "Done",
          default: true,
          enabled: true,
          data: [{ name: "done 1", id: 4 }],
        },
      ];
}
