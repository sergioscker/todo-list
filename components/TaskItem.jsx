'use client';

// icon
import { FaTrashAlt } from 'react-icons/fa';

// component
import { Checkbox } from './ui/checkbox';

export const TaskItem = ({ task, index, onDelete, onToggle }) => (
  <div
    className={`flex flex-row justify-between items-center gap-3 border border-gray400 rounded-md p-4
       bg-gray500 mx-w-[736px] w-full min-h-[72px] h-full`}
  >
    {/* checkbox container */}
    <div className="flex items-center justify-center h-[24px] w-[24px] ">
      <Checkbox
        checked={task.completed}
        onClick={() => onToggle(index)}
        className={`border border-blue rounded-full ${
          task.completed ? 'border-none' : ''
        }`}
      />
    </div>

    {/* textTasks */}
    <p
      className={`flex items-center justify-center text-[14px] text-left font-light text-white 
        mx-w-[632px] h-[42px] leading-4 ${
          task.completed ? 'line-through text-white/40' : ''
        }`}
    >
      {task.text}
    </p>

    {/* trash button */}
    <div className="flex items-center justify-center min-h-[24px] mx-w-[24px]">
      <button
        type="button"
        onClick={() => onDelete(index)}
        aria-label="Delete task"
      >
        <FaTrashAlt className="text-gray300" />
      </button>
    </div>
  </div>
);
