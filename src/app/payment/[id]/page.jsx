// "use client";

import Image from "next/image";
import Link from "next/link";
import "../../../styles/main.scss";
import SearchBox from "@/components/SearchBox";
import SerachSecondary from "@/components/SerachSecondary";

function Payment({ params, searchParams }) {
  console.log(params);
  console.log(searchParams);

  const {
    firstName = "",
    lastName = "",
    email = "",
    mobileNumber = "",
    specialRequest = "",
  } = searchParams;

  return (
    <div className="container">
      <div className="container__main">
        <div className="payment">
          <h1>Payment Details</h1>
          <ul>
            <li>
              <Link
                href={`/complete`}
                className="text__l--500 click__basic color__text--black"
              >
                Debit Card
              </Link>
            </li>
            <li>
              <Link
                href={`/complete`}
                className="text__l--500 click__basic color__text--black"
              >
                UPI
              </Link>
            </li>
            <li>
              <Link
                href={`/complete`}
                className="text__l--500 click__basic color__text--black"
              >
                PhonePay
              </Link>
            </li>
            <li>
              <Link
                href={`/complete`}
                className="text__l--500 click__basic color__text--black"
              >
                Net Banking
              </Link>
            </li>
            <li>
              <Link
                href={`/complete`}
                className="text__l--500 click__basic color__text--black"
              >
                Credit Card
              </Link>
            </li>
          </ul>
          {/* <p>
            <strong>First Name:</strong> {firstName}
          </p>
          <p>
            <strong>Last Name:</strong> {lastName}
          </p>
          <p>
            <strong>Email:</strong> {email}
          </p>
          <p>
            <strong>Mobile Number:</strong> {mobileNumber}
          </p>
          <p>
            <strong>Special Request:</strong> {specialRequest}
          </p> */}
        </div>
      </div>
    </div>
  );
}

export default Payment;
