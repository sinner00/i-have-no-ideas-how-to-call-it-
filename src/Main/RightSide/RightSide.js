import React from "react";
import styled from "styled-components";
import Header from "./Header";

const Main = styled.div`
height: 100vh;
display: flex;
overflow: hidden;
transition: 300ms ease-in; 
transform-origin: left;
width: 100%;
position: absolute;
z-index: ${({open})=>open ? -2 : 0};
opacity: ${({open})=>open ? 0.3 : 1};
`;
function RightSide({open, openFunction, lol, lolo, switcher}) {

return (

<Main open = {open } openFunction={openFunction}>
<Header switcher={switcher} openFunction={openFunction} open={open} lol={lol} lolo={lolo}/>
</Main>

)
}
export default RightSide;
