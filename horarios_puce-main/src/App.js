import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TeacherPage from "./pages/Teacher/TeacherPage";
import TeacherCard from "./components/TeacherCard/TeacherCard";
import SuperAdminMenu from "./commons/SuperAdminMenu/SuperAdminMenu";
import CrudUser from "./components/UserCRUD/CrudUser";
import NavbarHorarios from "./commons/NavbarHorarios/NavbarHorarios";
import CoordMenu from "./commons/CoordMenu/CoordMenu";

function App() {
  return (
    <div className="App">
      <>
        <NavbarHorarios></NavbarHorarios>
        <div className="InitPage">
        <CoordMenu></CoordMenu>
        <CrudUser></CrudUser>
        </div>
      </>
    </div>
  );
}

export default App;
