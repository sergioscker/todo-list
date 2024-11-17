import Image from 'next/image';

export const List = () => {
  return (
    <section className="max-w-[750px] w-full h-auto border border-gray400 rounded-md">
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
    </section>
  );
};
