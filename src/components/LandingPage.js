import React from 'react';
import styled from 'styled-components';
import FooterComponent from './Footer';

const LandingPageContainer = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100vh;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: ${(props) =>
    props.theme === 'light'
      ? 'linear-gradient(90deg, rgba(55,0,255,1) 0%, rgba(183,0,255,1) 100%)'
      : 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(55,0,55,1) 100%)'};
  color: white;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const Nav = styled.nav`
  & a {
    margin-left: 1.5rem;
    color: white;
    text-decoration: none;
    font-size: 1rem;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Hero = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  background: ${(props) =>
    props.theme === 'light'
      ? 'linear-gradient(90deg, rgba(55,0,255,1) 0%, rgba(183,0,255,1) 100%)'
      : 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(55,0,55,1) 100%)'};
  color: white;
  padding: 2rem;
`;

const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  & h1 {
    font-size: 3rem;
    margin: 0;
  }

  & p {
    font-size: 1.5rem;
  }

  & button {
    padding: 1rem 2rem;
    background-color: #ffce00;
    color: #333;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 1rem;
    margin-top: 1rem;

    &:hover {
      background-color: #ffd633;
    }
  }
`;

const HeroImage = styled.div`
  & img {
    width: 100%;
    height: auto;
  }
`;

const Features = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  padding: 2rem;
  text-align: center;
  background: ${(props) => (props.theme === 'light' ? 'white' : 'black')};
`;

const Feature = styled.div`
  & img {
    width: 50px;
    height: 50px;
  }
`;

const FeatureHeading = styled.div`
  background: ${(props) => (props.theme === 'light' ? 'white' : 'black')};
`;

const Services = styled.section`
  padding: 2rem;
  background: ${(props) => (props.theme === 'light' ? 'white' : 'black')};
`;

const ServiceItems = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const ServiceCard = styled.div`
  background: ${(props) => (props.theme === 'light' ? '#f8f9fa' : 'black')};
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s;
  text-align: left;
  border: 2px solid ${(props) => (props.theme === 'light' ? 'black' : 'white')};

  &:hover {
    transform: translateY(-5px);
  }

  & img {
    width: 100%;
    height: 200px; /* Set a fixed height */
    object-fit: cover; /* Maintain aspect ratio and cover the area */
    border-bottom: 2px solid ${(props) => (props.theme === 'light' ? 'black' : 'white')};
  }

  & .btn {
    border-radius: 8px;
    height: 3em;
    border: 1px solid #eef5ff;
    color: rgb(27, 127, 255);
    background-color: #eef5ff;
  }

  & .card-content {
    padding: 1rem;
    color: ${(props) => (props.theme === 'light' ? '#333' : 'white')};

    & h3 {
      margin: 0;
      font-size: 1.25rem;
      color: ${(props) => (props.theme === 'light' ? '#333' : 'white')};
    }

    & p {
      font-size: 1rem;
      color: ${(props) => (props.theme === 'light' ? 'black' : 'white')};
    }

    &:hover {
      text-decoration: underline;
    }
  }
`;

const ServiceItem = ({ image, title, description, theme }) => (
  <ServiceCard theme={theme}>
    <img src={image} alt={title} />
    <div className="card-content">
      <button className='btn'><b>{title}</b></button>
      <p><b>{description}</b></p>
    </div>
  </ServiceCard>
);


const LandingPage = ({ theme }) => {
  return (
    <LandingPageContainer>
      {/* <Header theme={theme}>
        <Logo>ASTRA</Logo>
        <Nav>
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#reviews">Reviews</a>
          <a href="#whyus">Why Us</a>
          <a href="#contact">Contact</a>
        </Nav>
      </Header> */}
      <Hero theme={theme}>
        <HeroText>
          <h1>Your Idea Matters!</h1>
          <p>Grow your business with exceptional customer service</p>
          <button>Make a Website</button>
        </HeroText>
        <HeroImage>
          <img src="/images/logo.png" alt="Hero" /> {/* Replace with your image path */}
        </HeroImage>
      </Hero>
      <FeatureHeading theme={theme}>
        <hr />
        <h1>
          <b>Experience Our Distinctive Services</b>
        </h1>
      </FeatureHeading>
      <Features theme={theme}>
        <Feature>
          <img src="/images/ai-application.png" alt="Local Business" /> {/* Replace with your icon path */}
          <h2>AI/ML Services</h2>
          <p>
            Generative AI Solutions AI Led Product Development Conversational AI & Chatbots ML Ops
          </p>
        </Feature>
        <Feature>
          <img src="/images/content-management.png" alt="Online Store" /> {/* Replace with your icon path */}
          <h2>Digital Engineering</h2>
          <p>
            Product Discovery & Design Web & Mobile Apps Development Microservices Development Cloud and DevOps Service
          </p>
        </Feature>
        <Feature>
          <img src="/images/coding.png" alt="Blogging" /> {/* Replace with your icon path */}
          <h2>Kotlin Development</h2>
          <p>
            Kotlin Server Side Development Kotlin Multi-platform Development Kotlin Android Development Kotlin Migration
          </p>
        </Feature>
        <Feature>
          <img src="/images/scrum.png" alt="Portfolio" /> {/* Replace with your icon path */}
          <h2>Cloud & DevOps</h2>
          <p>
            DevOps As Service Cloud Managed Service Audits, Assessments & Consulting Cloud Migration
          </p>
        </Feature>
      </Features>
      <FeatureHeading theme={theme}>
        <hr />
        <h1>
          <b>Recent Posts</b>
        </h1>
      </FeatureHeading>
      <Services theme={theme}>
        <ServiceItems>
          <ServiceItem
            image="/images/pic1.png"
            title="Automation and Self-service"
            description="AI for Customer Service in 2024: Examples & Tips"
            theme={theme}
          />
          <ServiceItem
            image="/images/pic2.png"
            title="CX Team Management"
            description="Building Customer Service Teams: Tips to Hire & Manage"
            theme={theme}
          />
          <ServiceItem
            image="/images/pic3.png"
            title="Ecommerce Technology"
            description="Best Ecommerce Tools to Drive Sales & Enhance CX"
            theme={theme}
          />
        </ServiceItems>
             </Services>
             <FooterComponent theme={theme}/>
    </LandingPageContainer>
  );
};

export default LandingPage;
