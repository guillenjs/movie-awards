import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div
    `
    background-color: white;
    width: 45%; 
    height: 300px;
    border: solid 1px pink;
    margin-left:10px
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