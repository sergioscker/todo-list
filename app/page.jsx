'use client';

import { useState } from 'react';

// icon
import { GrAddCircle } from 'react-icons/gr';

// componets
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { TasksList } from '@/components/TasksList';
import Header from '@/components/Header';

// hook
import { useTasks } from '@/hooks/useTasks';

export default function Home() {
  const { tasks, addTask, deleteTask, toggleTaskCompletion } = useTasks();
  const [newTask, setNewTask] = useState('');

  const handleAddTasks = (event) => {
    addTask(newTask);
    setNewTask('');
    event.preventDefault();
  };
  return (
    <main className="w-full h-auto">
      <Header tasks={tasks} />
      {/* form */}
      <form
        onSubmit={handleAddTasks}
        className="flex justify-center items-center gap-5 p-5 w-full"
      >
        <Input
          type="text"
          value={newTask}
          onChange={(data) => setNewTask(data.target.value)}
          className="text-[16px]"
          placeholder="Add a new task"
        />
        <Button type="submit" className="bg-bluedark text-[14px] p-3">
          Create <GrAddCircle />
        </Button>
      </form>

      {/* labels */}
      <div className="w-full h-auto p-5">
        <div
          className="flex flex-wrap items-center justify-between gap-4
         md:w-[736px] mx-auto py-3"
        >
          <div
            className="flex gap-2 items-center justify-center text-blue text-[14px] 
        text-center font-bold"
          >
            Tasks created
            <span
              className="flex items-center justify-center bg-gray400 text-white text-[12px]
        rounded-full p-3 w-[25px] h-[20px]"
            >
              {tasks.length}
            </span>
          </div>

          <div
            className="flex gap-2 items-center justify-center text-purple text-[14px] 
        text-center font-bold"
          >
            Completed
            <span
              className="flex items-center justify-center bg-gray400 text-white text-center 
            text-[12px] mx-w-full h-[20px] rounded-full p-3"
            >
              {tasks.filter((task) => task.completed).length} of {tasks.length}
            </span>
          </div>
        </div>
      </div>

      {/* tasks */}
      <div className="flex justify-center items-center p-5 mt-5">
        <TasksList
          tasks={tasks}
          onDelete={deleteTask}
          onToggle={toggleTaskCompletion}
        />
      </div>
    </main>
  );
}
