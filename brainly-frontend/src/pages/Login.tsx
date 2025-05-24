import { InputBox } from "../components/InputBox";
import { EmailIcon } from "../icons/EmailIcon";
import { OpeneyeIcon } from "../icons/OpeneyeIcon";
import { Logo } from "../icons/Logo";
import { FingerIcon } from "../icons/FingerIcon";
import { Button } from "../components/Button";
import { useState } from "react";
import { ClosedeyeIcon } from "../icons/ClosedeyeIcon";
import { AppleIcon } from "../icons/AppleIcons";
import { XIcon } from "../icons/XIcon";
import { GoogleIcon } from "../icons/GoogleIcon";
import { useRef } from "react";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function Login() {
    const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const [showPassword, setShowpassword] = useState(true);
  const [isLogin, setIslogin] = useState(false);


  const submitHandler = async () => {
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;
    try {
      if (!isLogin) {
        //signup

        const response = await axios.post(`${BACKEND_URL}/api/v1/signup`, {
          username,
          password,
        });
      if (response.status === 200) {
        // navigate only on success
        navigate("/dashboard");
      }
        navigate("/dashboard");
      } else {
        //login
        const response = await axios.post(`${BACKEND_URL}/api/v1/signin`, {
          username,
          password,
        });

        const jwt = response.data.token;
        localStorage.setItem("token", jwt);
        navigate("/dashboard");
      }
    } catch (error) {
      console.log(error)
    }
  };

  const togglePassword = () => {
    setShowpassword(!showPassword);
  };

  const toggleLogin = () => {
    setIslogin(!isLogin);
  };
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-300">
      <div className="w-[90%] max-w-sm p-4 bg-gray-400 flex-col flex items-center gap-3 rounded-xl shadow-slate-600 shadow-lg">
        <span className="text-purple-600">
          <Logo />
        </span>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-lg md:text-xl font-semibold">Welcome Back</h1>
          <p className="text-xs md:text-sm text-center">
            {isLogin ? "Don't have an account?" : "Already have account?"}{" "}
            <span
              onClick={toggleLogin}
              className="text-purple-600 font-semibold cursor-pointer underline hover:text-purple-700"
            >
              {isLogin ? "Sign Up" : "Sign In"}
            </span>
          </p>
        </div>

        <div className="w-full flex flex-col gap-3">
          <div className="w-full flex items-center bg-gray-300 p-2 rounded-xl gap-2">
            <span className="text-gray-800 pt-1">
              <EmailIcon />
            </span>
            <div className="flex-1">
              <InputBox
                reference={usernameRef}
                type="email"
                placeholder="example@gmail.com"
              />
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col gap-3">
          <div className="w-full flex items-center bg-gray-300 p-2 rounded-xl gap-2">
            <span className="text-gray-800 pt-1">
              <FingerIcon />
            </span>
            <div className="flex-1">
              <InputBox
                reference={passwordRef}
                type={showPassword ? "password" : "text"}
                placeholder="example@gmail.com"
              />
            </div>
            <span className="text-gray-800 pt-1 cursor-pointer">
              {showPassword ? (
                <OpeneyeIcon onClick={togglePassword} />
              ) : (
                <ClosedeyeIcon onClick={togglePassword} />
              )}
            </span>
          </div>
        </div>
        <Button
          varient="primary"
          text={isLogin ? "Sign In" : "Sign Up"}
          fullWidth={true}
          onClick={submitHandler}
        />

        <div className="relative w-full flex items-center justify-center pt-3">
          <div className="w-2/3 h-[2px] bg-gray-900"></div>
          <h3 className="text-xs md:text-sm px-4 text-gray-800">Or</h3>
          <div className="w-2/3 h-[2px] bg-gray-900"></div>
        </div>

        <div className="relative w-full flex items-center justify-between py-3">
          <div className="p-2 md:px-10 bg-slate-300 cursor-pointer rounded-xl hover:bg-purple-700">
            <AppleIcon />
          </div>

          <div className="p-2 md:px-10 bg-slate-300 cursor-pointer rounded-xl hover:bg-purple-700">
            <GoogleIcon />
          </div>

          <div className="p-2 md:px-10 bg-slate-300 cursor-pointer rounded-xl hover:bg-purple-700">
            <XIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
