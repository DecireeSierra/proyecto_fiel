import React from 'react';

class Table extends React.Component{
    render(){
        return(
            <div className="table-responsive-md">
                <table className="table caption-top">
                    <caption>Tablas</caption>
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>nombre de la tabla</td>
                            <td>Acciones</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    
    }
}
export default Table;