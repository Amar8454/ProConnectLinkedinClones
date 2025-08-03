import {
  getAllUserProfileData,
  getUserProfile,
} from "@/config/redux/action/authAction";
import {
  createPost,
  deletePost,
  getAllComment,
  getAllPost,
  increamentLikes,
  postComments,
} from "@/config/redux/action/postAction";
import style from "./style.module.css";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserLayout from "@/layout/userLayout";
import DashboardLout from "@/layout/dashboarLayout/indexDash";
import { BASE_URL } from "@/config";
import { reset, resetPost } from "@/config/redux/reducer/postReducer";

const DashboardComponent = () => {
  const [postContent, setPostContent] = useState("");
  const [fileContent, setFileContent] = useState();
  const [postComment, setPostComment] = useState("");

  const router = useRouter();
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);
  const postState = useSelector((state) => state.postReducer);

  const handlUploadfile = async () => {
    await dispatch(createPost({ file: fileContent, body: postContent }));
    setFileContent(null);
    setPostContent("");
    dispatch(getAllPost());
  };

  useEffect(() => {
    if (authState.isTokenThere) {
      dispatch(getAllPost());
      dispatch(getUserProfile({ token: localStorage.getItem("token") }));
    }
    if (!authState.getAllUserProfileData) {
      dispatch(getAllUserProfileData());
    }
  }, [authState.isTokenThere]);

  if (authState.user.length != 0) {
  }

  if (authState.profileFetch) {
    return (
      <UserLayout>
        <DashboardLout>
          <div className={style.scrollComponent}>
            <div className={style.wrraper}>
              <div className={style.createPostController}>
                <img
                  src={`${BASE_URL}/${
                    authState.profileFetch &&
                    authState.user.userId.profilePicture
                  }`}
                  width={150}
                  className={style.ProfileImage}
                />
                <textarea
                  onChange={(e) => setPostContent(e.target.value)}
                  value={postContent}
                  className={style.textareaCompo}
                  placeholder="What's in your mind ?"
                  name=""
                  id=""
                ></textarea>

                <label htmlFor="fileUpload">
                  <div className={style.svgPlus}>
                    <svg
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
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                  </div>
                </label>

                <input
                  onChange={(e) => setFileContent(e.target.files[0])}
                  type="file"
                  hidden
                  id="fileUpload"
                />
                {postContent.length > 0 && (
                  <div className={style.uploadBtn} onClick={handlUploadfile}>
                    Post
                  </div>
                )}
              </div>

              <div className={style.CardContainer}>
                {postState.post.map((post) => {
                  return (
                    <div key={post._id} className={style.singleCard}>
                      <div className={style.singleCard_container}>
                        <img
                          src={`${BASE_URL}/${
                            authState.profileFetch &&
                            post.userId.profilePicture
                          }`}
                          width={150}
                          className={style.userProfile}
                        />
                        <div>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <p style={{ fontWeight: "bold" }}>
                              {post.userId.name}
                            </p>
                            {post.userId._id ===
                              (authState.profileFetch &&
                                authState.user.userId._id) && (
                              <div
                                onClick={async () => {
                                  await dispatch(
                                    deletePost({ post_id: post._id })
                                  );
                                  await dispatch(getAllPost());
                                }}
                              >
                                <svg
                                  style={{
                                    height: " 20px",
                                    color: "red",
                                    cursor: "pointer",
                                  }}
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
                                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                                  />
                                </svg>
                              </div>
                            )}
                          </div>

                          <p style={{ color: "gray" }}>
                            @{post.userId.username}
                          </p>
                          <p style={{ paddingTop: " 1.2rem" }}>{post.body} </p>

                          <div className={style.singleCard_Image}>
                            {post.media !== " " ? (
                              <img src={`${BASE_URL}/${post.media}`} />
                            ) : (
                              ""
                            )}
                          </div>

                          <div className={style.optionContainer}>
                            <div
                              className={style.singleOptionContainer}
                              onClick={async () => {
                                await dispatch(
                                  increamentLikes({ post_id: post._id })
                                );
                                await dispatch(getAllPost());
                              }}
                            >
                              <svg
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
                                  d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
                                />
                              </svg>

                              <p>{post.likes} </p>
                            </div>

                            <div
                              className={style.singleOptionContainer}
                              onClick={async () => {
                                await dispatch(
                                  getAllComment({ post_id: post._id })
                                );
                                await dispatch(getAllPost());
                              }}
                            >
                              <svg
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
                                  d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                                />
                              </svg>
                            </div>
                            <div
                              className={style.singleOptionContainer}
                              onClick={() => {
                                const text = encodeURIComponent(post.body);
                                const uri =
                                  encodeURIComponent("apnacollege.in");
                                const twitterUrl = `'https://twitter.com/intent/tweet?text=${text}&uri=${uri}`;
                                window.open(twitterUrl, "_blank");
                              }}
                            >
                              <svg
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
                                  d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          {postState.postId !== "" && (
            <div
              className={style.commentContainer}
              onClick={() => {
                dispatch(resetPost());
              }}
            >
              <div
                className={style.allComment}
                onClick={(e) => e.stopPropagation()}
              >
                {postState.comments.length === 0 && <h3>No Comment</h3>}

                {postState.comments.length !== 0 && (
                  <div>
                    {postState.comments.map((comment, index) => {
                      return (
                        <div key={index} style={{ marginTop: "0.5rem" }}>
                          <p style={{ fontWeight: "bold" }}>
                            {comment.userId.name}{" "}
                          </p>
                          <p>@{comment.userId.username}</p>
                          <p> {comment.body} </p>
                        </div>
                      );
                    })}
                  </div>
                )}

                <div className={style.postCommentContainer}>
                  <input
                    type="text"
                    placeholder="comment here.."
                    value={postComment}
                    onChange={(e) => setPostComment(e.target.value)}
                  />
                  <div
                    className={style.commentBtn}
                    onClick={async () => {
                      await dispatch(
                        postComments({
                          post_id: postState.postId,
                          body: postComment,
                        }),
                        setPostComment("")
                      );
                      await dispatch(
                        getAllComment({ post_id: postState.postId })
                      );
                    }}
                  >
                    <p>Comment</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </DashboardLout>
      </UserLayout>
    );
  } else {
    return (
      <UserLayout>
        <DashboardLout>
          <h1>Loading....</h1>
        </DashboardLout>
      </UserLayout>
    );
  }
};

export default DashboardComponent;
