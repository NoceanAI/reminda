import jwt_decode from "jwt-decode";
import axios from "axios";
const baseUrl =
  "https://qrla9r5xxi.execute-api.us-east-1.amazonaws.com/staging/";

const apiSignUp = baseUrl + "user/signup";
const apiCreateInterest = baseUrl + "core/create-interest";
const apiConfirmSignUp = baseUrl + "user/confirm-signup";
const apiResendCode = baseUrl + "user/resend-code";
const apiLogIn = baseUrl + "user/login";
const apiForgotPassword = baseUrl + "core/forgot-password";
const apiConfirmPassword = baseUrl + "core/confirm-forgot-password";
const apiGetRefreshToken = baseUrl + "core/refresh-token";

// decodeFunc
export const decodeJwt = (jwt) => {
  return jwt_decode(jwt);
};
export const registerUser = async (data) => {
  /***
   * {
    "first_name": "Olaniyi",
    "last_name": "ajayi",
    "user_name": "jarvis",
    "email": "ajayiolaniyi@gmail.com",
    "password": "Password123!"
}
   */
  try {
    return await axios.post(apiSignUp, {
      first_name: data.firstName,
      email: data.email,
      password: data.password,
    });
  } catch (error) {
    return error;
  }
};
export const loginUser = async (data) => {
  /**{
    "email_or_username": "jarvis",
    "password": "Password123!"
} */
  try {
    return await axios.post(apiLogIn, data);
  } catch (error) {
    return error;
  }
};
export const forgotPassword = async (data) => {
  /**{
    "email": "ajayiolaniyi@gmail.com"
} */
  try {
    return await axios.post(apiForgotPassword, data);
  } catch (error) {
    return error;
  }
};
export const confirmForgotPassword = async (data) => {
  /**{
    "email": "ajayiolaniyi@gmail.com",
    "code": "",
    "password": "Password123!!!"
}*/
  try {
    return await axios.post(apiConfirmPassword, data);
  } catch (error) {
    return error;
  }
};
export const confirmRegistration = async (data) => {
  /**
   * 
{
    "user_name": "jarvis",
    "code": "420061"
}
   */
  try {
    return await axios.post(apiConfirmSignUp, data);
  } catch (error) {
    return error;
  }
};
export const createInterest = async (data) => {
  /**{
    "sub": "f6a2cbee-1e0d-4b5d-b7a2-7ca9d899a3c1",
    "interests": [
        "comedy",
        "stand up"
    ]
} */
  try {
    return await axios.post(apiCreateInterest, data);
  } catch (error) {
    return error;
  }
};
// Resend Verification
export const resendVerificationOTP = async (data) => {
  /**{
    "email": "jarvis"
} */
  try {
    return await axios.post(apiResendCode, data);
  } catch (error) {
    return error;
  }
};
