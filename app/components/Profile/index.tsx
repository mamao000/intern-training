import React, { useState } from "react";
import { useEffect } from "react";
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

  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const storedUserProfile = JSON.parse(
      localStorage.getItem("userProfile") || "null"
    );
    if (storedUserProfile) {
      setUserProfile(storedUserProfile);
      validateForm();
    }
  }, []);

  useEffect(() => {
    validateForm();
  }, [userProfile]);

  const validateForm = () => {
    setIsValid(
      userProfile.first_name !== "" &&
        userProfile.last_name !== "" &&
        userProfile.phone !== "" &&
        userProfile.email !== "" &&
        isValidEmail(userProfile.email) &&
        isValidPhone(userProfile.phone)
    );
  };

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidPhone = (phone: string) => {
    const phoneRegex = /^09\d{8}$/;
    return phoneRegex.test(phone);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    localStorage.setItem("userProfile", JSON.stringify(userProfile));
  };

  return (
    <ProfileContainer>
      <UserProfile onSubmit={handleSubmit}>
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
                validateForm();
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
                validateForm();
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
            type="text"
            value={userProfile.email}
            onChange={({ target }) => {
              setUserProfile({ ...userProfile, email: target.value });
              validateForm();
            }}
            required
          />
        </FormGroup>
        <Submit type="submit" isValid={isValid} disabled={!isValid}>
          儲存
        </Submit>
      </UserProfile>
    </ProfileContainer>
  );
};

export default Profile;