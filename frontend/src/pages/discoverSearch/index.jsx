import { BASE_URL } from "@/config";
import {
  getAllUserProfileData,
  getUserProfile,
} from "@/config/redux/action/authAction";
import DashboardLout from "@/layout/dashboarLayout/indexDash";
import UserLayout from "@/layout/userLayout";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import style from "./style.module.css";
import { useDispatch, useSelector } from "react-redux";

const discoverSearch = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);

  useEffect(() => {
    if (!authState.getUserProfileFetch) {
      dispatch(getAllUserProfileData());
      dispatch(getUserProfile());
    }
  });

  return (
    <UserLayout>
      <DashboardLout>
        <h3> Discover</h3>
        <div className={style.allUserProfile}>
          {authState.getUserProfileFetch &&
            authState.AllUser.map((profile) => {
              return (
                <div
                  key={profile._id}
                  className={style.single_UserCard}
                  onClick={() => {
                    router.push(`/view_page/${profile.userId.username}`);
                  }}
                >
                  <img
                    className={style.userProfile_cont}
                    src={`${BASE_URL}/${profile.userId.profilePicture}`}
                    alt=""
                  />
                  <div>
                    <p>{profile.userId.name} </p>
                    <p>{profile.userId.username} </p>
                  </div>
                </div>
              );
            })}
        </div>
      </DashboardLout>
    </UserLayout>
  );
};

export default discoverSearch;
