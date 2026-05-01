import React from "react";

const TaskItem = ({ task, toggleTaskStatus, deleteTask, setEditingTask }) => {
  return (
    <div
      className={`rounded-xl border  p-4 ${task.completed ? "border-success" : "border-yellow-600"}`}
    >
      <div className="flex sm:flex-row flex-col gap-4 justify-between w-full">
        <h3
          className={`font-semibold text-font text-lg ${task.completed ? "line-through opacity-60" : ""}`}
        >
          {task.title}
        </h3>
        <p
          className={`text-sm px-2 py-1 rounded-lg flex items-center text-white justify-center gap-2 ${task.completed ? "bg-success" : "bg-yellow-600"}`}
        >
          Status: {task.completed ? "Completed" : "Pending"}
        </p>
      </div>

      <p className="text-coolGray text-sm mt-1">{task.description}</p>
      <div className="flex sm:flex-row flex-col gap-4 justify-between w-full">
        <div>
          <p className="text-sm mt-2">Priority: {task.priority}</p>
          <p className="text-sm">Due date: {task.dueDate}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-3">
          <button
            onClick={() => setEditingTask(task)}
            className="rounded-lg border px-4 py-2 text-sm bg-secondary-500 text-white"
          >
            Edit
          </button>
          <button
            onClick={() => toggleTaskStatus(task.id)}
            className="rounded-lg border px-4 py-2 text-sm hover:enabled:bg-primary-600 hover:enabled:text-white"
          >
            {task.completed ? "Mark pending" : "Complete"}
          </button>

          <button
            onClick={() => deleteTask(task.id)}
            className="rounded-lg border px-4 py-2 text-sm bg-red-400 text-white"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
