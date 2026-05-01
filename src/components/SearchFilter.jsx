import React from "react";

const SearchFilter = ({
  search,
  setSearch,
  statusFilter,
  setStatusFilter,
  priorityFilter,
  setPriorityFilter,
}) => {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm">
      <h2 className="text-xl font-semibold mb-4">Search & Filter</h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by title or description"
          className="rounded-xl border border-gray-300 px-4 py-3 md:col-span-2"
        />

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="rounded-xl border border-gray-300 px-4 py-3"
        >
          <option>All</option>
          <option>Pending</option>
          <option>Completed</option>
        </select>
        <select
          value={priorityFilter}
          onChange={(e) => setPriorityFilter(e.target.value)}
          className="rounded-xl border border-gray-300 px-4 py-3"
        >
          <option>All</option>
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>
      </div>
    </div>
  );
};

export default SearchFilter;
