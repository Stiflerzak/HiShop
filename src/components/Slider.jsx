import styled from "styled-components";
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';

const Container= styled.div`
    width: 100%;
    height: 100vh;
    display: flex;   
    position: relative; 
    overflow: hidden;
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
z-index: 2;
`;
const Wrapper= styled.div`
height: 100%
display:flex;
transform: translateX(-100px)
`;
const Slide= styled.div`
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
background-color:#${props=> props.bg}
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
    const [slideIndex, setSlideIndex] = useState(0);

const handleClick= (direction) =>{}

  return (
    <Container>
    <Arrow direction= "left" onClick={()=> handleClick("left")}>
    <ArrowLeftOutlinedIcon/>
    </Arrow>
<Wrapper>
<Slide bg="#FF7F50">
<ImgContainer> 
<Image src="https://phonesstorekenya.com/wp-content/uploads/2021/09/Apple-iPhone-13-Pro-Max-b.jpg"/>
</ImgContainer>
<InfoContainer>
<Title>Apple iPhone 13 Pro Max</Title>
<Description>Don't compromise on quality! Get this 12MP + 12MP + 12MP + TOF 3D LiDAR</Description>
<Button>SHOP NOW</Button>
</InfoContainer>
</Slide>

<Slide bg="#BDB76B">
<ImgContainer> 
<Image src="https://phonesstorekenya.com/wp-content/uploads/2021/05/Samsung-Galaxy-A22-5G.jpg"/>
</ImgContainer>
<InfoContainer>
<Title>Samsung Galaxy A22 5G</Title>
<Description>48 MP + 8 MP + 5 MP</Description>
<Button>SHOP NOW</Button>
</InfoContainer>
</Slide>

<Slide bg="#BDB76B">
<ImgContainer> 
<Image src="https://phonesstorekenya.com/wp-content/uploads/2022/07/MacBook-Pro-13-inch-M2-chip-a.jpg"/>
</ImgContainer>
<InfoContainer>
<Title>MacBook Pro 13-inch M2 2022</Title>
<Description>13.3-inch, 2,560 x 1,600 Retina display 256 SSD, 512GB SSD</Description>
<Button>SHOP NOW</Button>
</InfoContainer>
</Slide>
</Wrapper>


    <Arrow direction= "right" onClick={()=> handleClick("right")}>
    <ArrowRightOutlinedIcon/>
    </Arrow>
    </Container>
  )
}
