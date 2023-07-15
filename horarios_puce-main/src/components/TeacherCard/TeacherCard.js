import "./TeacherCardCss.css";
import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import {
  Button,
  ModalBody,
  ModalFooter,
  ModalHeader,
  FormGroup,
  ModalTitle,
} from "react-bootstrap";

//data
const data = [
  {
    id: 1,
    tipodocente: "Pucetec",
    cedula: "1754446704",
    nombre: "Daria",
    apellido: "Gomez",
    tituloacademico: "hj",
    correoinsti: "qwrert@puce.edu.ec",
    correoperso: "sfs@gmail.com",
    tmovil: "0987556874",
    coordinador: "Pablo",
  },
  {
    id: 2,
    tipodocente: "Pucetec",
    cedula: "1754446704",
    nombre: "Daria",
    apellido: "Gomez",
    tituloacademico: "hj",
    correoinsti: "qwrert@puce.edu.ec",
    correoperso: "sfs@gmail.com",
    tmovil: "0987556874",
    coordinador: "Pablo",
  },

  {
    id: 3,
    tipodocente: "Pucetec",
    cedula: "1754446704",
    nombre: "Daria",
    apellido: "Gomez",
    tituloacademico: "hj",
    correoinsti: "qwrert@puce.edu.ec",
    correoperso: "sfs@gmail.com",
    tmovil: "0987556874",
    coordinador: "Pablo",
  },
  // ... other data objects
];

const TeacherCard = () => {
  const [dataList, setDataList] = useState(data);
  const [modalActualizar, setModalActualizar] = useState(false);
  const [modalInsertar, setModalInsertar] = useState(false);
  const [form, setForm] = useState({
    id: "",
    tipodocente: "",
    cedula: "",
    nombre: "",
    apellido: "",
    tituloacademico: "",
    correoinsti: "",
    correoperso: "",
    tmovil: "",
    coordinador: "",
  });

  const mostrarModalActualizar = (dato) => {
    setForm(dato);
    setModalActualizar(true);
  };

  const cerrarModalActualizar = () => {
    setModalActualizar(false);
  };

  const mostrarModalInsertar = () => {
    setModalInsertar(true);
  };

  const cerrarModalInsertar = () => {
    setModalInsertar(false);
  };

  const editar = (dato) => {
    setDataList((prevDataList) => {
      const updatedData = prevDataList.map((registro) => {
        if (dato.id === registro.id) {
          return {
            ...registro,
            nombre: dato.nombre,
            apellido: dato.apellido,
            asignatura: dato.asignatura,
          };
        }
        return registro;
      });
      return updatedData;
    });
    setModalActualizar(false);
  };

  const eliminar = (dato) => {
    const opcion = window.confirm(
      "Estás seguro que deseas eliminar al Docente: " + dato
    );
    if (opcion) {
      setDataList((prevDataList) => {
        const updatedData = prevDataList.filter(
          (registro) => dato.id !== registro.id
        );
        return updatedData;
      });
      setModalActualizar(false);
    }
  };

  const insertar = () => {
    const valorNuevo = { ...form };
    valorNuevo.id = dataList.length + 1;
    setDataList((prevDataList) => [...prevDataList, valorNuevo]);
    setModalInsertar(false);
  };

  const handleChange = (e) => {
    setForm((prevForm) => ({
      ...prevForm,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <div class="d-flex flex-wrap-reverse">
        <div className="cards">
          <div className="CardComponents">
            <div>
              {data.map((dato) => (
                <div key={dato.id}>
                  <div className="id">
                    <strong> ID </strong> : {dato.id}
                  </div>
                  <div className="type">
                    <strong> Tipo de Docente </strong> : {dato.tipodocente}
                  </div>
                  <div className="name">
                    <strong> Nombres </strong> : {dato.nombre}
                  </div>
                  <div className="lastname">
                    <strong> Apellidos</strong> : {dato.apellido}
                  </div>
                  <div className="emailI">
                    <strong> Correo Institucional</strong> : {dato.correoinsti}
                  </div>
                  <div className="action">
                    <strong> Acción</strong>
                    <div className="edit" id="collapse">
                      <div
                        className="Cardsbtns"
                        onClick={mostrarModalActualizar}
                      >
                        <i class="bi bi-pencil-fill">Editar</i>
                      </div>

                      <div className="Cardsbtns" onClick={eliminar}>
                        <i class="bi bi-trash-fill">Borrar</i>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div>
        <Button className="Circle" onClick={mostrarModalInsertar}>
          <i class="bi bi-plus-circle-fill">
            <span className="addLabel">Añadir</span>
          </i>
        </Button>
        <Modal isOpen={modalActualizar}>
          <ModalHeader>
            <div>
              <h3>Editar Registro</h3>
            </div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>Id:</label>

              <input
                className="form-control"
                readOnly
                type="text"
                value={form.id}
              />
            </FormGroup>
            <FormGroup>
              <label>Tipo de Docente:</label>
              <input
                className="form-control"
                name="tipodocente"
                type="select"
                onChange={handleChange}
                value={form.tipodocente}
              ></input>
            </FormGroup>

            <FormGroup>
              <label>Cedula:</label>
              <input
                className="form-control"
                name="nombre"
                type="text"
                onChange={handleChange}
                value={form.cedula}
              />
            </FormGroup>

            <FormGroup>
              <label>Nombres:</label>
              <input
                className="form-control"
                name="nombre"
                type="text"
                onChange={handleChange}
                value={form.nombre}
              />
            </FormGroup>

            <FormGroup>
              <label>Apellidos:</label>
              <input
                className="form-control"
                name="apellido"
                type="text"
                onChange={handleChange}
                value={form.apellido}
              />
            </FormGroup>

            <FormGroup>
              <label>Titulo Academico:</label>
              <input
                className="form-control"
                name="tituloacademico"
                type="text"
                onChange={handleChange}
                value={form.tituloacademico}
              />
            </FormGroup>

            <FormGroup>
              <label>Correo Institucional:</label>
              <input
                className="form-control"
                name="correoinsti"
                type="text"
                onChange={handleChange}
                value={form.correoinsti}
              />
            </FormGroup>
            <FormGroup>
              <label>Correo Personal:</label>
              <input
                className="form-control"
                name="correoperso"
                type="text"
                onChange={handleChange}
                value={form.correoperso}
              />
            </FormGroup>

            <FormGroup>
              <label>Teléfono movil:</label>
              <input
                className="form-control"
                name="telefono"
                type="text"
                onChange={handleChange}
                value={form.tmovil}
              />
            </FormGroup>
            <FormGroup>
              <label>Coordinador:</label>
              <input
                className="form-control"
                name="coordinador"
                type="text"
                onChange={handleChange}
                value={form.coordinador}
              />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button color="primary" onClick={() => editar(form)}>
              Editar
              <i className="bi bi-pencil-fill"></i>
            </Button>

            <Button color="danger" onClick={cerrarModalActualizar}>
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>

        <Modal isOpen={modalInsertar}>
          <ModalHeader>
            <div>
              <h3>Crear Docente</h3>
            </div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>Id:</label>
              <input
                className="form-control"
                readOnly
                type="text"
                value={data.length + 1}
              />
            </FormGroup>

            <FormGroup>
              <label>Nombre:</label>
              <input
                className="form-control"
                name="nombre"
                type="text"
                onChange={handleChange}
              />
            </FormGroup>

            <FormGroup>
              <label>Apellido:</label>
              <input
                className="form-control"
                name="apellido"
                type="text"
                onChange={handleChange}
              />
            </FormGroup>

            <FormGroup>
              <label>Asignatura:</label>
              <input
                className="form-control"
                name="asignatura"
                type="text"
                onChange={handleChange}
              />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button color="primary" onClick={mostrarModalInsertar}>
              Insertar
            </Button>
            <Button color="danger" onClick={cerrarModalInsertar}>
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </>
  );
};
export default TeacherCard;
