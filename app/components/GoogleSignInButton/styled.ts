import styled from "styled-components";
import { BREAKPOINT } from "@/app/constants";

export const SignInButton = styled.button`
  width: 100%;
  max-width: 353px;
  min-height: 48px;
  flex-shrink: 0;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 16px;
  border: none;

  @media ${BREAKPOINT.CONTAIN} {
    max-width: 1274px;
    margin: 16px 0px;
  }
`;
