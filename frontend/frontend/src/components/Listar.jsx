import React from 'react';

class Listar extends React.Component{
    state = {
        tutorials: []
    };
    async componentDidMount() {
        try {
            const res = await fetch('https://0j4hvpf4fd.execute-api.us-east-1.amazonaws.com/dev/api/tutorials');
            /*const res = await fetch('http://127.0.0.1:8000/api/');*/ // fetching the data from api, before the page loaded
            const tutorials = await res.json();
            this.setState({
                tutorials
            });
        } catch (e) {
            console.log(e);
        }
    }
    render(){
        return(
            <div>
                {this.state.tutorials.map(item => (
                    <div key={item.id}>
                        <h1>{item.title}</h1>
                        <span>{item.description}</span>
                    </div>
                ))}
            </div>
        );
    }

}
export default Listar 