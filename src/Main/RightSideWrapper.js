import React from "react"
import styled from "styled-components"
import RightSide from "./RightSide/RightSide";


const StyledWrapper = styled.div `

  height: 100vh;
  position: relative;
  width: 100%;
`;
// eslint-disable-next-line react/prop-types
function Side({ open, openFunction, lol, lolo, switcher, isModalOpen }) {


  return (
    <StyledWrapper >
      <RightSide switcher={switcher} open={open} openFunction={openFunction} lol ={lol} lolo={lolo} isModalOpen={isModalOpen}/>
    </StyledWrapper>
  )
}

export default Side;
