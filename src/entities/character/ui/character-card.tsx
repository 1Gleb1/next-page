import Card from "@/shared/ui/card";
import React from "react";
import { ICharacter } from "../api/type";
import Link from "next/link";

const CharacterCard = ({ character }: ICharacter) => {
  return (
    <Link href={`character/${character.id}`}>
      <Card>
        <img src={character.image} alt={character.name} />
        <h3>{character.name}</h3>
        <p>{character.status}</p>
      </Card>
    </Link>
  );
};

export default CharacterCard;
