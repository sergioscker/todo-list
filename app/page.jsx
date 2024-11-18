'use client';

import { useState } from 'react';

// icon
import { GrAddCircle } from 'react-icons/gr';

// componets
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tasks } from '@/components/Tasks';
import Header from '@/components/Header';

// hook
import { useTasks } from '@/hooks/useTasks';

export default function Home() {
  const { tasks, addTask, deleteTask, toggleTaskCompletion } = useTasks();
  const [newTask, setNewTask] = useState('');

  const handleAddTasks = () => {
    addTask(newTask);
    setNewTask('');
  };

  return (
    <main className="w-full h-auto">
      <Header tasks={tasks} />

      <div className="flex justify-center items-center gap-5 p-4">
        <Input
          type="text"
          value={newTask}
          onChange={(data) => setNewTask(data.target.value)}
          className="p-4"
          placeholder="Add a new task"
        />
        <Button
          onClick={handleAddTasks}
          type="buttom"
          className="bg-bluedark p-4"
        >
          Create <GrAddCircle />
        </Button>
      </div>

      <div className="w-full h-auto p-5">
        {/* labels */}
        <div
          className="flex flex-wrap items-center justify-between gap-4
         md:w-[736px] mx-auto py-3"
        >
          <div
            className="flex gap-2 items-center justify-center text-blue text-[14px] 
        text-left font-bold"
          >
            Tasks created
            <span
              className="flex items-center justify-center bg-gray400 text-white 
        rounded-full p-2 w-[25px] h-[20px]"
            >
              {tasks.length}
            </span>
          </div>

          <div
            className="flex gap-2 items-center justify-center text-purple text-[14px] 
        text-left font-bold"
          >
            Completed
            <span
              className="flex items-center justify-center bg-gray400 text-white 
        rounded-full p-2 w-[25px] h-[20px]"
            >
              {tasks.filter((task) => task.completed).length}
            </span>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center p-5 mt-5">
        <Tasks
          tasks={tasks}
          onDelete={deleteTask}
          onToggle={toggleTaskCompletion}
        />
      </div>
    </main>
  );
}
