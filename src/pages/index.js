import React from 'react'
import styled from 'styled-components'
import { FaInstagram, FaFacebookF, FaRegEnvelopeOpen } from 'react-icons/fa'
import { MdPhone } from 'react-icons/md'

import Section from '../components/Section'

import logo from '../images/logo.png'
import dropdown from '../images/dropdown.png'

import divider from '../images/divider.png'

import phone from '../images/phone.png'
import facebook from '../images/facebook.png'
import insta from '../images/insta.png'
import twitter from '../images/twitter.png'
import email from '../images/email.png'

import image1 from '../images/top.png'
import image2 from '../images/middle.png'
import image3 from '../images/bottom.png'

import './styles.css'

const Wrapper = styled.div`
  font-family: sans-serif;
`

const Header = styled.div`
  height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 3px solid black;

  
`

const Content = styled.div`
  background-color: black;
  min-height: 100px;
  border-bottom: 3px solid black;

`

const Footer = styled.div`
  height: 3rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 2rem;
`

const TextHeader = styled.span`
  font-weight: bold;
  font-size: 1.5rem;
`

const SocialIcon = styled.a`
  color: black;
  text-decoration: none;
`

const HeaderImage = styled.img`
  height: 2rem;
  text-align: center;

`
const Divider = styled.img`
  height: 0.1rm;
  text-align: center;

`
const Div = styled.div`
  flex-direction:column;
  text-align: center;

`
const Ptext = styled.p`
display:flex;
text-align: center;
 padding: 1rem;
 flex-direction: column;
  
  color: white;
  font-weight: bold;
  
  
     color: #ff6363;

  text-shadow:
    -1px -1px 0 #262626,
    1px -1px 0 #262626,
    -1px 1px 0 #262626,
    1px 1px 0 #262626;

`

const IndexPage = () =>
  <Wrapper>

    <Header>
      <HeaderImage src={logo} />
      <HeaderImage src={dropdown} />
    </Header>
      

    <Content>
    <Section image={image1} textCenter='We believe in building networks that boost our clients advertising performance. ' textRight='' flip />

      <Section image={image2} textCenter='Distribute your online promotions or specials directly to anyones smartphone with Bluetooth messaging. 'textRight='' flip />

          <Section image={image3} textM='Wanna Buy One? Book a Demo Today'  textCenter='' flip >
         
       </Section>
      
    </Content>

    <Footer>
    <HeaderImage src={phone} />
    <HeaderImage src={facebook} />
    <HeaderImage src={insta} />
    <HeaderImage src={twitter} />
    <HeaderImage src={email} />
    
      
    {/*   <SocialIcon href='tel:9569291450' target='_blank'><MdPhone style={{ display: 'flex' }} /></SocialIcon>
      <SocialIcon href='tel:9569291450' target='_blank'><FaInstagram style={{ display: 'flex' }} /></SocialIcon>
      <SocialIcon href='tel:9569291450' target='_blank'><FaFacebookF style={{ display: 'flex' }} /></SocialIcon>
      <SocialIcon href='tel:9569291450' target='_blank'><FaRegEnvelopeOpen style={{ display: 'flex' }} /></SocialIcon> */}
    </Footer>

  </Wrapper>

export default IndexPage
