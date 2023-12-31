import { styled } from 'styled-components';

export const RightSideContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  width: 350px;
`;

export const TransitionDiv = styled.div`
  transform: ${(props) => props.translate || `translateY(10px)`};
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: ${(props) => props.translate || `translateY(0)`};
  }
`;
