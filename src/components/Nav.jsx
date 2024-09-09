"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Nav() {
  const pathname = usePathname();
  return (
    <div className="container">
      <div className="container__main">
        {" "}
        <div className="nav">
          <Link className="nav__link click__basic " href={"/home"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="34"
              viewBox="0 0 30 34"
              fill="none"
            >
              <path
                d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z"
                fill="white"
              />
              <path
                d="M7.5 34C11.0899 34 14 31.0899 14 27.5C14 23.9101 11.0899 21 7.5 21C3.91015 21 1 23.9101 1 27.5C1 31.0899 3.91015 34 7.5 34Z"
                fill="white"
              />
              <path
                d="M23.5 28C27.0899 28 30 25.0899 30 21.5C30 17.9101 27.0899 15 23.5 15C19.9101 15 17 17.9101 17 21.5C17 25.0899 19.9101 28 23.5 28Z"
                fill="white"
              />
            </svg>
          </Link>
          <ul className="nav__group">
            <li
              className={`text__s--400 click__basic  ${
                pathname === "/home" || pathname === "/"
                  ? "nav__active "
                  : "nav__item"
              }`}
            >
              <Link className="nav__link" href={"/home"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="21"
                  viewBox="0 0 19 21"
                  fill="none"
                >
                  <path
                    d="M0.951172 7.64705L9.50017 0.998047L18.0512 7.64705V18.098C18.0512 18.602 17.851 19.0852 17.4947 19.4415C17.1384 19.7979 16.6551 19.998 16.1512 19.998H2.85117C2.34726 19.998 1.86399 19.7979 1.50767 19.4415C1.15135 19.0852 0.951172 18.602 0.951172 18.098V7.64705Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6.5 19.9961V9.99609H12.5V19.9961"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p>Home</p>
              </Link>
            </li>
            <li
              className={`text__s--400 click__basic  ${
                pathname === "/explore" ||
                pathname.startsWith("/hotel/") ||
                pathname.startsWith("/explore-hotel/") ||
                pathname.startsWith("/review/") ||
                pathname.startsWith("/payment/")
                  ? "nav__active "
                  : "nav__item"
              }`}
            >
              <Link className="nav__link" href={"/explore"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17 17L13.5 13.5"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Explore
              </Link>
            </li>
            <li
              className={`text__s--400 click__basic  ${
                pathname === "/trip" ? "nav__active " : "nav__item"
              }`}
            >
              <Link className="nav__link" href={"/trip"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="18"
                  viewBox="0 0 21 18"
                  fill="none"
                >
                  <path
                    d="M18.085 2.4141C17.6367 1.96564 17.1045 1.60988 16.5187 1.36716C15.9329 1.12444 15.3051 0.999512 14.671 0.999512C14.0369 0.999512 13.409 1.12444 12.8233 1.36716C12.2375 1.60988 11.7052 1.96564 11.257 2.4141L10.327 3.3441L9.39699 2.4141C8.48694 1.53188 7.26646 1.04292 5.99901 1.05276C4.73157 1.0626 3.51883 1.57045 2.62258 2.4667C1.72634 3.36294 1.21848 4.57568 1.20864 5.84313C1.1988 7.11057 1.68777 8.33105 2.56999 9.2411L3.49999 10.1711L10.328 17.0011L17.156 10.1731L18.086 9.2431C18.5345 8.79485 18.8902 8.26262 19.1329 7.67684C19.3757 7.09105 19.5006 6.46318 19.5006 5.8291C19.5006 5.19502 19.3757 4.56716 19.1329 3.98137C18.8902 3.39559 18.5345 2.86336 18.086 2.4151L18.085 2.4141Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Trips
              </Link>
            </li>
            <li
              className={`text__s--400 click__basic  ${
                pathname === "/profile" ? "nav__active " : "nav__item"
              }`}
            >
              <Link className="nav__link" href={"/profile"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="18"
                  viewBox="0 0 16 18"
                  fill="none"
                >
                  <path
                    d="M15 17V15C15.0618 14.0065 14.7287 13.0288 14.0732 12.2796C13.4177 11.5305 12.4929 11.0706 11.5 11H4.49997C3.50705 11.0706 2.5822 11.5305 1.9267 12.2796C1.27121 13.0288 0.938136 14.0065 0.999973 15V17"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7.99985 9C9.96377 9 11.5558 7.20914 11.5558 5C11.5558 2.79086 9.96377 1 7.99985 1C6.03592 1 4.44385 2.79086 4.44385 5C4.44385 7.20914 6.03592 9 7.99985 9Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Profile
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Nav;
