import React, { useState } from "react";
import {
  ProfileContainer,
  UserProfile,
  Title,
  FormNameContainer,
  FormGroup,
  FormInput,
  FormLabel,
  Submit,
  EmailInput,
  FormPhone,
  FormSelect,
  FormPhoneInput,
} from "./styled";

const Profile = () => {
  const [userProfile, setUserProfile] = useState({
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
  });
  return (
    <ProfileContainer>
      <UserProfile>
        <Title>個人資訊</Title>
        <FormNameContainer>
          <FormGroup>
            <FormLabel>姓氏</FormLabel>
            <FormInput
              placeholder="請輸入您的姓氏"
              type="text"
              value={userProfile.first_name}
              onChange={({ target }) => {
                setUserProfile({ ...userProfile, first_name: target.value });
              }}
              required
            />
          </FormGroup>
          <FormGroup>
            <FormLabel>名字</FormLabel>
            <FormInput
              placeholder="請輸入您的名字"
              type="text"
              value={userProfile.last_name}
              onChange={({ target }) => {
                setUserProfile({ ...userProfile, last_name: target.value });
              }}
              required
            />
          </FormGroup>
        </FormNameContainer>
        <FormGroup>
          <FormLabel>電話</FormLabel>
          <FormPhone>
            <FormSelect>
              <option value="886">+886</option>
              <option value="885">+885</option>
            </FormSelect>
            <FormPhoneInput
              type="text"
              value={userProfile.phone}
              onChange={({ target }) => {
                setUserProfile({ ...userProfile, phone: target.value });
              }}
              required
            />
          </FormPhone>
        </FormGroup>
        <FormGroup>
          <FormLabel>電子郵件</FormLabel>
          <EmailInput
            placeholder="testjp@gmail.com"
            type="text"
            value={userProfile.email}
            onChange={({ target }) => {
              setUserProfile({ ...userProfile, email: target.value });
            }}
            required
          />
        </FormGroup>
        <Submit type="submit">儲存</Submit>
      </UserProfile>
    </ProfileContainer>
  );
};

export default Profile;
