import 'bootstrap/dist/css/bootstrap.min.css';
import './CareerCss.css';
import CareerCard from "../../commons/CareerCard/CareerCard"

var carrerasPrueba =[{
  nombre: "Desarrollo de software",
  profe:"Pablo"
},
{
  nombre: "Culinario",
  profe:"Diana"
},
{
  nombre: "Arquitectura",
  profe:"Nicole"
},]

const CareerPage = () =>{
  return (
    <div>
      <div>
        {carrerasPrueba.map((item)=>(
          <CareerCard item={item}/>
          ))}
        </div>
        <i class="bi bi-plus-circle-fill"></i>
      </div>
  );
}


export default CareerPage;