"use client";
import React, { useState, useEffect } from "react";

const TASKS_KEY = "todolist_tasks";

const Page = () => {
    const [task, setTask] = useState("");
    const [description, setDescription] = useState("");
    const [mainTasks, setMainTasks] = useState([]);

    
    useEffect(() => {
        const storedTasks = localStorage.getItem(TASKS_KEY);
        if (storedTasks) {
            setMainTasks(JSON.parse(storedTasks));
        }
    }, []);

    
    useEffect(() => {
        localStorage.setItem(TASKS_KEY, JSON.stringify(mainTasks));
    }, [mainTasks]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setMainTasks([...mainTasks, { task, description, completed: false }]);
        setTask("");
        setDescription("");
    };

    const handleDelete = (i) => {
        let copytask = [...mainTasks];
        copytask.splice(i, 1);
        setMainTasks(copytask);
    };

    const handleComplete = (i) => {
        let copytask = [...mainTasks];
        copytask[i].completed = true;
        setMainTasks(copytask);
    };

    let renderTask = <h2>No Task Available</h2>;

    if (mainTasks.length > 0) {
        renderTask = mainTasks.map((t, i) => {
            return (
                <li
                    className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md mb-4"
                    key={i}
                >
                    <div className="flex items-center justify-between m-1">
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
                        <button
                            onClick={() => handleComplete(i)}
                            className={`bg-green-500 text-white px-2 py-1 rounded mr-2 ${t.completed ? "opacity-50 cursor-not-allowed" : ""
                                }`}
                            disabled={t.completed}
                        >
                            {t.completed ? "Completed" : "Complete"}
                        </button>
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
