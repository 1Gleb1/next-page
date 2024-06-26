import { ICard } from "@/entities/character/api/type";
import React, { ReactElement, ReactNode } from "react";

const Card = ({ children }: ICard, props: any) => {
  return (
    <div className="flex flex-col px-4 py-2 shadow-xl rounded-sm w-64 hover:shadow-2xl hover:shadow-green-500 hover:cursor-pointer">
      {children}
    </div>
  );
};

export default Card;
