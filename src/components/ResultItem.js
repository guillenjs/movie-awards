import React from 'react'
import styled from 'styled-components'

const StyledCont = styled.div
    `
    width:80%;
    height: 50px;
    border: solid 1px grey;
    border-radius;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14),
    0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    margin: 5px; 
    button:hover {
        background-color: green;
    }
    `
const Button = styled.button
 `
    border:none;
    outline: none;
    height:100%;
    width:50px;
    border-radius: 50px;
    font-size: 20px;
    color: grey;
    transition: 0.5s ease-in-out;
 `
const ResultItem = (props) => {
    const {Title, Year } = props.movie
    return(
        <StyledCont>
            <div>{Title}</div>
            <div>Released: {Year}</div>
            <Button onClick={()=>props.handleNominations(props.movie)}><i class="fa fa-plus"></i></Button>
        </StyledCont>
    )
}

export default ResultItem 