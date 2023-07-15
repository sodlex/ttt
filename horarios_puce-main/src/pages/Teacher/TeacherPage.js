import "bootstrap/dist/css/bootstrap.min.css";
import "../Teacher/TeacherCss.css";
import TeacherCard from "../../components/TeacherCard/TeacherCard";
import React, { useState } from "react";
import SuperAdminMenu from "../../commons/SuperAdminMenu/SuperAdminMenu";
import NavbarHorarios from "../../commons/NavbarHorarios/NavbarHorarios";

function TeacherPage() {
  return (
    <div>
      <div className="page1">
        <NavbarHorarios></NavbarHorarios>
        <div className="page">
          <SuperAdminMenu></SuperAdminMenu>
        </div>
      </div>
    </div>
  );
}

export default TeacherPage;
