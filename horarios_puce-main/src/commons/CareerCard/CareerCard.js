import '../../pages/Career/CareerCss.css';
const CareerPage = ({item}) =>{
    console.log(item)
    return(
        <div className="cards">
          <div className='carrera'>{item.nombre}</div>
          <div className='edit'id="collapse" >
          <div className='bt'><i class="bi bi-pencil-fill">Editar</i></div>
          <div className='bt'><i class="bi bi-trash-fill">Borrar</i></div>
          </div>
        </div>
    );
    
}
export default CareerPage;