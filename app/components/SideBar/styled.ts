import styled from "styled-components";

export const ProfileImage = styled.div`
  width: 312px;
  height: 88px;
  background-color: #ffffff;
  border-bottom: 1px solid #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  width: 312px;
  height: 56px;
  border: none;
  background-color: #ffffff;
  cursor: pointer;

  &:hover:enabled {
    background-color: #f1f5f6;
  }
`;

export const SideBarContainer = styled.div`
  padding-top: 32px;
  padding-left: 32px;
  width: 344px;
  height: 401px;

  @media screen and (max-width: 992px) {
    display: none;
  }
`;
