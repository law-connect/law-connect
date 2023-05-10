interface InputProps extends React.HTMLProps<HTMLInputElement> {
  label?: string;
  leftIcon?: string;
  rightIcon?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  id: string;
}

export function Input({
  id,
  className,
  leftIcon,
  rightIcon,
  label,
  ...props
}: InputProps) {
  return (
    <div>
      {label && <label htmlFor={id}>{label}</label>}
      <div
        className={`bg-white border px-2 py-1 border-neutral-400 rounded-sm outline outline-4 outline-transparent focus-within:border-neutral-500 focus-within:outline-neutral-200 ${className}`}
      >
        <input id={id} name={id} className="bg-white outline-none" {...props} />
      </div>
    </div>
  );
}
