"use client";
import styled from "styled-components";
import { BREAKPOINT } from "./constants";

export const Navbar = styled.div`
  max-height: 64px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.08);
`;

export const NavbarButton = styled.button`
  flex-shrink: 0;
  color: #616161;
  text-align: right;
  font-family: "PingFang TC";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 171.429% */
  border: none;
  cursor: pointer;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover:enabled {
    background-color: #f1f5f6;
  }
`;

export const NavbarBox = styled.div`
  max-width: 141px;
  max-height: 64px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  background: #fff;
`;

export const Brand = styled.div`
  display: flex;
  max-width: 120px;
  max-height: 29px;
  padding: 0.054px 0px 0.127px 0px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  margin-left: 20px;
`;

export const NavbarList = styled.div`
  display: flex;
  align-items: center;

  @media ${BREAKPOINT.MOBILE} {
    display: none;
  }
`;

export const NavbarBlock = styled.div`
  display: none;

  @media ${BREAKPOINT.MOBILE} {
    display: inline;
    max-width: 48px;
    max-height: 48px;
    padding: 12px;
    box-sizing: border-box;
    cursor: pointer;
  }
`;

export const Container = styled.div`
  min-width: 385px;
  height: 670px;
  flex-shrink: 0;
  border-radius: 4px;
  background: #fff;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.16);

  @media ${BREAKPOINT.TABLET} {
    width: 100%;
    margin: auto;
    box-shadow: none;
    padding: 0px 16px 0px;
  }
`;
export const Title = styled.div`
  max-width: 98px;
  color: #262626;
  font-family: "Noto Sans TC";
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  padding-top: 24px;
  padding-left: 16px;

  @media ${BREAKPOINT.TABLET} {
    padding-left: 0px;
  }
`;

export const ImageBlock = styled.div`
  min-width: 500px;
  min-height: 507px;
  flex-shrink: 0;
  background: url("/onboarding_select_01.png"),
    #ffffff 0px 0px / 100% 100% no-repeat;

  @media ${BREAKPOINT.TABLET} {
    display: none;
  }
`;

export const Wrapper = styled.div`
  max-width: 1040px;
  display: flex;
  align-items: flex-start; /* Center items vertically */
  justify-content: space-between; /* Add space between the image and container */
  margin: auto;
  padding-top: 102px;
  padding-bottom: 188px;
  gap: 155px;

  @media ${BREAKPOINT.TABLET} {
    padding-top: 16px;
  }
`;

export const Split = styled.div`
  display: flex;
  min-width: 353px;
  min-height: 18px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  margin: 16px;

  &::before,
  &::after {
    content: "";
    flex: 1 1 0%;
    height: 1px;
    background-color: rgb(191, 191, 191);
  }

  @media ${BREAKPOINT.TABLET} {
    width: 100%;
    margin: 16px 0px;
  }
`;

export const Or = styled.div`
  margin: 0px 24px;
`;

export const RegisterNow = styled.span`
  max-width: 69px;
  color: #1ea1d6;
  font-family: "Noto Sans TC";
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const Service = styled.div`
  margin: 16px;
  max-width: 353px;
  color: var(--neutral-078-c-8-c-8-c, #8c8c8c);
  font-family: "Noto Sans TC";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 133.333% */

  @media ${BREAKPOINT.TABLET} {
    margin: 16px 0px;
    width: 100%;
  }
`;

export const ServiceRegulationBlue = styled.span`
  color: var(--primary-061-e-9-fd-2, #1e9fd2);
  font-family: "Noto Sans TC";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
`;

export const AccountCheck = styled.div`
  margin: 16px;
  display: flex;
  align-items: center;
  color: #595959;
  font-family: "PingFang TC";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */

  @media ${BREAKPOINT.TABLET} {
    margin: 16px 0px;
  }
`;
