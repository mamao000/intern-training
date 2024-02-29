import styled from "styled-components";

export const ProfileContainer = styled.div`
  width: 100%;
  height: 532px;
  padding: 32px 32px 80px 32px;
  display: flex;

  @media screen and (max-width: 992px) {
    padding: 0px;
  }
`;

export const UserProfile = styled.form`
  background-color: #ffffff;
  width: 100%;
  padding: 24px;
`;

export const Title = styled.div`
  align-self: stretch;
  color: var(--neutral-09262626, #262626);
  /* H4 / TW Noto Sans TC (700) 20px  */
  font-family: "Noto Sans TC";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px; /* 140% */
`;

export const FormNameContainer = styled.div`
  display: flex;
  width: 100%;
  height: 86px;
  gap: 16px;
`;

export const FormGroup = styled.div`
  width: 100%;
  margin-top: 16px;
  margin-bottom: 16px;
`;

export const FormLabel = styled.div`
  width: 100%;
  height: 20px;
  color: var(--neutral-078-c-8-c-8-c, #8c8c8c);
  align-self: stretch;
  /* P2 / EN Noto Sans (400) 14px */
  font-family: "Noto Sans";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
`;

export const FormInput = styled.input`
  width: 100%;
  display: flex;
  height: 40px;
  padding: 10px 8px;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
  border-radius: 4px;
  border: 1px solid var(--neutral-06-bfbfbf, #bfbfbf);
  background: var(--neutral-01-ffffff, #fff);

  &::placeholder {
    /* Font styles */
    font-family: "Noto Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 142.857% */

    /* Placeholder color */
    color: var(--neutral-06-bfbfbf, #bfbfbf);
  }
`;

export const Submit = styled.button`
  width: 100%;
  display: flex;
  padding: 12px 24px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  flex: 1 0 0;
  border-radius: 4px;
  opacity: 0.48;
  background: var(--primary-061-e-9-fd-2, #1e9fd2);
  border: none;
`;

export const EmailInput = styled(FormInput)`
  border-radius: 4px;
  border: 1px solid var(--neutral-06-bfbfbf, #bfbfbf);
  background: var(--neutral-04-e-8-e-8-e-8, #e8e8e8);
`;

export const FormSelect = styled.select`
  width: auto;
  height: 40px;
  border: none;
`;

export const FormPhone = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  border: 1px solid var(--neutral-06-bfbfbf, #bfbfbf);
  background: var(--neutral-01-ffffff, #fff);
`;

export const FormPhoneInput = styled(FormInput)`
  border: none;
`;
