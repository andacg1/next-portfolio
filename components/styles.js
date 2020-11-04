import styled from '@emotion/styled'

export const breakpoints = {
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200
}

export const Hero = styled.div`
  background-color: darkcyan;
  color: white;
  border-radius: 15px;
  padding: 1rem!important;
  width: 200px;
  @media (min-width: ${breakpoints.m}px){
    max-width: 100%;
  } 
`
