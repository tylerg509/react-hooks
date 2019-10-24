import React, {useState} from 'react';

const App = () =>{
    const[resource, setResource] = useState('posts')

    return(
        <div> 
            <div>
                <button className="ui primary button" onClick={()=> setResource('posts')}>Posts</button>
                <button className="ui secondary button" onClick={()=> setResource('todos')}>ToDos</button>
            </div> 
            {resource}
        </div>
    )
}
export default App;