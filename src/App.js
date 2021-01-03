import React, {useState} from 'react'
import styled from "styled-components";
import RightSide from "./Main/RightSide/RightSide";
import Navigation from "./Main/LeftSide/Navigation";

const Markup = styled.div `
height: 100vh;
width: 100%;
display: flex;

.div {
        height: 100vh;
        width: 70%;

}
.lk {
height: 70px;
width: 70px;
top: 50%;
left: 50%;
border: 2px solid red;
display:inline-flex;
justify-content: center;
align-items: center;
flex-direction: column;
}

.nav div {
height: 5px;
background-color: black;
margin: 5px 0;
border-radius: 25px;
}

.nav {
width: 30px;
display: block;
margin: 1em 0 0 1em;
}
.nav div::before {
content: "";
transform-origin: left;
transform: scaleX(0);
width: 100%;
height: 100%;
}

.nav:hover::before  div {
background-color: white;
transition: 300ms ease-in-out;
}  




`;

function App() {
    const [open, setOpen  ] = useState(false);
    const [lol, lolOpen] = useState(false);
    const openFunction = () => setOpen(!open);
    const lolo = () => lolOpen(!lol);


  return (

  <Markup    className='container-fluid' >

      <Navigation handler={open} openFunction={openFunction}/>

       <RightSide  open={open} openFunction={openFunction} lol ={lol} lolo={lolo}/>

<a className='nav'>
    <div className='one w' > </div>
    <div className='second w'> </div>
    <div className='three w'> </div>

</a>






  </Markup>


  );
}

export default App;
