import { treaty } from "@elysiajs/eden";
import type { app } from "../app/api/[[...slugs]]/route";

export const client = treaty<app>(process.env.NEXT_PUBLIC_API_URL!).api;
