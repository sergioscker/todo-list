'use client';

import { useEffect, useState } from 'react';

// icon
import { GrAddCircle } from 'react-icons/gr';

// componets
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tasks } from '@/components/Tasks';
import Header from '@/components/Header';

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    setTasks(storedTasks ? JSON.parse(storedTasks) : []);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const handleDelete = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const toggleComplete = (index) => {
    // Mapeia as tarefas, alterando apenas a tarefa com o índice correspondente
    const updatedTasks = tasks.map((task, i) => {
      if (i === index) {
        // Retorna a tarefa com a propriedade `completed` invertida
        return { ...task, completed: !task.completed };
      }
      return task; // Retorna a tarefa sem modificações para os outros itens
    });

    // Verifica no console o estado atualizado
    console.log('Updated task state:', updatedTasks);

    // Atualiza o estado `tasks` com a nova lista modificada
    setTasks(updatedTasks);
  };

  return (
    <div className="w-full h-auto">
      <Header tasks={tasks} />

      <div className="flex flex-row justify-center items-center gap-5 w-full p-4">
        <Input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="p-4 mx-w-[638px]"
          placeholder="Add a new task"
        />
        <Button onClick={addTask} type="submit" className="bg-bluedark p-4">
          Create <GrAddCircle />
        </Button>
      </div>

      <div className="w-full h-auto">
        {/* labels */}
        <div className="flex items-center justify-between w-[750px] gap-[40px] mx-auto py-3">
          <div
            className="flex gap-2 items-center justify-center text-blue text-[14px]
           text-left font-bold"
          >
            Tasks created
            <span
              className="flex items-center justify-cente bg-gray400 text-white 
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
              className="flex items-center justify-cente bg-gray400 text-white 
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
          onDelete={handleDelete}
          onToggle={toggleComplete}
        />
      </div>
    </div>
  );
}
