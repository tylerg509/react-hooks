import React from 'react';

class App extends React.Component{
    state = { resource: 'posts'}
    render() {
        return(
            <div> 
                <div>
                    <button className="ui primary button" onClick={()=> this.setState({resource: 'Posts'})}>Posts</button>
                    <button className="ui secondary button" onClick={()=> this.setState({resource: 'ToDos'})}>ToDos</button>
                </div> 
                {this.state.resource}
            </div>

        )

    }
}

export default App;