import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Card from './Card/Card';
import Search from './Search/Search';
import './SearchBugs.scss'
import Title from './Title/Title';

const SearchBugs = () => {
    const [dataAPI, setDataAPI] = useState(null)
    const [notMatch, setNotMatch] = useState(false)

    let handleChange = async (value) =>{
        try {
            if(value.length > 1){
                    let res = await axios.get(`https://api.github.com/search/issues?q=repo:facebook/react+${value}+in:title`)
                    let data = res.data.items;
                    setDataAPI(data)
                    setNotMatch(data.length === 0)
                    
            }else{
                setNotMatch(false)
                setDataAPI([])
            }

        } catch (error) {
            console.error(error)
        }
    }


    let getCards = () =>{
        return dataAPI && dataAPI.map((item, key) => {
            return <Card item={item} key={key}/>
        })
    }


    return (
        <div className='SearchBugs'>
            <Title/>
            <h1>Search bugs</h1>
            <div className="SearchBugs__container">
                <Search handle={ handleChange }/>                
                {
                    ( (dataAPI && dataAPI.length > 0) || notMatch )  && (
                        <div className="SearchBugs__container__options">
                            {getCards()}
                            { notMatch===true && <h3>Not Match</h3> }
                        </div>
                    )
                }
                
            </div>
        </div>
    );
}

export default SearchBugs;
