import styled from "styled-components";

export const FormLabel = styled.label`
  width: 353px;
  flex-shrink: 0;
  color: #595959;
  font-family: "PingFang TC";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */

  @media screen and (max-width: 1274px) {
    width: 100%;
  }
`;

export const Form = styled.form`
  position: relative;
  top: 114px;
  left: 16px;

  @media screen and (max-width: 1274px) {
    left: 0px;
  }
`;

export const FormInput = styled.input`
  width: 353px;
  height: 48px;
  flex-shrink: 0;

  @media screen and (max-width: 1274px) {
    width: 100%;
    position: relative;
    left: 0;
    margin: auto;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  width: 353px;
  height: 76px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 4px;
  flex-shrink: 0;

  @media screen and (max-width: 1274px) {
    width: 100%;
  }
`;

export const Reminder = styled.div`
  width: 288px;
  color: var(--neutral-078-c-8-c-8-c, #8c8c8c);
  font-family: "Noto Sans TC";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 133.333% */
  margin-bottom: 16px;
`;

export const ForgotPassword = styled.span`
  color: #1ea1d6;
  font-family: "Noto Sans TC";
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const Submit = styled.button`
  background: #1e9fd2;
  display: flex;
  width: 353px;
  height: 48px;
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

  @media screen and (max-width: 1274px) {
    width: 100%;
  }
`;
