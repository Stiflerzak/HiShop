import styled from "styled-components";
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';

const Container= styled.div`
    width: 100%;
    height: 100vh;
    display: flex;   
    position: relative; 
`
const Arrow= styled.div`
width=50px;
height=50px;
background-color: white;
border-radius: 50%;
display: flex; 
align-items: center;
justify-content: center;
position: absolute;
top:0;
bottom:0;
left: ${props=> props.direction === "left" && "10px"};
right: ${props=> props.direction === "right" && "10px"};
cursor: pointer;
opacity: 0.5;
margin:auto;
`;
const Wrapper= styled.div`
height: 100%
`;
const Slide= styled.div`
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
`;

const ImgContainer= styled.div`
flex: 1;
height:100%;
`;

const InfoContainer= styled.div`
flex: 1;
padding: 50px;
`;

const Image= styled.img`
height:80%
`
const Title= styled.h1`
font-size: 70px;
`
const Description= styled.p`
margin: 50px 0px;
font-size: 20px;
font-weight: 500;
letter-spacing: 3px;
`
const Button= styled.button`
padding:10px
font-size: 20px;
background-color: transparent;
cursor: pointer;
`

export const Slider = () => {
  return (
    <Container>
    <Arrow direction= "left">
    <ArrowLeftOutlinedIcon/>
    </Arrow>
<Wrapper>
<Slide>
<ImgContainer> 
<Image src="https://phonesstorekenya.com/wp-content/uploads/2021/09/Apple-iPhone-13-Pro-Max-b.jpg"/>
</ImgContainer>
<InfoContainer>
<Title>Apple iPhone 13 Pro Max</Title>
<Description>Don't compromise on quality! Get this 12MP + 12MP + 12MP + TOF 3D LiDAR</Description>
<Button>Shop Now</Button>
</InfoContainer>
</Slide>
</Wrapper>
    <Arrow direction= "right">
    <ArrowRightOutlinedIcon/>
    </Arrow>
    </Container>
  )
}
