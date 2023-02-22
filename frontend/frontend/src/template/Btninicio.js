import React from 'react';

class botones_inicio extends React.Component{
    render(){
        return(
                <div className="container_principal">
                    <div className="titulo_settings">
                        Ingresar
                    </div>
                    <div class="mx-auto2">
                        <div className="d-grid gap-4 col-6  mx-auto">
                            <button className="btn btn-primary btn_inicio_settings" type="button">Socios</button>
                            <button className="btn btn-primary btn_inicio_settings" type="button">Clientes</button>
                        </div>
                    </div>
                </div>
        );
    
    }
}
export default botones_inicio;