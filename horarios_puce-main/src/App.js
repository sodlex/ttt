import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CareerPage from "./pages/Career/CareerPage";
import SuperAdminMenu from "./commons/SuperAdminMenu/SuperAdminMenu";
import CoordMenu from "./commons/CoordMenu/CoordMenu";
import NavbarHorarios from "./commons/NavbarHorarios/NavbarHorarios";
import NavbarLogin from "./commons/NavbarLogin/NavbarLogin";

function App() {
  return (
    <div className="App">
      <>
        <NavbarHorarios />
        <SuperAdminMenu />
        <CoordMenu />
      </>
    </div>
  );
}

export default App;
