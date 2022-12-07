import "./App.css";
import { StatusBar } from "./components/StatusBar/StatusBar";
import { SideMenu } from "./components/SideMenu/SideMenu";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <StatusBar />
      <SideMenu />
      <Outlet />
    </div>
  );
}

export default App;
