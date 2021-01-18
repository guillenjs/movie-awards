import React,{useEffect, useState} from 'react'
import styled from 'styled-components'
import ResultItem from './ResultItem.js'


const StyledDiv = styled.div
    `
    background-color:#424242;
    color: white;
    width: 45%;
    height: 500px;
    overflow: scroll;
    border: solid 1px #E1BEE7;
    margin-right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-top: 20px;
    border-radius: 10px;
    padding: 10px;
    header{
        font-size: 20px;
        font-weight: 600;
    }
    `

    const StyledDivTwo = styled.div
    `
    background-color:#424242;
 
    color: white;
    width: 100%;
    height: 400px;
    overflow: scroll;
    margin-right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-top: 50px;
    border-radius: 10px;
    `
const Loader = styled.div
    `
        border: 16px solid #f3f3f3; /* Light grey */
        border-top: 16px solid #E040FB; /* Blue */
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
            <header>Search Results</header>
            <StyledDivTwo>
                {props.loading? loading(): renderItems()}
            </StyledDivTwo>
        </StyledDiv>
    )
}

export default Results