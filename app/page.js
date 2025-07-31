"use client";
// This file is a React component for a ToDo List application.
// It includes a form to add new tasks with a title and description.
// The component uses React hooks for state management and handles form submission.
// The styles are applied using Tailwind CSS classes for a modern look.
// The component is exported as the default export for use in a Next.js application.
import React, { useState } from "react";

const Page = () => {
    const [task, setTask] = useState("");
    const [description, setDescription] = useState("");
    const [mainTasks, setMainTasks] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setMainTasks([...mainTasks, { task, description }]);
        console.log(mainTasks);

        setTask("");
        setDescription("");
        // console.log("Task:", task);
        // Handle adding the task
    };

    const handleDelete = (i) => {
                 let copytask = [...mainTasks]
                 copytask.splice(i, 1)
                 setMainTasks(copytask);
        }

    let renderTask = <h2>No Task Avilable </h2>

    if (mainTasks.length > 0 ) {
         renderTask = mainTasks.map((t, i) => {
        return (
            <li className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md mb-4" key={i}>
                <div className="flex items-center justify-between m-1">
                    <h5 className="text-2xl m-4 font-semibold"> {t.task}   </h5>
                    <h6 className="text-2xl m-4 font-medium">{t.description}</h6>
                    <button 
                    onClick={()=>{
                        handleDelete(i)
                    }}
                    className="bg-red-500 text-white px-2 py-1 rounded ">Delete</button>
                </div>
        </li>
        )

    });
    }

   
    return (
        <>
            <h1 className="bg-black text-white text-center m-2 p-2">Arshad ToDO List app</h1>
            <form onSubmit={handleSubmit}>
                <input
                    className="text-2xl border-4 m-4 px-3 py-2"
                    type="text"
                    placeholder="Add a new task"
                    value={task}
                    onChange={(e) => {
                        setTask(e.target.value)
                        // console.log(e.target.value)
                    }} />


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
                <ul> {renderTask} </ul>
            </div>
        </>
    );
};

export default Page;
