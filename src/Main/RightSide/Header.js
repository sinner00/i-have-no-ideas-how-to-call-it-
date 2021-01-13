import React from 'react';
import BurgerMenu from "../../BurgerMenu";
import styled from "styled-components";

const StyledHeader = styled.div `
width: 100%;
display: flex;
    justify-content: start;
    align-items: center;
    height: 5rem;
    
    
    .Wrapper_Burger {
    width: 30%;
    height: 100%;
    display: flex;
    border: 1px solid black;
    justify-content: center;
    align-items: center; 
    
    
   
    }
    
    .second {
  
    width: 100%;
    justify-content: center;
    text-align: center;
    border: 1px solid;
    overflow: hidden;
    display: inline;
    white-space: nowrap;
    
    
    }
    .styledHeader_child {
    display: inline-flex;
    width: 100%;
    height: 100%;
    align-items: center;
    }
   .parent_container {
   width: 100%;
   height: 100%;
   }
   .BurgerMenuStyle{
   padding-right: 5px;
   vertical-align: center;
   
   }
   .menu {
   
   }
`;
function Header({open, openFunction, lol, lolo}) {
 return (
     <StyledHeader open={open} openFunction={openFunction}>
         <div className='container parent_container'>
         <div className='row styledHeader_child'>
         <div className='col-lg-1 Wrapper_Burger'  >
             <BurgerMenu openFunction={openFunction} slider={open} lol={lol} lolo={lolo} />
             <p className='menu'>Menu</p>
         </div>
         <div className="col-lg-7 second" > 2 </div>
         <div className="col-lg-3 second"  > 3 wertyuiop[sdfghjkdfgh dsfgbvhmnl.adsdcfvhmnlasdfghjkl;SADFGHJKL;container</div>
         </div>
         </div>
     </StyledHeader>
 )
}
export default Header;