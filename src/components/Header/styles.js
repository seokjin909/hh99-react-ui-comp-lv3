import { styled } from 'styled-components';

export const StyledHeader = styled.div`
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .react-logo {
    display: inline-block;
    position: relative;
    top: 74x;
    right: 10px;
    width: 25px;
    height: 25px;
    background-image: url('./assets/icon/react-heart.svg');
    background-size: cover;
    background-position: center center;

    animation-name: spin;
    animation-duration: 5000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    transform-origin: 50% 50%;
    margin: 0 -10px;
  }

  h1 {
    color: white;
    font-size: 1.8rem;
    text-align: center;
    font-size: 2rem;
    margin-top: 30px;
    letter-spacing: 1.5px;
  }

  display: flex;
  justify-content: center;
  align-items: center;

  icon {
    color: #e91e63;
    opacity: 0.6;
  }
`;
