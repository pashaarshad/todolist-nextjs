"use client";
// This file is a React component for a ToDo List application.
// It includes a form to add new tasks with a title and description.
// The component uses React hooks for state management and handles form submission.
// The styles are applied using Tailwind CSS classes for a modern look.
// The component is exported as the default export for use in a Next.js application.
import React,{ useState } from "react";

const Page = () => {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle adding the task
  };

  return (
   <>   
      <h1 className="bg-black text-white text-center m-2 p-2">Arshad ToDO List app</h1>
       <form>
            <input 
            className="text-2xl border-4 m-8 px-4 py-2"
            type="text" 
            placeholder="Add a new task"
            value={task}
            onChange={(e) => {
                setTask(e.target.value) 
                // console.log(e.target.value)
            }} />
            

             <input 
            className="text-2xl border-4 m-8 px-10 py-9"
            type="text" 
            placeholder="Enter the Description here"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            />

            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg m-8">
            Add Task
            </button>
            
       </form>
   </>
  );
};

export default Page;
