import { RaMInstance } from "@/shared/api/http-client";

export const getAllCharacter = async () => {
  const response = await RaMInstance.get("/character");
  return response.data.results;
};
