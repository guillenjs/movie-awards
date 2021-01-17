import React, {useState} from 'react'
import styled from 'styled-components'
import Search from './components/Search.js'
import Results from './components/Results.js'
import Nominations from './components/Nominations.js'

const StyledDiv = styled.div
  `
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 5%;
  `

  const StyledDivTwo = styled.div
  `
  width:90%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
 
  `

const StyledHeader = styled.header
  `
  width: 100%;
  padding-right:100px;
  margin-left:4%;
  `



function App() {

  const [searchTerm, setSearchaTerm] = useState('')
  const [searchItems, setItems] = useState([])

  // const fetchItems = () => {
  //   if(searchTerm.length > 1){
  //     fetch(``)
  //     .then(res=> res.json())
  //     .then(data => setItems(data))
  //   }
  //   else
  //   {
  //     setItems([])
  //   }
  // }


  const search = (search) => {
    setSearchaTerm(search)
    fetchItems(search)
  }

  console.log(searchItems)



  return (
 
  <StyledDiv>
    <StyledDivTwo>
    <StyledHeader>The Shoppies</StyledHeader>
      <Search search = {search}></Search>
      <Results searchItems = {searchItems} ></Results>
      <Nominations></Nominations>
    </StyledDivTwo>
  </StyledDiv>

  );
}

export default App;
