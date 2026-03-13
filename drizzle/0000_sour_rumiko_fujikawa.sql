CREATE TABLE "todos" (
	"id" serial PRIMARY KEY NOT NULL,
	"content" text NOT NULL,
	"is_completed" boolean DEFAULT false,
	"user_id" integer
);
