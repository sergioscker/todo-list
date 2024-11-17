import * as React from 'react';

import { cn } from '@/lib/utils';

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        `flex mx-w-[650px] w-[638px] h-[54px] p-4 rounded-lg border border-gray700 bg-gray500 
        text-sm placeholder:text-gray-400 focus:text-blue active:text-blue
          focus-visible:outline-none focus-visible:ring-2`,
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = 'Input';

export { Input };
