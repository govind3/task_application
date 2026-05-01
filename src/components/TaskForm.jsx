import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "./common/Input";

const TaskForm = ({ addTask, editingTask, updateTask }) => {
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      priority: "Low",
      dueDate: "",
    },
    validationSchema: Yup.object({
      title: Yup.string().trim().required("Title is required"),

      description: Yup.string().trim().required("Description is required"),

      priority: Yup.string()
        .oneOf(["Low", "Medium", "High"])
        .required("Priority is required"),

      dueDate: Yup.string().required("Due date is required"),
    }),

    onSubmit: (values, { resetForm }) => {
      if (editingTask) {
        updateTask({ ...editingTask, ...values });
      } else {
        addTask(values);
      }
      resetForm();
    },
  });

  useEffect(() => {
    if (editingTask && typeof formik !== "undefined") {
      formik.setValues({
        title: editingTask.title || "",
        description: editingTask.description || "",
        priority: editingTask.priority || "Low",
        dueDate: editingTask.dueDate || "",
      });
    }
  }, [editingTask]);

  return (
    <div className="lg:col-span-1 rounded-2xl bg-white p-6 shadow-sm">
      <h2 className="text-xl font-semibold mb-5">
        {editingTask ? "Edit task" : "Create new task"}
      </h2>

      <form className="space-y-4" onSubmit={formik.handleSubmit}>
        <Input
          label="Title*"
          name="title"
          placeholder="Enter task title"
          value={formik.values.title}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.title && formik.errors.title}
        />

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Description*
          </label>

          <textarea
            name="description"
            rows="2"
            placeholder="Enter task description"
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full rounded-xl border border-gray-300 px-4 py-3"
          />

          {formik.touched.description && formik.errors.description && (
            <p className="text-sm text-error mt-1">
              {formik.errors.description}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Priority*
          </label>

          <select
            name="priority"
            value={formik.values.priority}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full rounded-xl border border-gray-300 px-4 py-3"
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>

          {formik.touched.priority && formik.errors.priority && (
            <p className="text-sm text-error mt-1">{formik.errors.priority}</p>
          )}
        </div>

        <Input
          label="Due date*"
          type="date"
          name="dueDate"
          value={formik.values.dueDate}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.dueDate && formik.errors.dueDate}
          min={new Date().toISOString().split("T")[0]}
        />

        <button className="w-full rounded-xl bg-primary-600 py-3 text-white font-medium">
          {editingTask ? "Update task" : "Create task"}
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
