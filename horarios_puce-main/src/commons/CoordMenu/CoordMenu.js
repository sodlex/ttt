import React from "react";
import Stack from "react-bootstrap/Stack";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CoordMenuCss.css";

function CoordMenu() {
  return (
    <div className="menuCoord">
      <Stack gap={5}>
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

export default CoordMenu;
