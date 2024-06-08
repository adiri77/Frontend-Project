import React from 'react';
import styled from 'styled-components';

const Footer = styled.footer`
  padding: 2rem;
  background-color: ${(props) => (props.theme === 'light' ? '#f8f9fa' : '#333')};
  color: ${(props) => (props.theme === 'light' ? '#000' : '#fff')};
`;

const FooterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

const FooterSection = styled.div`
  flex: 1;
  min-width: 200px;
  margin-bottom: 1rem;

  & h3 {
    font-size: 1.25rem;
    margin-bottom: 1rem;
  }

  & ul {
    list-style: none;
    padding: 0;

    & li {
      margin-bottom: 0.5rem;

      & a {
        color: inherit;
        text-decoration: none;
        

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;

const FooterInfo = styled.div`
  max-width: 400px;

  & p {
    margin-bottom: 1rem;
    
  }

  & .footer-button {
    display: inline-block;
    padding: 0.5rem 1rem;
    background-color: ${(props) => (props.theme === 'light' ? '#f8f9fa' : '#333')};
    color: ${(props) => (props.theme === 'light' ? '#000' : '#fff')};
    border: 1px solid ${(props) => (props.theme === 'light' ? '#000' : '#fff')};
    border-radius: 4px;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      background-color: ${(props) => (props.theme === 'light' ? '#333' : '#ddd')};
    }
  }
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid ${(props) => (props.theme === 'light' ? '#ddd' : '#444')};
  
  padding-top: 1rem;
`;

const SocialIcons = styled.div`
  & img {
    width: 20px;
    height: 20px;
    margin-left: 1rem;
  }
`;
const FooterComponent = ({ theme }) => {
    return (<>
    <Footer theme={theme}>
        <FooterContainer>
          <FooterInfo>
            <h3>LogicTech</h3>
            <p>
              LogicTech is the help desk software that helps you create a seamless support experience for both the
              customer & support teams.
            </p>
            {/* <p>
              LogicTech features a self-service portal for end customers to help them resolve the most common issues
              immediately in real time, 24x7. And an easy to use inbox that integrates all channels, integrations so
              support teams can manage everything from one screen.
            </p> */}
            <a href="#" className="footer-button">
              Get a demo
            </a>
          </FooterInfo>
          <FooterSection>
            <h3>Product</h3>
            <ul>
              <li><a href="#self-service">Self Service</a></li>
              <li><a href="#help-desk">Help Desk</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#product-updates">Product Updates</a></li>
            </ul>
          </FooterSection>
          <FooterSection>
            <h3>Company</h3>
            <ul>
              <li><a href="#about-us">About Us</a></li>
              <li><a href="#partners">Partners</a></li>
              <li><a href="#open-positions">Open Positions</a></li>
            </ul>
          </FooterSection>
          <FooterSection>
            <h3>Compare</h3>
            <ul>
              <li><a href="#gorgias">Gorgias</a></li>
              <li><a href="#zendesk">Zendesk</a></li>
              <li><a href="#reamaze">Re:amaze</a></li>
              <li><a href="#kustomer">Kustomer</a></li>
              <li><a href="#gladly">Gladly</a></li>
            </ul>
          </FooterSection>
          <FooterSection>
            <h3>Support</h3>
            <ul>
              <li><a href="#onboarding-guide">Onboarding Guide</a></li>
              <li><a href="#learn">Learn LogicTech</a></li>
              <li><a href="#status">LogicTech Status</a></li>
              <li><a href="#developers">Developers</a></li>
            </ul>
          </FooterSection>
        </FooterContainer>
        <FooterBottom>
          <p>&copy; 2024 LogicTech. All rights reserved.</p>
          <SocialIcons>
            <a href="https://www.instagram.com"><img src="/images/instagram.jpeg" alt="Instagram" /></a>
            <a href="https://www.facebook.com"><img src="/images/facebook.png" alt="Facebook" /></a>
            <a href="https://www.twitter.com"><img src="/images/twitter.png" alt="Twitter" /></a>
          </SocialIcons>
        </FooterBottom>
      </Footer>
    </>);};
    export default FooterComponent;