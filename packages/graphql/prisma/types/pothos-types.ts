/* eslint-disable */
import type { Prisma, User, Post } from "./client";
export default interface PrismaTypes {
    User: {
        Name: "User";
        Shape: User;
        Include: Prisma.UserInclude;
        Select: Prisma.UserSelect;
        OrderBy: Prisma.UserOrderByWithRelationInput;
        WhereUnique: Prisma.UserWhereUniqueInput;
        Where: Prisma.UserWhereInput;
        RelationName: "posts";
        ListRelations: "posts";
        Relations: {
            posts: {
                Shape: Post[];
                Types: PrismaTypes["Post"];
            };
        };
    };
    Post: {
        Name: "Post";
        Shape: Post;
        Include: Prisma.PostInclude;
        Select: Prisma.PostSelect;
        OrderBy: Prisma.PostOrderByWithRelationInput;
        WhereUnique: Prisma.PostWhereUniqueInput;
        Where: Prisma.PostWhereInput;
        RelationName: "author";
        ListRelations: never;
        Relations: {
            author: {
                Shape: User | null;
                Types: PrismaTypes["User"];
            };
        };
    };
}