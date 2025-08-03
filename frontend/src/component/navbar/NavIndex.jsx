import React from "react";
import style from "../navbar/Style.module.css";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const NavbarIndex = () => {
  const router = useRouter();
  const authState = useSelector((state) => state.auth);
  return (
    <>
      <div className={style.container}>
        <div className={style.navbar}>
          <div className={style.navLeft}>
            <div
              onClick={() => {
                router.push("/");
              }}
              className={style.joinHome}
            >
              Pro Connect
            </div>
          </div>

          <div>
            <div className={style.navRight}>
              {!authState.profileFetch && (
                <div
                  onClick={() => {
                    router.push("/login");
                  }}
                  className={style.joinButton}
                >
                  <p>Be a part</p>
                </div>
              )}
            </div>

            {authState.profileFetch && (
              <div
                onClick={() => {}}
                style={{ display: "flex", gap: " 1.4rem" }}
              >
                {/* <p> Hey, {authState.user.userId.name} </p> */}
                <p
                  style={{ fontWeight: "bold", cursor: "pointer" }}
                  onClick={() => {
                    router.push("/profile");
                  }}
                >
                  Profile
                </p>
                <p
                  style={{ fontWeight: "bold", cursor: "pointer" }}
                  onClick={() => {
                    localStorage.removeItem("token");
                    router.push("/login");
                  }}
                >
                  Log Out
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarIndex;
