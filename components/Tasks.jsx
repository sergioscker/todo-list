'use client';

import Image from 'next/image';

// icon
import { FaTrashAlt } from 'react-icons/fa';

// component
import { Checkbox } from './ui/checkbox';

const TaskItem = ({ task, index, onDelete, onToggle }) => (
  <div
    className={`flex flex-row justify-between items-center gap-3 border border-gray400 rounded-md p-4
       bg-gray500 mx-w-[736px] w-full min-h-[72px] h-full`}
  >
    {/* checkbox container */}
    <div className="flex items-start justify-center h-[24px] w-[24px]">
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
      className={`text-[14px] text-left font-light text-white mx-w-[632px] h-[40px] 
        leading-4 ${task.completed ? 'line-through text-white/40' : ''}`}
    >
      {task.text}
    </p>

    {/* trash button */}
    <div className="flex items-start justify-center h-[24px] w-[24px]">
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

export const TasksList = ({ tasks = [], onDelete, onToggle }) => {
  return (
    <section className="max-w-[750px] w-full border-t border-gray400 rounded-md p-5">
      {/* tasks empty */}
      {tasks.length === 0 ? (
        <div className="flex flex-col gap-4 justify-center items-center py-[64px] px-6">
          <Image
            src="/assets/clipboard.svg"
            alt="file-logo"
            width={56}
            height={56}
          />
          <p className="flex flex-col text-[16px] font-bold text-gray300">
            You do not have any registered tasks yet.
            <span className="text-[16px] font-medium text-gray300">
              Create tasks and organize your to-do items
            </span>
          </p>
        </div>
      ) : (
        // createdTasks
        <ul className="flex flex-col gap-3 items-center justify-start w-full">
          {tasks.map((task, index) => (
            <li key={index}>
              <TaskItem
                task={task}
                index={index}
                onDelete={onDelete}
                onToggle={onToggle}
              />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};
