import React, { Dispatch, SetStateAction } from "react";
export const UserContext = React.createContext<{userId: string | null, setUserId: Dispatch<SetStateAction<string | null>>}>({
  userId: null,
  setUserId: () => null
});

