import { BASE_URL, clientServer } from "@/config";
import DashboardLout from "@/layout/dashboarLayout/indexDash";
import UserLayout from "@/layout/userLayout";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import style from "./style.module.css";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { getAllPost } from "@/config/redux/action/postAction";
import {
  getConnectionRequest,
  myConnectionRequest,
  sendConnectionRequest,
} from "@/config/redux/action/authAction";

const ServerSideRendring = ({ response }) => {
  const searchParams = useSearchParams();

  const [UserPost, setUserPost] = useState([]);
  const [isConnection, setIsConnections] = useState(false);
  const [isConnectionNull, setisConnectionNull] = useState(true);

  const authState = useSelector((state) => state.auth);
  const postState = useSelector((state) => state.postReducer);
  const router = useRouter();
  const dispatch = useDispatch();

  const getPostUser = async () => {
    await dispatch(getAllPost());
    await dispatch(
      getConnectionRequest({ token: localStorage.getItem("token") })
    );
    await dispatch(
      myConnectionRequest({ token: localStorage.getItem("token") })
    );
  };

  useEffect(() => {
    const post = postState.post.filter((post) => {
      return post.userId.username === router.query.username;
    });
    setUserPost(post);
  }, [postState.post]);

  useEffect(() => {
    if (
      authState.connections.some(
        (user) => user.connectionId._id === response.userId._id
      )
    ) {
      setIsConnections(true);
      if (
        authState.connections.find(
          (user) => user.connectionId._id === response.userId._id
        ).status_accepted === true
      ) {
        setisConnectionNull(false);
      }
    }

    if (
      authState.connectionsRequest.some(
        (user) => user.userId._id === response.userId._id
      )
    ) {
      setIsConnections(true);
      if (
        authState.connectionsRequest.find(
          (user) => user.userId._id === response.userId._id
        ).status_accepted === true
      ) {
        setisConnectionNull(false);
      }
    }
  }, [authState.connections, authState.connectionsRequest]);

  useEffect(() => {
    getPostUser();
  }, []);

  return (
    <UserLayout>
      <DashboardLout>
        <div className={style.contianer}>
          <div className={style.backDropContianer}>
            <img src={`${BASE_URL}/${response.userId.profilePicture}`} alt="" />
          </div>

          <div className={style.profileContianer_details}>
            <div className={style.profileContianer_data}>
              <div style={{ flex: "0.7" }}>
                <div
                  style={{
                    display: "flex",
                    width: "fit-content",
                    alignItems: "center",
                  }}
                >
                  <h4>{response.userId.name} </h4>
                  <p style={{ color: "gray", marginLeft: " 0.5rem" }}>
                    @{response.userId.username}{" "}
                  </p>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: " 1.3rem",
                  }}
                >
                  {isConnection ? (
                    <button className={style.connectedBtn}>
                      {isConnectionNull ? "pending" : "Connected"}
                    </button>
                  ) : (
                    <button
                      onClick={async () => {
                        await dispatch(
                          sendConnectionRequest({
                            token: localStorage.getItem("token"),
                            user_id: response.userId._id,
                          })
                        );
                      }}
                      className={style.connectBtn}
                    >
                      Connect
                    </button>
                  )}

                  <div
                    style={{ cursor: "pointer" }}
                    onClick={async () => {
                      const resume = await clientServer.get(
                        `/downloadResumePdf?id=${response.userId._id}`
                      );
                      window.open(
                        `${BASE_URL}/${resume.data.message}`,
                        "_blank"
                      );
                    }}
                  >
                    <svg
                      style={{ width: " 1.3rem" }}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                      />
                    </svg>
                  </div>
                </div>

                <div>
                  <h4>About</h4>
                  <p style={{ marginTop: "0.8rem" }}>{response.bio} </p>
                </div>

                <div className="workHistory">
                  <h3>work History :-</h3>

                  <div className={style.workHistoryPage}>
                    {response.pastWork.map((work, index) => {
                      return (
                        <div className={style.workHistoryCard} key={work._id}>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: " 0.8rem",
                              marginLeft: "0.5rem",
                            }}
                          >
                            <div>
                              <p> {work.company}</p>
                              <p>{work.position} </p>
                              <p>{work.years} </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <h3 style={{ marginTop: "2rem" }}>Education:-</h3>
                  <div className={style.workHistoryPage}>
                    {response.education.map((educations, index) => {
                      return (
                        <div
                          className={style.workHistoryCard}
                          key={educations._id}
                        >
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: " 0.8rem",
                              marginLeft: "0.5rem",
                            }}
                          >
                            <div>
                              <p> {educations.school}</p>
                              <p>{educations.degree} </p>
                              <p>{educations.fieldOfStudy} </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div style={{ flex: "0.3" }}>
                <h4> Recent Activity</h4>
                {UserPost.map((post) => {
                  return (
                    <div key={post._id} className={style.postCard}>
                      <div className={style.card}>
                        <div className={style.card_ProfileContainer}>
                          {post.media !== "" ? (
                            <img src={`${BASE_URL}/${post.media}`} alt="" />
                          ) : (
                            <div
                              style={{ width: "3.4rem", height: " 3.4rem" }}
                            ></div>
                          )}
                        </div>
                        <p>{post.body} </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </DashboardLout>
    </UserLayout>
  );
};

export default ServerSideRendring;

export const getServerSideProps = async (context) => {
  try {
    const request = await clientServer.get("/getUserProfileByUsername", {
      params: {
        username: context.query.username,
      },
    });
    const response = await request.data;
    return { props: { response: request.data.profile } };
  } catch (err) {
    return { props: { response: null } };
  }
};
