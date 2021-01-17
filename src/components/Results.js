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
    flex-direction: column;
    padding-top: 20px;
    `

const Results = (props) => {
    
    const renderItems = () => {
        if(props.searchItems.Search)
            {    
            return props.searchItems.Search.map(movie => <ResultItem key={movie.imdbID} movie={movie}/>)
            }
        else{ return 'nothing yet'}
    }

    return (
        <StyledDiv>
            {renderItems()}
        </StyledDiv>
    )
}

export default Results