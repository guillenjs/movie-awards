import React,{useEffect, useState} from 'react'
import styled from 'styled-components'
import ResultItem from './ResultItem.js'


const StyledDiv = styled.div
    `
    background-color: white;
    width: 45%;
    height: 300px;
    overflow: scroll;
    border: solid 1px pink;
    margin-right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-top: 20px;
 
    `
const Loader = styled.div
    `
        border: 16px solid #f3f3f3; /* Light grey */
        border-top: 16px solid #3498db; /* Blue */
        border-radius: 50%;
        width: 120px;
        height: 120px;
        animation: spin 2s linear infinite;
      
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `

const Results = (props) => {
    
    const renderItems = () => {
        if(props.searchItems.Search)
            {    
            return props.searchItems.Search.map(movie => 
            <ResultItem
                 key={movie.imdbID} movie={movie}  
                 handleNominations = {props.handleNominations}
                 nominations = {props.nominations}
            />)
            }
        else{ return 'Nothing Found'}
    }

    const loading = () => {return <Loader />}

    return (
        <StyledDiv>
            {props.loading? loading(): renderItems()}
        </StyledDiv>
    )
}

export default Results