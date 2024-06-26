import { getAllCharacter } from "@/entities/character/api/character-get-collection";
import { ICharacter } from "@/entities/character/api/type";
import CharacterCard from "@/entities/character/ui/character-card";
import Catalog from "@/shared/ui/catalog";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";

export const getStaticProps = (async () => {
  const response = await getAllCharacter();
  return { props: { characters: response } };
}) satisfies GetStaticProps<{
  characters: ICharacter[];
}>;

export default function Characters({
  characters,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const arrayId = characters?.map((character: ICharacter) => character.id);

  return (
    <div className=" max-w-[1200px] mx-auto">
      <Catalog>
        {characters?.map((character: ICharacter) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </Catalog>
    </div>
  );
}
