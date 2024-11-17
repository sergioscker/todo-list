import { Tasks } from '@/components/Tasks';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Home() {
  return (
    <div className="w-full h-auto">
      <div className="flex flex-row justify-center items-center gap-5 w-full p-5">
        <Input className="p-4 mx-w-[638px]" placeholder="Add a new task" />
        <Button className="bg-bluedark p-4">Create Tasks</Button>
      </div>

      <div>
        <Tasks />
      </div>
    </div>
  );
}
