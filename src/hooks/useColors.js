import { useState, useEffect } from "react";
import { getColorList, getLastColor } from "../helpers/getColors";

export const useColors = () => {
  const [color, setColor] = useState(getLastColor());
  const [colorList, setColorList] = useState(getColorList());
  const handleChangeColor = (e) => {
    setColor(e.target.value);
  };
  const handleSubmitSaveColor = (e) => {
    e.preventDefault();
    setColorList((prev) => [color, ...prev]);
  };
  useEffect(() => {
    localStorage.setItem("colors", JSON.stringify(colorList));
  }, [colorList]);
  return {
    color,
    setColor,
    colorList,
    setColorList,
    handleChangeColor,
    handleSubmitSaveColor,
  };
};
