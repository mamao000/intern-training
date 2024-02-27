import styled from "styled-components";

export const SignInButton = styled.button`
  width: 353px;
  height: 48px;
  flex-shrink: 0;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  top: 40px;
  left: 16px;
  border: none;

  @media screen and (max-width: 1274px) {
    width: 100%;
    position: relative;
    left: 0;
  }
`;
