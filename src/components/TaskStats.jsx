import React from "react";
import StatCard from "./common/StatCard";

const TaskStats = ({ tasks }) => {
  const total = tasks.length;
  const completed = tasks.filter((task) => task.completed).length;
  const pending = total - completed;

  return (
    <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-4">
      <StatCard title="Total tasks" value={total} />
      <StatCard title="Pending tasks" value={pending} />
      <StatCard title="Completed tasks" value={completed} />
    </section>
  );
};

export default TaskStats;
