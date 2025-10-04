"use client";

import { useWixClient } from "@/hooks/useWixClient";
import { LoginState } from "@wix/sdk";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

enum MODE {
  LOGIN="LOGIN",
  REGISTER="REGISTER",
  RESET_PASSWORD="RESET_PASSWORD",
  EMAIL_VERIFICATION="EMAIL_VERIFICATION"
}

const LoginPage = () => {
  const wixClient = useWixClient();
  const [mode,setMode] = useState(MODE.LOGIN);
  const pathName = window.location.href;
  const isLoggedIn = wixClient.auth.loggedIn();
  const router = useRouter(); 

  useEffect(()=>{
    if(isLoggedIn) {
      router.push("/");
    }
  }, [isLoggedIn]);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailCode, setEmailCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  

  const formTitle = 
    mode === MODE.LOGIN
      ? "Login"
      : mode === MODE.REGISTER
      ? "Register"
      : mode === MODE.RESET_PASSWORD
      ? "Reset your password"
      : "Verify your email";

  const buttonTitle = 
    mode === MODE.LOGIN
      ? "Login"
      : mode === MODE.REGISTER
      ? "Register"
      : mode === MODE.RESET_PASSWORD
      ? "Reset"
      : "Verify";

  const handleSubmit = async(e:React.FormEvent) => {
    e.preventDefault();

    setIsLoading(true);
    setError("");

    try {
      let res:any;
      switch(mode) {
        case MODE.LOGIN:
          res = await wixClient.auth.login({
            email,
            password
          });

          break;
        case MODE.REGISTER:
          res = await wixClient.auth.register({
            email,
            password,
            profile:{nickname:username}
          });

          break
        case MODE.RESET_PASSWORD:
          res = await wixClient.auth.sendPasswordResetEmail(
            email,
            pathName
          );
          setMessage("Passowrd reset email sent. Please check your email.")

          break
        case MODE.EMAIL_VERIFICATION:
          console.log('email code', emailCode);
          res = await wixClient.auth.processVerification({
            verificationCode:emailCode
          });

          break
        default:
          break;
      }
      console.log(res);

      switch (res?.loginState) {
        case LoginState.SUCCESS:
          setMessage("Succesful! You are being redirected.");

          const tokens = await wixClient.auth.getMemberTokensForDirectLogin(
            res.data.sessionToken!
          );
          
          Cookies.set("refreshToken", JSON.stringify(tokens.refreshToken), {expires:2}); 
          wixClient.auth.setTokens(tokens);
          router.push("/");

          break;
        case LoginState.EMAIL_VERIFICATION_REQUIRED:
          setMode(MODE.EMAIL_VERIFICATION);

          break;
        case LoginState.OWNER_APPROVAL_REQUIRED :
          setMessage("Your account is pending approval");

          break;
        case LoginState.FAILURE:
          if(
            res?.errorCode === "invalidEmail" ||
            res?.errorCode === "invalidPassword"
          ) {
            setError("Invalid email or password!");
          } else if (
            res?.errorCode === "emailAlreadyExists"
          ) {
            setError("Email already exists!")
          } else if (
            res?.errorCode === "resetPassword"
          ) {
            setError("You need to reset your password!")
          } else {
            setError("Something went wrong")
          }
          break;
        default: 
          break;
      }

    } catch (error) {
      console.error(error);
      setError("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="h-[calc(100vh-80px)] px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 flex items-center justify-center">
      <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
        <h1 className="text-2xl font-semibold">{formTitle}</h1>
        {mode === MODE.REGISTER ? (
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-700">Username</label>
            <input 
              type="text" 
              name="username" 
              placeholder="username" 
              className="ring-2 ring-gray-300 rounded-md p-4" 
              onChange={e=>setUsername(e.target.value)}
            />
          </div>
        ) : null }
        
        {mode !== MODE.EMAIL_VERIFICATION ? (
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-700">Email</label>
            <input 
              type="email" 
              name="email" 
              placeholder="john@email" 
              className="ring-2 ring-gray-300 rounded-md p-4" 
              onChange={e=>setEmail(e.target.value)}
            />
          </div>
        ) : (
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-700">Verification Code</label>
            <input 
              type="text" 
              name="emailCode" 
              placeholder="code" 
              className="ring-2 ring-gray-300 rounded-md p-4" 
              onChange={e=>setEmailCode(e.target.value)}
            />
          </div>
        )}
        
        {mode===MODE.LOGIN || mode === MODE.REGISTER ? (
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-700">Password </label>
            <input 
              type="password" 
              name="password" 
              placeholder="passenter your password" 
              className="ring-2 ring-gray-300 rounded-md p-4" 
              onChange={e=>setPassword(e.target.value)}
            />
          </div>
        ): null } 

        {mode === MODE.LOGIN && (
          <div className="text-sm underline cursor-pointer" onClick={()=>setMode(MODE.RESET_PASSWORD)}>Forgot Password?</div>
        )}

        <button          
          className="ring-1 rounded-md bg-primary text-white py-2
            hover:bg-primary hover:text-white 
            disabled:cursor-not-allowed disabled:bg-pink-200 disabled:text-color-white disabled:ring-none"
          disabled={isLoading}
        >
          {isLoading ? "loading..." : buttonTitle}
        </button>

        {error && (<div className="text-red-600">{error}</div>)}

        {mode === MODE.LOGIN ? (
          <div className="text-sm underline cursor-pointer" onClick={()=>setMode(MODE.REGISTER)}>{"Don't"} have an account</div>
        ) : null }

        {mode === MODE.REGISTER ? (
          <div className="text-sm underline cursor-pointer" onClick={()=>setMode(MODE.LOGIN)}>Have an account</div>
        ) : null }

        {mode === MODE.RESET_PASSWORD ? (
          <div className="text-sm underline cursor-pointer" onClick={()=>setMode(MODE.LOGIN)}>Go back to login</div>
        ) : null }

        {message && (
          <div className="text-green-600 text-sm">{message}</div>
        )}
        {/* <Link href="forgot">Forgot password </Link> */}
      </form>
    </div>
  )
};

export default LoginPage;