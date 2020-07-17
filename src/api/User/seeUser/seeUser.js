import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    seeUser: (_, args, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { id } = args;
      return prisma.user({ id });
    },
  },
};
