import { useRouter } from "next/router";
import style from "../styles/Home.module.css";
import UserLayout from "../layout/userLayout";

export default function Home() {
  const router = useRouter();
  return (
    <UserLayout>
      <div className={style.container}>
        <div className={style.maincontainer}>
          <div className={style.mainLeftContainer}>
            <p>Connect with Friends without Exaggeration</p>
            <p>A True social media platform , with stories no blufs</p>
            <div
              onClick={() => {
                router.push("/login");
              }}
              className={style.joinButton}
            >
              Join Now
            </div>
          </div>
          <div className={style.mainRightContainer}>
            <img src="images/network.png" alt="" className={style.imageBox} />
          </div>
        </div>
      </div>
    </UserLayout>
  );
}
