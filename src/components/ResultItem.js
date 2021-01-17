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
 `
const ResultItem = () => {

    return(
        <StyledCont>
            <div>Title</div>
            <div>Released: 1999</div>
            <Button>Nominate</Button>
        </StyledCont>
    )
}

export default ResultItem 