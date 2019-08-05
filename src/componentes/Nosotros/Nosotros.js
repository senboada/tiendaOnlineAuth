import React, { Component } from 'react';
import './Nosotros.css';
class Nosotros extends Component {
    render() {
        return (
            <div className="contenedor-nosotros">
                <div className="imagen">
                    <img src="/img/camisa_1.png" alt="Imagen nosotros" />
                </div>
                <div className="contenido">
                    <h2>Sobre nosotros</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mollis volutpat est, et maximus felis dignissim vitae. Donec vestibulum tempor metus id maximus. Ut placerat orci eget felis sagittis, sit amet pulvinar ligula laoreet. Fusce venenatis mi a dapibus aliquet. Maecenas turpis ipsum, bibendum eget lacinia non, hendrerit vitae eros. Vivamus elementum maximus dignissim. Ut facilisis tortor vel quam consequat, in tempor quam dapibus.
                    </p>
                </div>
            </div>
        );
    }
}

export default Nosotros;