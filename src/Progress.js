import styled from 'styled-components';

const  Progress  =  styled.div`
  position:  fixed;
  background:  linear-gradient(
    to right,
    rgba(43, 53, 140, 1) ${props => props.scroll},
    transparent  0);
  width:  100%;
  height:  5px;
  z-index:  3;
`;

export  default  Progress;