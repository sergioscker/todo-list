import { useEffect, useState } from 'react';

export const useTasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    setTasks(storedTasks ? JSON.parse(storedTasks) : []);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (newTaskText) => {
    if (newTaskText.trim()) {
      setTasks([...tasks, { text: newTaskText, completed: false }]);
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const toggleTaskCompletion = (index) => {
    // Mapeia as tarefas, alterando apenas a tarefa com o índice correspondente
    const updatedTasks = tasks.map((task, i) => {
      if (i === index) {
        // Retorna a tarefa com a propriedade `completed` invertida
        return { ...task, completed: !task.completed };
      }
      return task; // Retorna a tarefa sem modificações para os outros itens
    });

    // Atualiza o estado `tasks` com a nova lista modificada
    setTasks(updatedTasks);
  };
  return { tasks, addTask, deleteTask, toggleTaskCompletion };
};
