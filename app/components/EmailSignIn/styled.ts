import styled from "styled-components";
import { BREAKPOINT } from "@/app/constants";

export const FormLabel = styled.label`
  min-width: 353px;
  flex-shrink: 0;
  color: #595959;
  font-family: "PingFang TC";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */

  @media ${BREAKPOINT.CONTAIN} {
    width: 100%;
  }
`;

export const Form = styled.form`
  margin: 16px;

  @media ${BREAKPOINT.CONTAIN} {
    margin: 16px 0px;
  }
`;

export const FormInput = styled.input`
  min-width: 353px;
  height: 48px;
  flex-shrink: 0;

  @media ${BREAKPOINT.CONTAIN} {
    width: 100%;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  min-width: 353px;
  height: 76px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 4px;
  flex-shrink: 0;

  @media ${BREAKPOINT.CONTAIN} {
    width: 100%;
  }
`;

export const Reminder = styled.div`
  max-width: 288px;
  color: var(--neutral-078-c-8-c-8-c, #8c8c8c);
  font-family: "Noto Sans TC";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 133.333% */
  margin-bottom: 16px;
`;

export const ForgotPassword = styled.div`
  color: #1ea1d6;
  font-family: "Noto Sans TC";
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 16px 0px;
`;

export const Submit = styled.button`
  background: #1e9fd2;
  display: flex;
  min-width: 353px;
  min-height: 48px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  color: #fff;
  text-align: center;
  font-family: "Noto Sans TC";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
  border: none;
  margin-top: 6px;

  @media ${BREAKPOINT.CONTAIN} {
    width: 100%;
  }
`;

export const KeepLogin = styled.div`
  max-width: 320px;
  height: 56px;
  flex-shrink: 0;
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 8px;

  @media ${BREAKPOINT.CONTAIN} {
    width: 100%;
    justify-content: flex-start;
  }
`;

export const KeepLoginText = styled.span`
  max-width: 256px;
  color: #595959;
  font-family: "PingFang TC";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 171.429% */

  @media ${BREAKPOINT.CONTAIN} {
    width: 100%;
  }
`;
