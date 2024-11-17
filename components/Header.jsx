'use client';

import Image from 'next/image';

function Header() {
  return (
    <div className="bg-black flex justify-center items-center w-full h-[200px] p-5">
      <div className="flex justify-center items-center gap-5 py-5">
        <Image
          src="/assets/rocket.svg"
          alt="icon-rocket"
          quality={100}
          width={22}
          height={36}
          className="flex items-center justify-center"
        />

        <h1 className="text-[40px] text-blue text-bold text-center">
          Attendance List
        </h1>
      </div>
    </div>
  );
}

export default Header;
