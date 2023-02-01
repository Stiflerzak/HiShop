import styled from "styled-components";

const Container= styled.div`
height: 30px;
background-color: teal;
color:white;
display: flex;
align-items: center;
justify-content: center;
font-size:16px;
font-weight: 500;
`

export const Announcement = () => {
  return (
    <Container>
  Super Deal!! Free Delivery on Orders over 10000 ksh
    </Container>
  )
}
