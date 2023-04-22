interface InputProps extends React.HTMLProps<HTMLInputElement> {
  leftIcon?: string;
  rightIcon?: string;
}

export function Input({
  className,
  leftIcon,
  rightIcon,
  ...props
}: InputProps) {
  return (
    <div
      className={`bg-white border px-2 py-1 border-neutral-400 rounded-sm outline outline-4 outline-transparent focus-within:border-neutral-500 focus-within:outline-neutral-200 ${className}`}
    >
      <input className="bg-white outline-none" {...props} />
    </div>
  );
}
