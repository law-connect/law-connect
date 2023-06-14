"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { Button } from "./button";
import { Dropdown, MenuProps, message } from "antd";

export function UserHeader() {
  const { data: session } = useSession();
  const user = session?.user;

  const onClick: MenuProps["onClick"] = () => {
    signOut({ redirect: true, callbackUrl: "/auth/signin" });
  };

  const items: MenuProps["items"] = [
    {
      label: "Sair",
      key: "1",
    },
  ];

  return (
    <div className="flex gap-4 px-4  items-center content-center">
      {user && (
        <>
          <Dropdown menu={{ items, onClick }} placement="bottomRight" arrow>
            <div className="flex gap-2 items-center cursor-pointer">
              <span>
                {user.firstName} {user.lastName}
              </span>
              <div className="bg-brand-primary rounded-full w-10 aspect-square grid content-center">
                <span className="text-center text-white select-none text-lg overflow-auto">
                  {user.firstName[0]}
                  {user.lastName[0]}
                </span>
              </div>
            </div>
          </Dropdown>
        </>
      )}
    </div>
  );
}
