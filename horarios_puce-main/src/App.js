import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TeacherPage from "./pages/Teacher/TeacherPage";
import TeacherCard from "./components/TeacherCard/TeacherCard";
import SuperAdminMenu from "./commons/SuperAdminMenu/SuperAdminMenu";

function App() {
  return (
    <div className="App">
      <>
        <TeacherPage /> <TeacherCard />
      </>
    </div>
  );
}

export default App;
