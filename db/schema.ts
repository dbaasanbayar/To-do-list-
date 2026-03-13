import { pgTable, serial, text, boolean, integer } from 'drizzle-orm/pg-core';

export const todos = pgTable('todos', {
  id: serial('id').primaryKey(),
  content: text('content').notNull(),
  isCompleted: boolean('is_completed').default(false),
  userId: integer('user_id')
});

