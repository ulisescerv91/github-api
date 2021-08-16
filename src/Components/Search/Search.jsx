import React,{useState, useCallback} from 'react';
import './Search.scss'
import debounce from 'lodash.debounce';


const Search = (props) => {
    const [animation,setAnimation] = useState(false)
    
    const {handle} = props

    let handleChange =useCallback(debounce(value=>handle(value),500),[]);
                      

    let handleClick= ()=>{
        setAnimation(!animation);
        handleChange('')
        document.getElementById("input_search").value = '';
    }


    return (
        <div className='Search'>
            <input type="text"  onChange={e=>handleChange(e.target.value)} className={`Search__input ${animation?'animation':''}`}  id='input_search'/>
            <button className={`Search__btn ${animation?'close':''}`} onClick={()=>handleClick()}></button>
        </div>
    );
}

export default Search;
