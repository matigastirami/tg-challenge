import { UserInputError, ApolloError } from "apollo-server-core";

export const handleApiError = (statusCode: number, message: string) => {
  switch (statusCode) {
    case 400:
    case 404:
      throw new UserInputError(message);
    default:
      throw new ApolloError(message);
  }
};
