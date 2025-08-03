import React, { useEffect, useState } from "react";
import UserLayout from "../../layout/userLayout";
import style from "../login/style.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { loginUser, registerUser } from "@/config/redux/action/authAction";
import { emptyMessage } from "@/config/redux/reducer/authReducer";

const loginComponent = () => {
  const [isLoginMethod, setIsLoginMethod] = useState(false);

  const authState = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (authState.isloggdIn) {
      router.push("/dashboard");
    }
  }, [authState.isloggdIn]);

  useEffect(()=>{
    if(localStorage.getItem("token")){
      router.push("/dashboard")
    }
  })
  useEffect(() => {
    dispatch(emptyMessage());
  }, [isLoginMethod]);

  const handleRegisterButton = () => {
    dispatch(registerUser({ username, name, email, password }));
  };

  const handleLoginButton = () => {
    console.log("login")
    dispatch(loginUser({email , password}));
  };
  return (
    <UserLayout>
      <div className={style.container}>
        <div className={style.cardContainer}>
          <div className={style.cardContainerLeft}>
            <p className={style.cardheading}>
              {isLoginMethod ? "Sign In" : "Sign Up"}
            </p>
            <p style={{ color: authState.isError ? "red" : "green" }}>
              {authState.message.message}
            </p>
            <div className={style.inputContainer}>
              {!isLoginMethod && (
                <div className={style.inputFieldRow}>
                  <input
                    onChange={(e) => setUsername(e.target.value)}
                    className={style.inputField}
                    type="text"
                    placeholder="Username"
                  />
                  <input
                    onChange={(e) => setName(e.target.value)}
                    className={style.inputField}
                    type="text"
                    placeholder="Name"
                  />
                </div>
              )}

              <input
                onChange={(e) => setEmail(e.target.value)}
                className={style.inputField}
                type="text"
                placeholder="Email"
              />
              <input
                onChange={(e) => setPassword(e.target.value)}
                className={style.inputField}
                type="text"
                placeholder="Password"
              />

              <div className={style.SignButton}>
                <p
                  onClick={() => {
                    if (isLoginMethod) {
                      handleLoginButton();
                    } else {
                      handleRegisterButton();
                    }
                  }}
                >
                  {isLoginMethod ? "Sign In" : "Sign Up"}
                </p>
              </div>
            </div>
          </div>

          <div className={style.cardContainerRight}>
            {!isLoginMethod ? (
              <p>Don't have an Account</p>
            ) : (
              <p>Already Have an Account</p>
            )}

            <div className={style.SignButton}>
              <p
                onClick={() => {
                  setIsLoginMethod(!isLoginMethod);
                }}
                style={{ textAlign: "center", color: "black" }}
              >
                {isLoginMethod ? "Sign Up" : "Sign In"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </UserLayout>
  );
};

export default loginComponent;
