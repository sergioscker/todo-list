'use client';

import Image from 'next/image';

// component
import { TaskItem } from './TaskItem';

export const TasksList = ({ tasks = [], onDelete, onToggle }) => {
  return (
    <section
      className={`max-w-[750px] w-full  border-gray400 rounded-md p-5 ${
        tasks.length > 0 ? 'border-none' : 'border-t'
      } `}
    >
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
