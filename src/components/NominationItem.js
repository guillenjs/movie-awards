import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div
    `
    width:90%;
    height: 50px;
    border: solid 1px grey;
    border-radius: 10px;
    display: flex;
    align-items:center;
    justify-content:space-evenly;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14),
    0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    margin: 5px; 
    padding: 10px;
    button:hover {
        background-color: #CF6679;
        border: solid 6px #FF7597;
    }
 

    `
    const StyledDivTwo = styled.div
    `
    width:90%;
    height: 50px;
    border-radius: 10px;
    display: flex;
    align-items:center;
    justify-content:space-evenly;
    margin: 5px; 
    padding: 10px;
    button:hover {
        background-color: #CF6679;
        border: solid 6px #FF7597;
    }

    `

    const Button = styled.button
    `
       border:none;
       outline: none;
       height:100%;
       width:55px;
       border-radius: 50px;
       font-size: 20px;
       color: grey;
       padding: 5px;
       transition: 0.5s ease-in-out;
    `

const NominationItem = (props) => {
    const{Title} = props.movie

    
    return(
        <StyledDivTwo>
            <StyledDiv>
                {Title}
            </StyledDiv>
            <Button onClick={()=>props.removeNomination(props.movie)}><i class="fa fa-minus"></i></Button>
        </StyledDivTwo>
    )
}

export default NominationItem 