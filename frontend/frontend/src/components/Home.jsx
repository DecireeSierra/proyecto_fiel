import React from 'react';

import Header from '../template/Header'
import Btninicio from '../template/Btninicio'
import Footer from '../template/Footer'

class Home extends React.Component{

    render(){
        return(
            <React.Fragment>
                <Header></Header>
                    <Btninicio></Btninicio>
                    <Footer></Footer>
            </React.Fragment>
        );
    }
}
export default Home 