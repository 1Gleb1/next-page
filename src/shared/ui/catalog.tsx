import { ICard } from "@/entities/character/api/type";
import React, { Children } from "react";

const Catalog = ({ children }: ICard) => {
  return <div className="grid grid-cols-3 mx-auto gap-4">{children}</div>;
};

export default Catalog;
