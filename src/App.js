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
  const [nominations, setNominations] = useState([])
  const [searchItems, setItems] = useState([])
  const [loading, setLoading] = useState(false)
  const  API_KEY = process.env.REACT_APP_MOVIE_AWARDS_API_KEY

  const fetchItems = () => {
    if(searchTerm.length > 1){
      setLoading(true)
      fetch(`http://www.omdbapi.com/?s=${searchTerm}&apikey=279bb362`)
      .then(res=> res.json())
      .then(data => {
        setItems(data)
        setLoading(false)
      })
    }
    else
    {
      setLoading(true)
      setItems([])
    }
  }


  const search = (search) => {
    setSearchaTerm(search)
    fetchItems(search)
  }

  const handleNominations = (nom) => {
    console.log(nom)
    setNominations([...nominations, nom])
  }

  console.log(searchItems)
  console.log(nominations)


  return (
 
  <StyledDiv>
    <StyledDivTwo>
    <StyledHeader>The Shoppies</StyledHeader>
      <Search search = {search}></Search>
      <Results 
        searchItems = {searchItems} 
        loading = {loading}
        handleNominations = {handleNominations}
        nominations = {nominations}
      />
      <Nominations nominations = {nominations}/>
    </StyledDivTwo>
  </StyledDiv>

  );
}

export default App;
