import React, { createContext, useState } from "react";

export const ctx = createContext();
export default function CtxData(props) {
  const [coord, SetCoord] = useState({});
  return (
    <ctx.Provider
      value={{
        coord,
        SetCoord,
      }}
    >
      {props.children}
    </ctx.Provider>
  );
}
