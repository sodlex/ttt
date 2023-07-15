import React from "react";
import Stack from "react-bootstrap/Stack";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SuperAdminMenuCss.css";

function SuperAdminMenu() {
  return (
    <div className="menuSuper">
      <Stack className="stackMenu" gap={5}>
        <div className="p-2">
          <i class="bi bi-person-fill-gear"></i>Usuarios
        </div>
        <div className="p-2">
          <i class="bi bi-bookmark-fill"></i> Carreras
        </div>
        <div className="p-2">
          <i class="bi bi-person-badge-fill"></i>Docentes
        </div>
        <div className="p-2">
          <i class="bi bi-journal-bookmark-fill"></i>Asignaturas
        </div>
        <div className="p-2">
          <i class="bi bi-calendar-event-fill"></i>Programación académica
        </div>
        <div className="p-2">
          <i class="bi bi-file-earmark-bar-graph-fill"></i>Reportes
        </div>
      </Stack>
    </div>
  );
}

export default SuperAdminMenu;
