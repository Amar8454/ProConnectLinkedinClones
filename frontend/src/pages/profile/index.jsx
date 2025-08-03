import React, { useEffect, useState } from "react";
import style from "./style.module.css";
import DashboardLout from "@/layout/dashboarLayout/indexDash";
import UserLayout from "@/layout/userLayout";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL, clientServer } from "@/config";
import { getAllPost } from "@/config/redux/action/postAction";
import { getUserProfile } from "@/config/redux/action/authAction";
import { resetPost } from "@/config/redux/reducer/postReducer";

const ProfilePage = () => {
  const authState = useSelector((state) => state.auth);
  const postState = useSelector((state) => state.postReducer);
  const dispatch = useDispatch();

  const [userProfile, setUserProfile] = useState({});
  const [userPost, setUserPost] = useState([]);
  const [isModalWork, setIsModalWork] = useState(false);
  const [isModalEducation, setIsModalEducation] = useState(false);
  const [EducationInput, setEducationInput] = useState({
    school: "",
    degree: "",
    fieldOfStudy: "",
  });
  const [InputChange, setInputChange] = useState({
    company: "",
    position: "",
    years: "",
  });

  useEffect(() => {
    dispatch(getUserProfile({ token: localStorage.getItem("token") }));
    dispatch(getAllPost());
  }, []);

  useEffect(() => {
    if (authState.user != undefined) {
      setUserProfile(authState.user);

      const post = postState.post.filter((post) => {
        return post.userId.username === authState.user.userId.username;
      });
      setUserPost(post);
    }
  }, [authState.user, postState.pos]);

  const updateProfilePic = async (file) => {
    const formData = new FormData();
    formData.append("profilePicture", file);
    formData.append("token", localStorage.getItem("token"));

    const response = await clientServer.post("/updateProfilePic", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  };

  const handleUpdataProfileData = async () => {
    const request = await clientServer.post("/userUpdate", {
      token: localStorage.getItem("token"),
      name: userProfile.userId.name,
    });

    const response = await clientServer.post("/updateProfileData", {
      token: localStorage.getItem("token"),
      bio: userProfile.bio,
      currentPost: userProfile.currentPost,
      pastWork: userProfile.pastWork,
      education: userProfile.education,
    });

    dispatch(getUserProfile({ token: localStorage.getItem("token") }));
  };

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setInputChange({ ...InputChange, [name]: value });
  };

  const handleEducationInput = (e) => {
    const { name, value } = e.target;
    setEducationInput({ ...EducationInput, [name]: value });
  };
  return (
    <UserLayout>
      <DashboardLout>
        {authState.user && userProfile.userId && (
          <div className={style.container}>
            <div className={style.backDropContianer}>
              <label
                htmlFor="profilePicUpload"
                className={style.backDrop_overlay}
              >
                <p>Edit</p>
              </label>
              <input
                onChange={(e) => {
                  updateProfilePic(e.target.files[0]);
                }}
                hidden
                type="file"
                id="profilePicUpload"
              />
              <img
                src={`${BASE_URL}/${userProfile.userId.profilePicture}`}
                className={style.backDrop}
              />
            </div>
            <div className={style.profileContianer_details}>
              <div className={style.profileContiane_flex}>
                <div style={{ flex: " 0.7" }}>
                  <div
                    style={{
                      display: "flex",
                      width: "fit-content",
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <input
                        className={style.userNameEdit}
                        type="text"
                        value={userProfile.userId.name}
                        onChange={(e) => {
                          setUserProfile({
                            ...userProfile,
                            userId: {
                              ...userProfile.userId,
                              name: e.target.value,
                            },
                          });
                        }}
                      />
                    </div>
                    <p style={{ color: "gray", marginLeft: " 0.5rem" }}>
                      @{userProfile.userId.username}{" "}
                    </p>
                  </div>

                  <div>
                    <h4 style={{ marginLeft: "10px" }}>About</h4>
                    <textarea
                      className={style.bio}
                      value={userProfile.bio}
                      rows={Math.max(
                        3,
                        Math.ceil(userProfile.bio.length / 100)
                      )}
                      style={{ width: " 100%" }}
                      onChange={(e) => {
                        setUserProfile({ ...userProfile, bio: e.target.value });
                      }}
                    />
                  </div>

                  <div className="workHistory">
                    <h3 style={{ marginTop: " 2rem" }}>Work History :-</h3>

                    <div className={style.workHistoryPage}>
                      {userProfile.pastWork.map((work, index) => {
                        return (
                          <div className={style.workHistoryCard} key={work._id}>
                            <p>{work.company}</p>
                            <p>{work.position}</p>
                            <p>{work.years} </p>
                          </div>
                        );
                      })}
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <button
                          onClick={() => {
                            setIsModalWork(true);
                          }}
                          className={style.AddWorkBtn}
                        >
                          Add Work
                        </button>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 style={{ marginTop: "2rem" }}>CurrentPost:-</h4>
                    <div>
                      <input
                        type="text"
                        value={userProfile.currentPost}
                        onChange={(e) =>
                          setUserProfile({
                            ...userProfile,
                            currentPost: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>

                  <div>
                    <h3 style={{ marginTop: "2rem" }}>Education:-</h3>
                    <div className={style.workHistoryPage}>
                      {userProfile.education.map((educations, index) => {
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

                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <button
                          onClick={() => {
                            setIsModalEducation(true);
                          }}
                          className={style.AddWorkBtn}
                        >
                          Add Education
                        </button>
                      </div>
                    </div>
                  </div>

                  {userProfile != authState.user && (
                    <button
                      className={style.updateBtn}
                      onClick={() => {
                        handleUpdataProfileData();
                      }}
                    >
                      Update
                    </button>
                  )}
                </div>

                <div style={{ flex: "0.3" }}>
                  <div>
                    <h4>Recent Activity</h4>
                    {userPost.map((post, index) => {
                      return (
                        <div key={post._id} className={style.postCard}>
                          <div className={style.card}>
                            <div className={style.card_ProfileContainer}>
                              <img src={`${BASE_URL}/${post.media}`} alt="" />
                            </div>

                            <div>
                              <p>{post.body}</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {isModalWork && (
          <div
            className={style.commentContainer}
            onClick={() => {
              setIsModalWork(false);
            }}
          >
            <div
              className={style.allComment}
              onClick={(e) => e.stopPropagation()}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.2rem",
                }}
              >
                <input
                  name="company"
                  onChange={handleChangeInput}
                  className={style.inputField}
                  type="text"
                  placeholder="Enter Company"
                />

                <input
                  name="position"
                  onChange={handleChangeInput}
                  className={style.inputField}
                  type="text"
                  placeholder="Enter Position"
                />

                <input
                  name="years"
                  onChange={handleChangeInput}
                  className={style.inputField}
                  type="text"
                  placeholder="Enter Years"
                />

                <div
                  className={style.updateAddBtn}
                  onClick={() => {
                    setUserProfile({
                      ...userProfile,
                      pastWork: [...userProfile.pastWork, InputChange],
                    });
                    setIsModalWork(false);
                  }}
                >
                  Add Work
                </div>
              </div>
            </div>
          </div>
        )}

        {isModalEducation && (
          <div
            className={style.commentContainer}
            onClick={() => {
              setIsModalEducation(false);
            }}
          >
            <div
              className={style.allComment}
              onClick={(e) => e.stopPropagation()}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.2rem",
                }}
              >
                <input
                  name="school"
                  onChange={handleEducationInput}
                  className={style.inputField}
                  type="text"
                  placeholder="Enter School"
                />

                <input
                  name="degree"
                  onChange={handleEducationInput}
                  className={style.inputField}
                  type="text"
                  placeholder="Enter Degree"
                />

                <input
                  name="fieldOfStudy"
                  onChange={handleEducationInput}
                  className={style.inputField}
                  type="text"
                  placeholder="Enter FieldOfStudy"
                />

                <div
                  className={style.updateAddBtn}
                  onClick={() => {
                    setUserProfile({
                      ...userProfile,
                      education: [...userProfile.education, EducationInput],
                    });
                    setIsModalEducation(false);
                  }}
                >
                  Add Education
                </div>
              </div>
            </div>
          </div>
        )}
      </DashboardLout>
    </UserLayout>
  );
};

export default ProfilePage;
