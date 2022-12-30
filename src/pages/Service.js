import axios from "axios"
import React, { Component, Fragment } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';


const url ="http://127.0.0.1:8000/payment/services/"

class Service extends Component {
    state={
    data:[]
    }

    peticionGet=()=>{
        axios.get(url).then(response=>{
            this.setState({data: response.data});
        })
    }

    componentDidMount() {
        this.peticionGet();
    }



    render(){
        return(
            <Fragment>
                <div class="servicio">
                <h2>LISTA DE SERVICIOS</h2>
                <table class="table mt-5">
                <thead class="thead-dark">
                    <tr>
                    
                    <th scope="col">ID</th>
                    <th scope="col">Logo</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Descripción</th>
                    </tr>
                </thead>
                <tbody>
                {this.state.data.map(servicio=>{
                 return(
                <tr>
                    <td>{servicio.id}</td>
                    <td><img src={servicio.logo}/></td>
                    <td>{servicio.name}</td>
                    <td>{servicio.description}</td>
                    <td>
                        
                    </td>
                </tr>
                )
              })}
                    
                </tbody>
                </table>
                <button type="button" class="btn btn-primary btn-lg ">Agregar</button>
                </div>
            </Fragment>
            )
        }



}
export default Service;


