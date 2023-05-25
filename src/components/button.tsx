"use client";
import Link from "next/link";
import { UrlObject } from "url";

type ButtonProps = {
  variant?: "filled" | "outline" | "ghost";
  children: React.ReactNode;
  href?: string | UrlObject;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "submit" | "reset" | "button" | undefined;
  className?: string;
};

export function Button({ className, ...props }: ButtonProps) {
  const isAnchor = !!props.href;
  const style = {
    filled: `bg-brand-primary hover:opacity-90 text-white px-4 py-1 font-light grid place-content-center rounded-sm w-max ${className}`,
    outline: `${className}`,
    ghost: `${className}`,
  };

  return (
    <>
      {isAnchor ? (
        <Link className={style[props.variant ?? "filled"]} href={props.href!}>
          {props.children}
        </Link>
      ) : (
        <button className={style[props.variant ?? "filled"]} {...props}>
          {props.children}
        </button>
      )}
    </>
  );
}
