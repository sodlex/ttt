import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./stylescrud.css";
import {
  Table,
  Button,
  Container,
  FormGroup,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import { Edit, Save, Cancel, Add } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import { TablePagination } from "@material-ui/core";

import { data } from "./data.js";

class CrudUser extends React.Component {
  state = {
    data: data,
    currentPage: 1,
    itemsPerPage: 9,
    form: {
      id: "",
      name: "",
      lastname: "",
      password: "",
      showPassword: false,
      rol: "",
    },
    search: "",
    editingRowId: null,
    showH6edit: false,
    showH6delete: false,
    validatePassword: false,
    isInserting: false,
  };

  handleChange = (e, id) => {
    const { name, value } = e.target;

    if (id) {
      this.setState((prevState) => ({
        data: prevState.data.map((row) =>
          row.id === id ? { ...row, [name]: value } : row
        ),
      }));
    } else {
      this.setState((prevState) => ({
        form: {
          ...prevState.form,
          [name]: value,
        },
      }));
    }
  };

  handleChangePage = (event, newPage) => {
    this.setState({ currentPage: newPage + 1 });
  };

  handleEditClick = (id) => {
    this.setState({ editingRowId: id });
  };

  handleSaveClick = (id) => {
    this.setState({ editingRowId: null });
  };

  handleCancelClick = () => {
    this.setState({ editingRowId: null });
  };

  handleSearch = (e) => {
    this.setState({ search: e.target.value });
  };

  handleMouseEnterEdit = () => {
    this.setState({ showH6edit: true });
  };

  handleMouseLeaveEdit = () => {
    this.setState({ showH6edit: false });
  };

  handleMouseEnterDelete = () => {
    this.setState({ showH6delete: true });
  };

  handleMouseLeaveDelete = () => {
    this.setState({ showH6delete: false });
  };

  eliminar = (dato) => {
    var opcion = window.confirm(
      "Estás Seguro que deseas Eliminar el elemento " + dato.id
    );
    if (opcion === true) {
      var contador = 0;
      var arreglo = this.state.data;
      arreglo.map((registro) => {
        if (dato.id === registro.id) {
          arreglo.splice(contador, 1);
        }
        contador++;
      });
      this.setState({ data: arreglo, modalActualizar: false });
    }
  };

  mostrarModalInsertar = () => {
    this.setState({
      form: {
        id: "",
        name: "",
        lastname: "",
        password: "",
        rol: "",
      },
      modalInsertar: true,
      isInserting: true,
    });
  };

  cerrarModalInsertar = () => {
    this.setState({
      modalInsertar: false,
      validatePassword: false,
      isInserting: false,
    });
  };

  insertar = () => {
    const { form } = this.state;

    // Verificar si todos los campos están llenos
    if (!form.id || !form.name || !form.lastname || !form.rol) {
      alert("Por favor, complete todos los campos.");
      return;
    }

    // Verificar que la contraseña tenga al menos 8 caracteres solo si se está realizando la inserción
    if (this.state.isInserting && form.password.length < 8) {
      alert("La contraseña debe tener al menos 8 caracteres.");
      return;
    }

    // Transformar la primera letra de name y lastname a mayúscula
    const name = form.name.charAt(0).toUpperCase() + form.name.slice(1);
    const lastname =
      form.lastname.charAt(0).toUpperCase() + form.lastname.slice(1);

    // Crear el nuevo objeto de datos con las transformaciones y el ID único
    const nuevoDato = {
      id: Date.now(), // Generar un ID único (puedes usar otra estrategia si lo prefieres)
      name,
      lastname,
      password: form.password,
      rol: form.rol,
    };

    // Agregar el nuevo dato a la lista de datos
    this.setState((prevState) => ({
      data: [...prevState.data, nuevoDato],
      modalInsertar: false,
      isInserting: false,
    }));
  };

  handleChangeForm = (e) => {
    const { name, value } = e.target;

    this.setState((prevState) => ({
      form: {
        ...prevState.form,
        [name]: value,
      },
    }));
  };

  render() {
    const {
      search,
      data,
      editingRowId,
      showH6edit,
      showH6delete,
      currentPage,
      itemsPerPage,
    } = this.state;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentData = data.slice(startIndex, endIndex);

    return (
      <>
        <Container>
          <br />
          <div style={{ display: "flex", marginBottom: "2px" }}>
            <br />
            <Button
              className="NewUserButton"
              onClick={this.mostrarModalInsertar}
              type="button"
              title="New User"
            >
              Crear Nuevo Usuario
            </Button>
            <input
              type="text"
              placeholder="Buscar por nombre"
              value={search}
              onChange={this.handleSearch}
              className="form-control"
              style={{
                marginLeft: "10px",
                width: "200px",
                backgroundColor: "#fff",
              }}
            />
          </div>
          <Table>
            <thead>
              <tr>
                <th className="col-1">Id</th>
                <th className="col-2">Nombre</th>
                <th className="col-2">Apellido</th>
                <th className="col-2">Contraseña</th>
                <th className="col-2">Rol de Usuario</th>
                <th className="col-3">Acciones</th>
              </tr>
            </thead>

            <tbody>
              {currentData.map((row, dato) => (
                <tr key={row.id}>
                  <td className="col-1">{row.id}</td>
                  <td className="col-2">
                    {editingRowId === row.id ? (
                      <input
                        className="form-control"
                        name="name"
                        type="text"
                        value={row.name}
                        onChange={(e) => this.handleChange(e, row.id)}
                      />
                    ) : (
                      row.name
                    )}
                  </td>
                  <td className="col-2">
                    {editingRowId === row.id ? (
                      <input
                        className="form-control"
                        name="lastname"
                        type="text"
                        value={row.lastname}
                        onChange={(e) => this.handleChange(e, row.id)}
                      />
                    ) : (
                      row.lastname
                    )}
                  </td>
                  <td className="col-2">
                    {editingRowId === row.id ? (
                      <input
                        className="form-control"
                        name="password"
                        type="password"
                        value={row.password}
                        onChange={(e) => this.handleChange(e, row.id)}
                      />
                    ) : this.state.form.showPassword ? (
                      row.password
                    ) : (
                      "********"
                    )}
                  </td>

                  <td className="col-2">
                    {editingRowId === row.id ? (
                      <select
                        className="form-control"
                        name="rol"
                        value={row.rol}
                        onChange={(e) => this.handleChange(e, row.id)}
                      >
                        <option value="coordinador">Coordinador</option>
                        <option value="superadmin">Super Admin</option>
                      </select>
                    ) : (
                      row.rol
                    )}
                  </td>
                  <td>
                    {editingRowId === row.id ? (
                      <>
                        <Button
                          color="primary"
                          onClick={() => this.handleSaveClick(row.id)}
                          type="button"
                          title="Save"
                          className="SaveButton"
                        >
                          <Save />
                        </Button>
                        &nbsp;
                        <Button
                          color="danger"
                          onClick={this.handleCancelClick}
                          type="button"
                          title="Cancel"
                          className="SaveButton"
                        >
                          <Cancel />
                        </Button>
                      </>
                    ) : (
                      <div className="col-4">
                        <IconButton
                          onClick={() => this.handleEditClick(row.id)}
                          onMouseEnter={this.handleMouseEnterEdit}
                          onMouseLeave={this.handleMouseLeaveEdit}
                          className="EditButton"
                          color="primary"
                        >
                          <Edit /> <span />
                          {showH6edit && <h6 className="h6action"> Editar</h6>}
                        </IconButton>

                        <IconButton
                          onClick={() => this.eliminar(row)}
                          onMouseEnter={this.handleMouseEnterDelete}
                          onMouseLeave={this.handleMouseLeaveDelete}
                          className="DeleteButton"
                          color="error"
                        >
                          <Cancel />
                          {showH6delete && (
                            <h6 className="h6action"> Eliminar</h6>
                          )}
                        </IconButton>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <div className="divradiusbtton">
            <Button
              className="radiusbutton"
              onClick={() => this.mostrarModalInsertar()}
              type="button"
              title="Add"
            >
              <Add />
            </Button>
            Nuevo
          </div>
          <TablePagination
            component="div"
            count={data.length}
            page={currentPage - 1}
            rowsPerPage={itemsPerPage}
            onPageChange={this.handleChangePage}
            rowsPerPageOptions={[null]}
            labelRowsPerPage="Filas por página:"
          />
        </Container>

        <Modal isOpen={this.state.modalInsertar}>
          <ModalHeader>
            <div>
              <h3>Crear Nuevo Usuario</h3>
            </div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>id:</label>
              <input
                className="form-control"
                name="id"
                type="number"
                onChange={this.handleChangeForm}
                value={this.state.form.id}
              />
            </FormGroup>

            <FormGroup>
              <label>Nombre:</label>
              <input
                className="form-control"
                name="name"
                type="text"
                onChange={this.handleChangeForm}
                value={this.state.form.name}
              />
            </FormGroup>

            <FormGroup>
              <label>Apellido:</label>
              <input
                className="form-control"
                name="lastname"
                type="text"
                onChange={this.handleChangeForm}
                value={this.state.form.lastname}
              />
            </FormGroup>

            <FormGroup>
              <label>contraseña:</label>
              <input
                className="form-control"
                name="password"
                type="text"
                onChange={this.handleChangeForm}
                value={this.state.form.password}
              />
            </FormGroup>

            <FormGroup>
              <label>Rol:</label>
              <select
                className="form-control"
                name="rol"
                onChange={this.handleChangeForm}
                value={this.state.form.rol}
              >
                <option value="coordinador">Coordinador</option>
                <option value="superadmin">Super Admin</option>
              </select>
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.insertar()}
              type="button"
              title="Insert"
            >
              Insertar
            </Button>
            <Button
              className="btn btn-danger"
              onClick={() => this.cerrarModalInsertar()}
              type="button"
              title="Cancel"
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  }
}

export default CrudUser;
