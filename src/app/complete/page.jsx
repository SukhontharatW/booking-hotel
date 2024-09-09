"use client";
import Link from "next/link";
import "../../styles/main.scss";
import { useEffect } from "react";
import AstronautImg from "../../images/Astronaut.png";
import Image from "next/image";

function CompletePage() {
  useEffect(() => {
    window.history.pushState(null, document.title, window.location.href);

    const handleRouteChange = () => {
      window.history.pushState(null, document.title, window.location.href);
    };

    window.addEventListener("popstate", handleRouteChange);

    return () => {
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, []);
  return (
    <div className="container">
      <div className="container__main">
        <div className="complete">
          <Image
            src={AstronautImg}
            width={809}
            height={480}
            alt="Astronaut image"
          />
          <h2 className="heading__h2 color__text--blue-2">
            Booking Successfully completed
          </h2>
          <p className="text__l--300 color__text--black">
            Your trip schedule is ready,please check under profile.
          </p>
          <Link
            href={`/home`}
            className="complete__btn text__xl--500 color__bg--blue-2 color__text--white"
          >
            home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CompletePage;
