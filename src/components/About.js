import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import FooterComponent from './Footer';

const Container = styled.div`
  background-color: ${(props) => (props.theme === 'light' ? '#ffffff' : '#333333')};
  color: ${(props) => (props.theme === 'light' ? '#000000' : '#ffffff')};
  padding: 20px;
`;

const Header = styled.header`
  text-align: center;
  padding: 20px 0;

  & h1 {
    font-size: 2.5rem;
    margin: 0;
  }

  & p {
    font-size: 1.25rem;
    margin: 10px 0;
  }
`;

const HeroSection = styled.section`
  position: relative;
  text-align: center;
  color: white;
  margin: 20px 0;

  & img {
    width: 100%;
    height: auto;
  }

  & .text-overlay {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 3rem;
    font-weight: bold;
    white-space: nowrap;
    
    @media (max-width: 768px) {
      font-size: 2rem;
    }

    @media (max-width: 480px) {
      font-size: 1.5rem;
    }
  }
`;

const TeamSection = styled.section`
  text-align: center;
  padding: 20px 0;

  & h2 {
    font-size: 2rem;
    margin: 20px 0;
  }

  & p {
    font-size: 1.25rem;
    margin: 10px 0;
  }

  & .team-members {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }

  & .team-member {
    background-color: ${(props) => (props.theme === 'light' ? '#f8f9fa' : '#444444')};
    border-radius: 8px;
    padding: 20px;
    width: 200px;
    text-align: center;

    & img {
      width: 100%;
      height: auto;
      border-radius: 50%;
    }

    & h3 {
      font-size: 1.25rem;
      margin: 10px 0 5px 0;
    }

    & p {
      font-size: 1rem;
      margin: 5px 0;
    }

    & span {
      display: block;
      font-size: 0.875rem;
      color: ${(props) => (props.theme === 'light' ? '#555555' : '#aaaaaa')};
    }
  }
`;

const TeamComponent = () => {
  const theme = useSelector((state) => state.theme.theme);

  const teamMembers = [
    {
      name: 'Matt Wigham',
      title: 'Co-founder / CEO',
      location: 'Delhi, India',
      imgSrc: '/images/image1.png',
      handle: '@mattwigham',
    },
    {
      name: 'Eric Turner',
      title: 'Co-founder / Design Director',
      location: 'Mumbai, India',
      imgSrc: '/images/image2.jpg',
      handle: '@etturner',
    },
    {
      name: 'Karen Kenney',
      title: 'Software Developer',
      location: 'Banglore, India',
      imgSrc: '/images/image3.png',
      handle: '@Almightykaren',
    },
    {
      name: 'Dan Christofferson',
      title: 'Community Director',
      location: 'Delhi, India',
      imgSrc: '/images/image8.png',
      handle: '@beeeteeth',
    },
    {
      name: 'Lee Jensen',
      title: 'Engineering Director',
      location: 'Banglore, India',
      imgSrc: '/images/image9.png',
      handle: '@ouetteim',
    },
    {
      name: 'Rachel Gollay',
      title: 'Support Director',
      location: 'Pune, India',
      imgSrc: '/images/image10.png',
      handle: '@racheltastic',
    },
    {
        name: 'Prachi Goyal',
        title: 'Software Developer',
        location: 'Gurugram, Ibdia',
        imgSrc: '/images/image11.png',
        handle: '@prachitastic',
      }
  ];

  return (
    <>
    <Container theme={theme}>
      <Header>
        <h1>We help artists make a living doing what they love</h1>
        <p>
          Since 2024, LogicTech has been a company built by and for developers. And like the developer we work for, we are
          independent. We are self-funded. We are providing IT solutions. We are doing it the hard way. And we love it.
        </p>
      </Header>
      <HeroSection>
        <img src="/images/bg.png" alt="Hero" />
        <div className="text-overlay">Small But Mighty</div>
      </HeroSection>
      <TeamSection theme={theme}>
        <h2>The Team</h2>
        <p>
          Meet the 26 of us building and supporting LogicTech every day. We're headquartered in the Uttarpradesh
          district of India, but our team is spread across the world.
        </p>
        <div className="team-members">
          {teamMembers.map((member, index) => (
            <div className="team-member" key={index}>
              <img src={member.imgSrc} alt={member.name} />
              <h3>{member.name}</h3>
              <p>{member.title}</p>
              <span>{member.location}</span>
              <span>{member.handle}</span>
            </div>
          ))}
        </div>
      </TeamSection>
  <FooterComponent theme={theme}/>  
    </Container>

    </>
  );
};

export default TeamComponent;
