import { createOpenAI } from "@ai-sdk/openai";
import { generateObject } from "ai";
import { APIRoute } from "astro/dist/@types/astro";
import { z } from "zod";

const openai = createOpenAI({
  apiKey: import.meta.env.OPENAI_API_KEY,
});

export const GET: APIRoute = async ({ params, request }) => {
  const { object } = await generateObject({
    model: openai("gpt-4o-mini"),
    prompt: "Generate a very short lasagna recipe.",
    schema: z.object({
      name: z.string(),
      ingredients: z.array(z.string()).describe("max 4 ingredients"),
      steps: z.array(z.string()).describe("max 4 steps"),
      time: z.number().describe("max 40 minutes"),
    }),
  });
  return new Response(JSON.stringify(object));
};

export const POST: APIRoute = ({ request }) => {
  return new Response(
    JSON.stringify({
      message: "This was a POST!",
    }),
  );
};
