import React, {useState, useRef} from 'react'
import styled from "styled-components";


import Navigation from "./Main/LeftSide/Navigation";
import Side from "./Main/RightSideWrapper";
import useOnClickOutside from "./Main/useOnClickOutside";


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
position: absolute;
}

.nav {
width: 30px;
display: block;
margin: 1em 0 0 1em;
position: relative;
}
.nav .one::before {
content: "";
transform-origin: left;
transform: scaleX(0);
width: 100%;
height: 100%;
background-color: white;
transition: 300ms ease-in-out;
}

.nav:hover .one::before{

transform: scaleX(1);
}  






`;

function App() {
    const [open, setOpen  ] = useState(false);
    const [lol, lolOpen] = useState(false);
    const openFunction = () => setOpen(!open);
    const lolo = () => lolOpen(!lol) ;
    const ref = useRef();
    // State for our modal
    const [isModalOpen, setModalOpen] = useState(false);
    // Call hook passing in the ref and a function to call on outside click
    useOnClickOutside(ref, () => setModalOpen(false));
          const switcher =  setModalOpen(true)




    return (
  <Markup    className='container-fluid'   >
      {isModalOpen ?
      < Navigation handler={open} openFunction={openFunction} onClick={switcher}/>    :

          < Side open={open} openFunction={openFunction} lol={lol} lolo={lolo} ref={ref} />

      }
  </Markup>


  );

}

export default App;
