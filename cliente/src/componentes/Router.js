import React, { Component } from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';

import Productos from './Productos/Productos';
import Nosotros from './Nosotros/Nosotros';
import Contacto from './Contacto/Contacto';
import Error from './Error/Error';
import Header from './Header/Header';
import DetalleProducto from './DetalleProducto/DetalleProducto';
import Navegacion from './Navegacion/Navegacion';

import infoProductos from '../datos/Datos.json';

class Router extends Component {
    state = {
        productos : [],
        termino : ''
    };

    componentWillMount(){
        this.setState({
            productos : infoProductos
        });
    }

    busqueda = (termino) => {
        if(termino.length > 3){
            this.setState({
                termino
            })
        }else{
            this.setState({
                termino : ''
            })
        }
    }

    render() {

        let productos = [...this.state.productos];
        let busqueda = this.state.termino;
        let resultado;
        if(busqueda !== ''){
            resultado = productos.filter(producto => (
                producto.nombre.toLowerCase().indexOf( busqueda.toLowerCase() ) !== -1
            ))
        }else{
            resultado = productos;
        }

        return (
            <BrowserRouter>
                <div className="contenedor">    
                    <Header />
                    <Navegacion />
                    <Switch>
                        <Route exact path="/" render={ () =>  (
                            < Productos 
                                productos={resultado}
                                busqueda={this.busqueda}
                            />
                        )} />
                        <Route exact path="/productos" render={ () =>  (
                            < Productos 
                                productos={resultado}
                                busqueda={this.busqueda}
                            />
                        )} />
                        <Route exact path="/nosotros" component={Nosotros} />
                        <Route exact path="/contacto" component={Contacto} />
                        <Route exact path="/producto/:producId" render={ (props) =>  {
                            let idProducto = props.location.pathname.replace('/producto/','');
                            return (
                                <DetalleProducto 
                                    producto={this.state.productos[idProducto]}
                                />
                                
                            )
                        }} />
                        <Route component={Error} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default Router;