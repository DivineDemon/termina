import { InferRealtimeEvents, Realtime } from "@upstash/realtime";
import z from "zod";
import { redis } from "./redis";

const message = z.object({
  id: z.string(),
  text: z.string(),
  sender: z.string(),
  roomId: z.string(),
  timestamp: z.number(),
  token: z.string().optional(),
});

const schema = {
  chat: {
    message,
    destroy: z.object({
      isDestroyed: z.literal(true),
    }),
  },
};

export type Message = z.infer<typeof message>;
export const realtime = new Realtime({ schema, redis });
export type RealtimeEvents = InferRealtimeEvents<typeof realtime>;
