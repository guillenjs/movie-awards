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

  border: solid 1px black;
  `

const StyledHeader = styled.header
  `
  width: 100%
  
  `

function App() {
  return (
  <StyledDiv>
    <StyledHeader>The Shoppies</StyledHeader>
    <Search></Search>
    <Results></Results>
    <Nominations></Nominations>
  </StyledDiv>
  );
}

export default App;
