import React from 'react'
import styled from 'styled-components';

const ServiceCard = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s;
  text-align: left;

  &:hover {
    transform: translateY(-5px);
  }

  & img {
    width: 100%;
    height: auto;
  }

  & .card-content {
    padding: 1rem;

    & h3 {
      margin: 0;
      font-size: 1.25rem;
      color: #333;
    }

    & p {
      font-size: 1rem;
      color: #666;
    }

    & .read-more {
      margin-top: 1rem;
      display: inline-block;
      color: #007BFF;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;


const ServiceItem = ({ image, title, description }) => (
    <ServiceCard>
      <img src={image} alt={title} />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href="#" className="read-more">Read More</a>
      </div>
    </ServiceCard>
  );

export default ServiceItem