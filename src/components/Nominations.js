import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div
    `
    background-color: white;
    width: 40%; 
    height: 300px;
    border: solid 1px pink;
    `

const Nomination = () => {
    return (
        <StyledDiv>
            <div>Nomination</div>
            <div>Nomination</div>
            <div>Nomination</div>
            <div>Nomination</div>
            <div>Nomination</div>
        </StyledDiv>
    )
}

export default Nomination