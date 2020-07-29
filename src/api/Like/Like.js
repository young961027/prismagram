import { prisma } from "../../../generated/prisma-client";

export default {
  Like: {
    user: (parent) => prisma.like({ id: parent.id }).user(),
    post: (parent) => prisma.like({ id: parent.id }).post(),
  },
};
