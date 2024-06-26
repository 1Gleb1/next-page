import { getCharacterById } from "@/entities/character/api/character-get-by-id";
import { getAllCharacter } from "@/entities/character/api/character-get-collection";
import { ICharacter } from "@/entities/character/api/type";
import CharacterCard from "@/entities/character/ui/character-card";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import React from "react";

export const getStaticPaths = (async () => {
  const response = await getAllCharacter();

  const paths = response.map((character: ICharacter) => {
    return {
      params: {
        id: character.id.toString(),
      },
    };
  });
  return { paths, fallback: false };
}) satisfies GetStaticPaths;

export const getStaticProps = async ({
  params,
}: {
  params: { id: string };
}) => {
  const id = params.id;
  const response = await getCharacterById(id);
  console.log(response);

  return { props: { character: response } };
};

export default function Character({
  character,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log(character);

  return (
    <div>
      <CharacterCard character={character} />
    </div>
  );
}
