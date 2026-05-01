import React from "react";
import DescriptionCell from "./common/DescriptionCell";
import TitleCell from "./common/TitleCell";

const TaskTable = ({ tasks, toggleTaskStatus, deleteTask, setEditingTask }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b text-left">
            <th className="py-3 max-w-[180px]">Title</th>
            <th className="py-3 max-w-[240px] pr-2">Description</th>
            <th className="py-3 min-w-[76px]">Priority</th>
            <th className="py-3 min-w-[110px]">Due date</th>
            <th className="py-3 min-w-[100px]">Status</th>
            <th className="py-3 min-w-[120px]">Actions</th>
          </tr>
        </thead>

        <tbody>
          {tasks.length ? (
            tasks.map((task) => (
              <tr key={task.id} className="border-b ">
                <TitleCell title={task.title} />
                <DescriptionCell description={task.description} />
                <td className="py-4">{task.priority}</td>
                <td className="py-4">{task.dueDate}</td>
                <td
                  className={`py-4 ${task.completed ? "text-success" : "text-yellow-600"}`}
                >
                  {task.completed ? "Completed" : "Pending"}
                </td>

                <td className="py-4 flex gap-2">
                  <button
                    onClick={() => setEditingTask(task)}
                    className="text-sm text-secondary-600"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => toggleTaskStatus(task.id)}
                    className="text-sm text-secondary-600"
                  >
                    {task.completed ? "Pending" : "Complete"}
                  </button>

                  <button
                    onClick={() => deleteTask(task.id)}
                    className=" text-sm text-secondary-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="py-6 text-center">
                No tasks found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TaskTable;
