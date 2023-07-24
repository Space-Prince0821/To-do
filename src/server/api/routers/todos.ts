import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

export const todosRouter = createTRPCRouter({
  getAll: protectedProcedure.query(async ({ ctx }) => {
    const todos = await ctx.prisma.todo.findMany({
        where: {
          userId: ctx.auth.userId
        }
    })

    return todos;
  }),

  create: protectedProcedure
    .input(z.object({ title: z.string().min(1), content: z.string().min(1) }))
    .mutation(async ({ input, ctx }) => {
        const todo = await ctx.prisma.todo.create({
            data: {
              title: input.title,
              content: input.content, 
              userId: ctx.auth.userId
            }
        });

        return todo;
    }),

    delete: protectedProcedure
      .input(z.string())
      .mutation(async ({ ctx, input }) => {
        return ctx.prisma.todo.delete({
            where: {
              id: input
            }
        });
      }),

    toggle: protectedProcedure
      .input(z.object(({ id: z.string(), done: z.boolean() })))
      .mutation(async ({ ctx, input }) => {
        return ctx.prisma.todo.update({
            where: {
              id: input.id
            },
            data: {
              done: input.done
            }
        });
      }),
});
