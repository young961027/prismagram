import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    editUser: async (_, args, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { id, name, email, firstName, lastName, bio } = args;
      const { user } = request;
      return prisma.updateUser({
        where: { id: user.id },
        data: { name, email, firstName, lastName, bio },
      });
    },
  },
};
