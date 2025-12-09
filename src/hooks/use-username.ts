import { STORAGE_KEY } from "@/lib/constants";
import { generateRandomUsername } from "@/lib/utils";
import { useEffect, useState } from "react";

export const useUsername = () => {
  const [username, setUsername] = useState<string>("");

  const main = () => {
    const stored = localStorage.getItem(STORAGE_KEY);

    if (stored) {
      setUsername(stored);
      return;
    } else {
      const username = generateRandomUsername();
      localStorage.setItem(STORAGE_KEY, username);
      setUsername(username);
    }
  };

  useEffect(() => {
    main();
  }, []);

  return { username };
};
