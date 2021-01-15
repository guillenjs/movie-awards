import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div
    `
    background-color: white;
    width: 40%;
    height: 300px;
    overflow: scroll;
    border: solid 1px pink;
    `

const Results = () => {
    return (
        <StyledDiv>
            <div>result</div>
            <div>result</div>
            <div>result</div>
            <div>result</div>
            <div>result</div>
         
          
        </StyledDiv>
    )
}

export default Results