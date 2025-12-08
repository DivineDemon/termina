import { Dispatch, SetStateAction } from "react";
import { ADJECTIVES, NOUNS } from "./constants";

export function generateRandomUsername(): string {
  const adj = ADJECTIVES[Math.floor(Math.random() * ADJECTIVES.length)];
  const noun = NOUNS[Math.floor(Math.random() * NOUNS.length)];
  const number = Math.floor(Math.random() * 1000);

  return `${adj}-${noun}-${number}`;
}

export function copyRoomUrl(setCopyStatus: Dispatch<SetStateAction<string>>) {
  const url = window.location.href;
  navigator.clipboard.writeText(url);

  setCopyStatus("COPIED");
  setTimeout(() => setCopyStatus("COPY"), 2000);
}

export function formatTimeLeft(seconds: number) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
}
