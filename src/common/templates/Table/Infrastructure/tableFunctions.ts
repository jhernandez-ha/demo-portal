import React from "react";

export const handleMainSearch = (
  e: React.ChangeEvent<HTMLInputElement>,
  setSearchText: React.Dispatch<React.SetStateAction<string>>
) => {
  setSearchText(e.target.value);
};
