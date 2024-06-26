import { RaMInstance } from "@/shared/api/http-client";

export const getCharacterById = async (id: string) => {
  const response = await RaMInstance.get("/character/" + id);
  return response.data;
};
