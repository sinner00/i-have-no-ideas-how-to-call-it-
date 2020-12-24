import React from "react";
import styled from 'styled-components'


const StyledRegister= styled.div `
   text-align: center;
   vertical-align: center;
   font-size: 1.5rem;
   height: 4rem;
   border-bottom: #cecece solid 1px;
   position: absolute;


    &:hover{
    background-color: white;
    transition: 0.3s linear;
    }
  
    a{
    text-decoration: none;
    color: black;
    
    }
     `;


function Register() {
        return (
     <StyledRegister className='col-md-12 sample'>
            <a href='/'>Register</a>
     </StyledRegister>
    )

}
export default Register;