import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div
    `
    width:90%;
    height: 50px;
    border: solid 1px grey;
    border-radius;
    display: flex;
    align-items:center;
    justify-content:center;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14),
    0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    margin: 5px; 
    button:hover {
        background-color: green;
    `



const NominationItem = (props) => {
    const{Title} = props.movie

    
    return(
        <StyledDiv>
            {Title}
            <button onClick={()=>props.removeNomination(props.movie)}>remove</button>
        </StyledDiv>
    )
}

export default NominationItem 