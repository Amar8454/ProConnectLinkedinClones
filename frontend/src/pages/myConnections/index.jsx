import {
  acceptConnectionRequest,
  myConnectionRequest,
} from "@/config/redux/action/authAction";
import DashboardLout from "@/layout/dashboarLayout/indexDash";
import UserLayout from "@/layout/userLayout";
import React, { useEffect } from "react";
import style from "./style.module.css";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "@/config";
import { useRouter } from "next/router";
import { connection } from "next/server";

const MyConnections = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(myConnectionRequest({ token: localStorage.getItem("token") }));
  }, []);

  useEffect(() => {
    if (authState.connectionsRequest.length != 0) {
    }
  }, [authState.connectionsRequest]);
  return (
    <UserLayout>
      <DashboardLout>
        <div
          style={{ display: "flex", flexDirection: "column", gap: "1.8rem" }}
        >
          <h4>Connections Request pending</h4>
          {authState.connectionsRequest.length === 0 && (
            <h4>No Connections </h4>
          )}
          {authState.connectionsRequest.length != 0 &&
            authState.connectionsRequest
              .filter((connection) => connection.status_accepted === null)
              .map((connection, index) => {
                return (
                  <div
                    key={index._id}
                    className={style.userCard}
                    onClick={() => {
                      router.push(`view_page/${connection.userId.username}`);
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "1.2rem",
                      }}
                    >
                      <div className={style.profilePicture}>
                        <img
                          src={`${BASE_URL}/${connection.userId.profilePicture}`}
                          alt=""
                        />
                      </div>
                      <div className={style.usreProfile}>
                        <p>{connection.userId.name} </p>
                        <p>{connection.userId.username} </p>
                      </div>

                      <button
                        className={style.accetpBtn}
                        onClick={(e) => {
                          e.stopPropagation();
                          dispatch(
                            acceptConnectionRequest({
                              connectionId: connection._id,
                              token: localStorage.getItem("token"),
                              action: "accept",
                            })
                          );
                        }}
                      >
                        accept
                      </button>
                    </div>
                  </div>
                );
              })}

          <div>
            <h4> My Network</h4>

            {authState.connectionsRequest.length != 0 &&
              authState.connectionsRequest
                .filter((connection) => connection.status_accepted !== null)
                .map((connection, index) => {
                  return (
                    <div
                      key={index._id}
                      className={style.userCard}
                      onClick={() => {
                        router.push(`view_page/${connection.userId.username}`);
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "1.2rem",
                        }}
                      >
                        <div className={style.profilePicture}>
                          <img
                            src={`${BASE_URL}/${connection.userId.profilePicture}`}
                            alt=""
                          />
                        </div>
                        <div className={style.usreProfile}>
                          <p>{connection.userId.name} </p>
                          <p>{connection.userId.username} </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
          </div>
        </div>
      </DashboardLout>
    </UserLayout>
  );
};

export default MyConnections;
