import React, {useState} from "react";
import '../../styles/styleCliente.css';
import Inicio from "../admin/inicio";
import datos from './clientejson.json';
import productData from "../Productos/productos.json";
import Table from "react-bootstrap/esm/Table";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";



function Cliente()
{
    const volver = () => { 
        setBarra(barra= <Inicio />)
        setInicio(inicio="")
        setvisualizar(visualizar=[])
        setModificar(modificar="")
        setListaProductos(listaProductos = []);
    }

    function listarProductos(){

        //Se crea la presentación de los datos.

        let productShow = productData.map((elem,idx)=>{
            return(
                <div className="productDiv">
                        <img src={elem.image} alt={elem.nombre} className="productImg"></img>
                        <div className="productPName"> {elem.nombre} </div>
                        <div className="productPPrice"> Precio: $ {elem.precio} </div>
                        <div className="productPStock"><p> Stock: {elem.stock} </p></div>
                        <button  className="buttonComprar"> Comprar </button>
                </div>
            )
        })

        setListaProductos(listaProductos = productShow);
        setvisualizar(visualizar=[])
        setModificar(modificar=[])
        setInicio(inicio ="")
    }

    function inicializacion(){
        setInicio(inicio = imagen)          
        setvisualizar(visualizar=[])
        setModificar(modificar=[])
        setListaProductos(listaProductos ="");
    }

    function visualizacion () {
        let visual =
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Apellidos</th>
            <th>Numero TI</th>
            <th>Telefono</th>
          </tr>
        </thead>
        <tbody>
          { 
            datos.map(
              (datos,index)=>{
                return(
                  <tr>
                    <td>{index}</td>
                    <td>{datos.nombres}</td>
                    <td>{datos.apellidos}</td>
                    <td>{datos.numdoc}</td>
                    <td>{datos.telefono}</td>
                  </tr>
                );
            }
            )
        }
        </tbody>
      </Table>
        setvisualizar(visualizar = visual)
        setModificar(modificar=[])
        setInicio(inicio="")
        setListaProductos(listaProductos = "");
    }

    function modificacion () {
        let mod = 
          <Form className="ingadmin">
            <Form.Group className="ingadmin" >
              <Form.Label>Tipo de Documento</Form.Label>
              <Form.Control type="cliente" placeholder="CC,CE,TI" />
            </Form.Group>
            <Form.Group className="ingadmin" >
              <Form.Label>Numero de Documento</Form.Label>
              <Form.Control type="cliente" placeholder="0000000000 " />
            </Form.Group>
            <Form.Group className="ingadmin" >
              <Form.Label>Apellidos</Form.Label>
              <Form.Control type="cliente" placeholder="" />
            </Form.Group>
            <Form.Group className="ingadmin" >
              <Form.Label>Nombres</Form.Label>
              <Form.Control type="cliente" placeholder="" />
            </Form.Group>
            <Form.Group className="ingadmin" >
              <Form.Label>Ciudad</Form.Label>
              <Form.Control type="cliente" placeholder="" />
            </Form.Group>
            <Form.Group className="ingadmin" >
              <Form.Label>Direccion</Form.Label>
              <Form.Control type="cliente" placeholder="" />
            </Form.Group>
            <Form.Group className="ingadmin" controlId="exampleForm.ControlInput1">
              <Form.Label>Telefono</Form.Label>
              <Form.Control type="cliente" placeholder="" />
            </Form.Group>
            <Form.Group className="ingadmin" controlId="exampleForm.ControlInput1">
              <Form.Label>Email</Form.Label>
              <Form.Control type="cliente" placeholder="@ejemplo.com" />
            </Form.Group>
            <p> </p>
            <Button className="botonadmin" variant="primary" type="submit">
                Agregar
            </Button>
            <Button className="botonadmin" variant="primary" type="submit">
                Modificar
            </Button>
            <Button className="botonadmin" variant="primary" type="submit">
                Eliminar
            </Button>
          </Form>
        setModificar(modificar=mod)
        setInicio(inicio="")
        setvisualizar(visualizar=[])
        setListaProductos(listaProductos = "");
    }

    let init = <div className="blockCliente">
                    <button onClick={inicializacion} className="buttonCliente"> Inicio </button>
                    <button onClick={listarProductos} className="buttonCliente"> Lista Productos </button>
                    <button onClick={visualizacion} className="buttonCliente"> Visualizar </button>
                    <button onClick={modificacion} className="buttonCliente"> Modificar </button>
                    <button onClick={volver} className="buttonCliente"> Volver </button>
                </div>
    let imagen = <img src="../img/estrategia.jpg" alt=""></img>
    
    let [barra, setBarra] = useState(init)   
    let [listaProductos, setListaProductos] = useState([]); 
    let [inicio, setInicio] = useState(imagen)
    let [visualizar, setvisualizar] = useState([])
    let [modificar, setModificar] = useState("")

    return(
        <div >
            {barra} 
            {inicio}
            {visualizar}
            {listaProductos}
            {modificar}        
        </div>
    )

}
export default Cliente