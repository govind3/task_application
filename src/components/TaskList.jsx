import React, { useState } from "react";
import TaskItem from "./TaskItem";
import TaskTable from "./TaskTable";

const TaskList = ({ tasks, toggleTaskStatus, deleteTask, setEditingTask }) => {
  const [viewMode, setViewMode] = useState("list");
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm h-full overflow-y-auto ">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-semibold">Task list</h2>

        <div className="flex overflow-hidden rounded-xl border bg-primary-200">
          <button
            onClick={() => setViewMode("list")}
            className={`px-2 py-1 text-lg font-medium transition ${
              viewMode == "list"
                ? "bg-primary-600 text-white"
                : "bg-white text-gray-400"
            }`}
          >
            List view
          </button>

          <button
            onClick={() => setViewMode("card")}
            className={`px-2 py-1 text-lg font-medium transition ${
              viewMode == "card"
                ? "bg-primary-600 text-white"
                : "bg-white text-gray-400"
            }`}
          >
            Card view
          </button>
        </div>
      </div>

      {viewMode == "list" ? (
        <TaskTable
          tasks={tasks}
          toggleTaskStatus={toggleTaskStatus}
          deleteTask={deleteTask}
          setEditingTask={setEditingTask}
        />
      ) : (
        <div className="space-y-4">
          {tasks.length ? (
            tasks.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                toggleTaskStatus={toggleTaskStatus}
                deleteTask={deleteTask}
                setEditingTask={setEditingTask}
              />
            ))
          ) : (
            <p className="flex w-full justify-center h-full">No tasks found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default TaskList;
