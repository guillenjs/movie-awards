import React from 'react'
import styled from 'styled-components'
import NominationItem from './NominationItem.js'

const StyledDiv = styled.div
    `
    background-color: white;
    width: 45%; 
    height: 300px;
    border: solid 1px pink;
    margin-left:10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    `

const Nomination = () => {
    return (
        <StyledDiv>
            <NominationItem />
            <NominationItem />
            <NominationItem />
            <NominationItem />
            <NominationItem />
        </StyledDiv>
    )
}

export default Nomination