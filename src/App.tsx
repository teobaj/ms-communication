import "./App.css";
import { StatusBar } from "./components/StatusBar/StatusBar";
import { SideMenu } from "./components/SideMenu/SideMenu";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <StatusBar />
      <SideMenu />
      <div className="app-outlet">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
