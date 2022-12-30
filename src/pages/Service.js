import axios from "axios"
import React, { Component, Fragment } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";


const url ="http://127.0.0.1:8000/payment/services/"

class Service extends Component {
    state={
    data:[],
    modalInsertar: false,
    form:{
        logo: '',
        name: '',
        description:''
    }
    }

    peticionGet=()=>{
        axios.get(url).then(response=>{
            this.setState({data: response.data});
        })
    }

    peticionPost=async()=>{
        delete this.state.form.id;
       await axios.post(url,this.state.form).then(response=>{
            this.modalInsertar();
            this.peticionGet();
        }).catch(error=>{
            console.log(error.message);
        })
    }





    modalInsertar=()=>{
        this.setState({modalInsertar: !this.state.modalInsertar});
    }

    handleChange=async e=>{
        e.persist();
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
        console.log(this.state.form)



    }



    componentDidMount() {
        this.peticionGet();
    }



    render(){
        const {form}=this.state;
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
                <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                <button type="button" class="btn btn-primary btn-lg " onClick={()=>this.modalInsertar()}>Agregar</button>
                </div>


                <Modal isOpen={this.state.modalInsertar}>
                        <ModalHeader style={{display: 'block'}}>
                            {/* <span style={{float: 'right'}}>x</span> */}
                        </ModalHeader>
                        <ModalBody>
                            <div className="form-group">
                                <label htmlFor="id">ID</label>
                                <input className="form-control" type="text" name="id" id="id" readOnly onChange={this.handleChange} value={this.state.data.length+1}/>
                                <br />
                                <label htmlFor="logo">Logo (URL de la imagen)</label>
                                <input className="form-control" type="text" name="logo" id="logo" onChange={this.handleChange} value={form.logo}/>
                                <br />
                                <label htmlFor="name">Nombre del servicio</label>
                                <input className="form-control" type="text" name="name" id="name" onChange={this.handleChange} value={form.name}/>
                                <br />
                                <label htmlFor="description">Descripción</label>
                                <input className="form-control" type="text" name="description" id="description" onChange={this.handleChange} value={form.description}/>
                                <br />

                            </div>

                        </ModalBody>

                        <ModalFooter>
                            <button className="btn btn-success" onClick={()=>this.peticionPost()}>
                            Insertar
                            </button>
                                <button className="btn btn-danger" onClick={()=>this.modalInsertar()}>Cancelar</button>
                        </ModalFooter>





                </Modal>




                </div>
                
            </Fragment>
            )
        }



}
export default Service;


