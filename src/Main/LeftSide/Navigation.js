
import styled from "styled-components";
import React  from 'react';
const StyledMenu =styled.div `
height: 100vh;
width: 20%;
background-color: white;
overflow: hidden;
display: ${({open}) => open ? "block" : "none"}    ;
`;
const Ul= styled.div `
text-decoration: none;
list-style: none;
width: 100%;
height: 100vh;



li {


text-decoration: none;
list-style: none;
text-align: left;
 padding-left: 3rem;
 height: 4rem;
 align-items: center;
transition: transform 1s linear;
background-color: #ecebeb;

 &:hover {
background: white;
transition: 0.5s linear;
cursor: pointer;
}
};
 


}
a {
list-style: none;
text-decoration: none;
font-size:20px;
color: black;


}
{`;


function Navigaton({open}) {

return (
  <StyledMenu open={open}  >

    <Ul className="NavUl" open={open} >
      <li className="NavList" > <a href='/'>Register/Log in</a></li>
      <li className="NavList"> <a href='/'>Home</a></li>
      <li className="NavList"> <a href='/'>Winners</a></li>
      <li className="NavList"> <a href='/'> Nominees</a></li>
      <li className="NavList"> <a href='/'>Collections</a></li>
      <li className="NavList"> <a href='/'> Academy</a></li>
      <li className="NavList"> <a href='/'>Professional directory</a></li>
      <li className="NavList"> <a href='/'>Jobs & Talent</a></li>
      <li className="NavList"> <a href='/'>Blog</a></li>
      <li className="NavList"> <a href='/'>eBooks & Publications  </a></li>
      <li className="NavList"> <a href='/'>JURY2020</a></li>
      <li className="NavList"> <a href='/'>Conferences</a></li>




    </Ul>

  </StyledMenu>
)
}

export default Navigaton;