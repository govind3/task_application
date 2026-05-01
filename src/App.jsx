import React, { useEffect, useMemo, useState } from "react";
import Header from "./components/Header";
import TaskStats from "./components/TaskStats";
import TaskForm from "./components/TaskForm";
import SearchFilter from "./components/SearchFilter";
import TaskList from "./components/TaskList";

const App = () => {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  const [editingTask, setEditingTask] = useState(null);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [priorityFilter, setPriorityFilter] = useState("All");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    const newTask = {
      id: Date.now(),
      ...task,
      completed: false,
    };

    setTasks((prev) => [newTask, ...prev]);
  };

  const toggleTaskStatus = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const updateTask = (updatedTask) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === updatedTask.id ? updatedTask : task)),
    );
    setEditingTask(null);
  };

  const deleteTask = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this task?",
    );
    if (!confirmDelete) return;

    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      const matchesSearch =
        task.title.toLowerCase().includes(search.toLowerCase()) ||
        task.description.toLowerCase().includes(search.toLowerCase());

      const matchesStatus =
        statusFilter === "All"
          ? true
          : statusFilter === "Completed"
            ? task.completed
            : !task.completed;

      const matchesPriority =
        priorityFilter === "All"
          ? true
          : priorityFilter === "Low"
            ? task.priority === "Low"
            : priorityFilter === "Medium"
              ? task.priority === "Medium"
              : task.priority === "High";

      return matchesSearch && matchesStatus && matchesPriority;
    });
  }, [tasks, search, statusFilter, priorityFilter]);

  return (
    <div className="h-auto lg:h-[calc(100vh)] bg-gray-100 p-4 flex flex-col">
      <Header />
      <TaskStats tasks={tasks} />

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-4 flex-1 min-h-0">
        <TaskForm
          addTask={addTask}
          editingTask={editingTask}
          updateTask={updateTask}
        />

        <div className="lg:col-span-2 flex flex-col gap-4 min-h-0">
          <SearchFilter
            search={search}
            setSearch={setSearch}
            statusFilter={statusFilter}
            setStatusFilter={setStatusFilter}
            priorityFilter={priorityFilter}
            setPriorityFilter={setPriorityFilter}
          />
          <div className="flex-1 min-h-0">
            <TaskList
              tasks={filteredTasks}
              toggleTaskStatus={toggleTaskStatus}
              deleteTask={deleteTask}
              setEditingTask={setEditingTask}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
