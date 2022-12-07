import React, { FC } from "react";

interface IAvatar {
  src?: string;
  width: string;
  height: string;
}

export const Avatar: FC<IAvatar> = ({ src, width, height }) => {
  return (
    <img
      alt="img"
      style={{ borderRadius: width }}
      width={width}
      height={height}
      src={src}
    ></img>
  );
};
