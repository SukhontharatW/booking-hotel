// components/GuestForm.js
"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import { useRouter } from "next/navigation";

const schema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  mobileNumber: yup
    .string()
    .matches(/^\d{10}$/, "Mobile number must be 10 digits")
    .required("Mobile number is required"),
  specialRequest: yup.string(),
});

const GuestForm = ({ id }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [specialRequest, setSpecialRequest] = useState("");

  const onSubmit = (data) => {
    router.push(
      `/payment/${id}?firstName=${encodeURIComponent(
        data.firstName
      )}&lastName=${encodeURIComponent(
        data.lastName
      )}&email=${encodeURIComponent(
        data.email
      )}&mobileNumber=${encodeURIComponent(
        data.mobileNumber
      )}&specialRequest=${encodeURIComponent(data.specialRequest)}`
    );
  };

  return (
    <>
      <p className="text__l--500">Guest Details</p>
      <form onSubmit={handleSubmit(onSubmit)} className="guest__form">
        <div className="guest__row">
          <div className="guest__input">
            {/* <label htmlFor="firstName">First Name:</label> */}
            <input
              onChange={(e) => setFirstName(e.target.value)}
              id="firstName"
              {...register("firstName")}
              placeholder="First Name"
              className="text__m--400"
            />
            {errors.firstName && (
              <p className="error-message">{errors.firstName.message}</p>
            )}
          </div>
          <div className="guest__input">
            {/* <label htmlFor="lastName">Last Name:</label> */}
            <input
              onChange={(e) => setLastName(e.target.value)}
              id="lastName"
              {...register("lastName")}
              placeholder="Last Name"
              className="text__m--400"
            />
            {errors.lastName && (
              <p className="error-message">{errors.lastName.message}</p>
            )}
          </div>
        </div>

        <div className="guest__row">
          <div className="guest__input">
            {/* <label htmlFor="email">Email:</label> */}
            <input
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              type="email"
              {...register("email")}
              placeholder="E-mail address"
              className="text__m--400"
            />
            {errors.email && (
              <p className="error-message">{errors.email.message}</p>
            )}
          </div>
          <div className="guest__input">
            {/* <label htmlFor="mobileNumber">Mobile Number:</label> */}
            <input
              onChange={(e) => setMobile(e.target.value)}
              id="mobileNumber"
              type="tel"
              {...register("mobileNumber")}
              placeholder="Mobile number"
              className="text__m--400"
            />
            {errors.mobileNumber && (
              <p className="error-message">{errors.mobileNumber.message}</p>
            )}
          </div>
        </div>
        <p className="text__l--500">Special Request(optional)</p>
        <div className="guest__input">
          <textarea
            onChange={(e) => setSpecialRequest(e.target.value)}
            id="specialRequest"
            {...register("specialRequest")}
            className="text__m--400"
          />
        </div>

        <button
          className="blue__btn click__basic color__text--white text__m--400 color__bg--blue-2"
          type="submit"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default GuestForm;
