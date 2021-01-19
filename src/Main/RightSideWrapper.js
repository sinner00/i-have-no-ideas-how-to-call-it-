import React, { useRef } from "react"
import styled from "styled-components"
import RightSide from "./RightSide/RightSide";


const StyledWrapper = styled.div `
width: 100%;
height: 100vh;
position: relative;
`;
// eslint-disable-next-line react/prop-types
function Side({ open, openFunction, lol, lolo, switcher, sideRef }) {
  return (
    <StyledWrapper ref={sideRef} >
      <RightSide switcher={switcher} open={open} openFunction={openFunction} lol ={lol} lolo={lolo} />
    </StyledWrapper>
  )
}

export default Side;
