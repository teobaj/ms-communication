import React from "react";
import "./StatusBar.css";

import {
  IosArrowLtr24Regular,
  IosArrowRtl24Regular,
} from "@fluentui/react-icons";
import { SearchBar } from "./SearchBar";
import { ActionsButtons } from "./ActionsButtons";
export const StatusBar = () => {
  return (
    <div className="status-bar">
      <div className="status-bar__arrows">
        <IosArrowLtr24Regular />
        <IosArrowRtl24Regular />
      </div>
      <div></div>
      <div className="status-bar__search">
        <SearchBar />
        <ActionsButtons />
      </div>
    </div>
  );
};
