'use client';

import { List } from './List';

export const Tasks = () => {
  return (
    <div className="w-full h-auto">
      <div className="flex items-center justify-between w-[750px] gap-[40px] mx-auto py-5">
        <p className="flex gap-2 items-center justify-center text-blue text-[14px] text-left font-bold">
          Tasks created
          <span
            className="flex items-center justify-cente bg-gray400 text-white 
          rounded-full p-2 w-[25px] h-[20px]"
          >
            0
          </span>
        </p>

        <p className="flex gap-2 items-center justify-center text-purple text-[14px] text-left font-bold">
          Completed
          <span
            className="flex items-center justify-cente bg-gray400 text-white 
          rounded-full p-2 w-[25px] h-[20px]"
          >
            0
          </span>
        </p>
      </div>

      <div className="flex items-center justify-center p-5 w-full">
        <List />
      </div>
    </div>
  );
};
