import React, {useState} from 'react';
import ResourceList from './ResourceList';

const App = () =>{
    const[resource, setResource] = useState('posts')

    return(
        <div> 
            <div>
                <button className="ui primary button" onClick={()=> setResource('posts')}>Posts</button>
                <button className="ui secondary button" onClick={()=> setResource('todos')}>ToDos</button>
            </div> 
            <ResourceList resource={resource}></ResourceList>
        </div>
    )
}
export default App;