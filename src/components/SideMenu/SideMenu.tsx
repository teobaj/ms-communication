import React from "react";
import "./SideMenu.css";
import {
  Alert24Regular,
  Chat24Regular,
  PeopleTeam24Regular,
  Call24Regular,
  Document24Regular,
  CalendarLtr24Regular,
  MoreHorizontal24Regular,
  AppFolder24Regular,
  QuestionCircle24Regular,
} from "@fluentui/react-icons";
import { Button, Link } from "@fluentui/react-components";
import { useNavigate } from "react-router-dom";

export const SideMenu = () => {
  const navigate = useNavigate();
  const goto = (route: string) => {
    navigate(route);
  };

  return (
    <div className="sidemenu">
      <div className="sidemenu__main">
        <Button className="sidemenu__button" appearance="transparent">
          <Alert24Regular />
          <span>Activity</span>
        </Button>
        <Button
          className="sidemenu__button"
          onClick={() => goto("/chat")}
          appearance="transparent"
        >
          <Chat24Regular />
          <span>Chat</span>
        </Button>

        <Button className="sidemenu__button" appearance="transparent">
          <PeopleTeam24Regular />
          <span>Teams</span>
        </Button>

        <Button className="sidemenu__button" appearance="transparent">
          <Call24Regular />
          <span>Calls</span>
        </Button>

        <Button className="sidemenu__button" appearance="transparent">
          <Document24Regular />
          <span>Files</span>
        </Button>

        <Button className="sidemenu__button" appearance="transparent">
          <CalendarLtr24Regular />
          <span>Calendar</span>
        </Button>

        <Button className="sidemenu__button" appearance="transparent">
          <MoreHorizontal24Regular />
        </Button>

        <Button className="sidemenu__button" appearance="transparent">
          <AppFolder24Regular />
          <span>Apps</span>
        </Button>
      </div>
      <div className="sidemenu__more">
        <Button className="sidemenu__button" appearance="transparent">
          <QuestionCircle24Regular />
          <span>Help</span>
        </Button>
      </div>
    </div>
  );
};
