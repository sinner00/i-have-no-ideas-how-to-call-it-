import React, {useState} from 'react'
import styled from "styled-components";
import RightSide from "./Main/RightSide/RightSide";

import BurgerMenu from "./BurgerMenu";
import Navigaton from "./Main/LeftSide/Navigation";
const Markup = styled.div `
height: 100vh;
width: 100%;
display: flex;
`;

function App() {
    const [setOpen, open  ] = useState(false);

  return (
      <>
  <Markup   className='container-fluid'>
     {setOpen&&
      <Navigaton/>
  }
      <RightSide handler={()=> open(true)}/>
  </Markup>

    </>
  );
}

export default App;
