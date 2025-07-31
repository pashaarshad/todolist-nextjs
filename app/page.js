"use client";
import React, { useState } from "react";

const Page = () => {
    const [task, setTask] = useState("");
    const [description, setDescription] = useState("");
    const [mainTasks, setMainTasks] = useState([]);

    // Handle form submission to add a new task
    const handleSubmit = (e) => {
        e.preventDefault();
        // Add new task with completed: false
        setMainTasks([...mainTasks, { task, description, completed: false }]);
        setTask("");
        setDescription("");
    };

    // Delete a task by index
    const handleDelete = (i) => {
        let copytask = [...mainTasks];
        copytask.splice(i, 1);
        setMainTasks(copytask);
    };

    // Mark a task as completed by index
    const handleComplete = (i) => {
        let copytask = [...mainTasks];
        copytask[i].completed = true;
        setMainTasks(copytask);
    };

    // Render tasks or a message if no tasks
    let renderTask = <h2>No Task Available</h2>;

    if (mainTasks.length > 0) {
        renderTask = mainTasks.map((t, i) => {
            return (
                <li
                    className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md mb-4"
                    key={i}
                >
                    <div className="flex items-center justify-between m-1">
                        {/* Show completed tasks with line-through */}
                        <h5
                            className={`text-2xl m-4 font-semibold ${t.completed ? "line-through text-gray-400" : ""
                                }`}
                        >
                            {t.task}
                        </h5>
                        <h6
                            className={`text-2xl m-4 font-medium ${t.completed ? "line-through text-gray-400" : ""
                                }`}
                        >
                            {t.description}
                        </h6>
                        {/* Complete button, disabled if already completed */}
                        <button
                            onClick={() => handleComplete(i)}
                            className={`bg-green-500 text-white px-2 py-1 rounded mr-2 ${t.completed ? "opacity-50 cursor-not-allowed" : ""
                                }`}
                            disabled={t.completed}
                        >
                            {t.completed ? "Completed" : "Complete"}
                        </button>
                        {/* Delete button */}
                        <button
                            onClick={() => handleDelete(i)}
                            className="bg-red-500 text-white px-2 py-1 rounded"
                        >
                            Delete
                        </button>
                    </div>
                </li>
            );
        });
    }

    return (
        <>
            <h1 className="bg-black text-white text-center m-2 p-2">
                Arshad ToDO List app
            </h1>
            <form onSubmit={handleSubmit}>
                <input
                    className="text-2xl border-4 m-4 px-3 py-2"
                    type="text"
                    placeholder="Add a new task"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                />
                <input
                    className="text-2xl border-4 m-4 px-3 py-2 "
                    type="text"
                    placeholder="Enter the Description here"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg m-8">
                    Add Task
                </button>
            </form>
            <hr className="my-4" />
            <div className="p-8 bg-green-200">
                <ul>{renderTask}</ul>
            </div>
        </>
    );
};

export default Page;
