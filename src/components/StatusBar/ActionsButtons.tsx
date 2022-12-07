import { Avatar, Button } from "@fluentui/react-components";
import React from "react";
import {
  Square24Regular,
  ShareScreenStop24Regular,
  ArrowCurveDownLeft24Filled,
  MoreHorizontal24Regular,
} from "@fluentui/react-icons";

export const ActionsButtons = () => {
  return (
    <div className="action-buttons">
      <Button appearance="transparent" style={styles.button}>
        <MoreHorizontal24Regular />
      </Button>

      <Button appearance="transparent">
        <Avatar />
      </Button>
      <Button appearance="transparent">
        <ArrowCurveDownLeft24Filled />
      </Button>
      <Button appearance="transparent">
        <Square24Regular></Square24Regular>
      </Button>
      <Button appearance="transparent">
        <ShareScreenStop24Regular />
      </Button>
    </div>
  );
};

const styles = {
  button: {
    width: "50px",
  },
};
