import React, {useState} from 'react'
import styled from "styled-components";
import RightSide from "./Main/RightSide/RightSide";
import Navigaton from "./Main/LeftSide/Navigation";
const Markup = styled.div `
height: 100vh;
width: 100%;
display: flex;
`;

function App() {
    const [open, setOpen  ] = useState(false);

  return (
      <>
  <Markup   className='container-fluid'>
     {open &&
      <Navigaton open={open}/>
  }
      <RightSide open={open} handler={()=> setOpen(!open)}/>
  </Markup>

    </>
  );
}

export default App;
