// components/SearchForm.js
"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

const SearchForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();

  const onSubmit = (data) => {
    const { location, checkIn, checkOut, numberOfGuests } = data;

    router.push(
      `/hotel/${encodeURIComponent(location)}?checkIn=${encodeURIComponent(
        checkIn
      )}&checkOut=${encodeURIComponent(
        checkOut
      )}&numberOfGuests=${encodeURIComponent(numberOfGuests)}`
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="search">
      <div className="search__form--group">
        {/* <label htmlFor="location">location:</label> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
        >
          <path
            d="M16.398 4C15.2947 3.99921 14.2021 4.21595 13.1826 4.63781C12.1631 5.05967 11.2368 5.67838 10.4566 6.45855C9.67642 7.23871 9.05771 8.16504 8.63585 9.18453C8.21399 10.204 7.99726 11.2967 7.99805 12.4C7.99805 18.7 16.398 28 16.398 28C16.398 28 24.798 18.7 24.798 12.4C24.7988 11.2967 24.5821 10.204 24.1602 9.18453C23.7384 8.16504 23.1197 7.23871 22.3395 6.45855C21.5593 5.67838 20.633 5.05967 19.6135 4.63781C18.594 4.21595 17.5014 3.99921 16.398 4ZM16.398 15.4C15.8047 15.4 15.2247 15.2241 14.7313 14.8944C14.238 14.5648 13.8535 14.0962 13.6264 13.5481C13.3993 12.9999 13.3399 12.3967 13.4557 11.8147C13.5714 11.2328 13.8572 10.6982 14.2767 10.2787C14.6963 9.85912 15.2308 9.5734 15.8128 9.45765C16.3947 9.34189 16.9979 9.4013 17.5461 9.62836C18.0943 9.85543 18.5628 10.2399 18.8925 10.7333C19.2221 11.2266 19.398 11.8067 19.398 12.4C19.398 13.1957 19.082 13.9587 18.5194 14.5213C17.9568 15.0839 17.1937 15.4 16.398 15.4Z"
            stroke="#8E8E8E"
            strokeWidth="2"
          />
        </svg>
        <input
          className="text__m--400"
          id="location"
          {...register("location", { required: "location is required" })}
          placeholder="Enter city"
        />
        {errors.location && (
          <p className="error-message ">{errors.location.message}</p>
        )}
      </div>
      <div className="search__form--date">
        <div className="search__form--group">
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              d="M22.998 8.24695H8.99805C7.89348 8.24695 6.99805 9.14238 6.99805 10.2469V24.2469C6.99805 25.3515 7.89348 26.2469 8.99805 26.2469H22.998C24.1026 26.2469 24.998 25.3515 24.998 24.2469V10.2469C24.998 9.14238 24.1026 8.24695 22.998 8.24695Z"
              fill="white"
              stroke="#8E8E8E"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19.998 6.24695V10.2469"
              stroke="#8E8E8E"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11.998 6.24695V10.2469"
              stroke="#8E8E8E"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.99805 14.2469H24.998"
              stroke="#8E8E8E"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg> */}
          {/* <label htmlFor="checkIn">Check-in Date:</label> */}
          <input
            className="text__m--400"
            id="checkIn"
            type="date"
            {...register("checkIn", { required: "Check-in date is required" })}
          />
          {errors.checkIn && (
            <p className="error-message ">{errors.checkIn.message}</p>
          )}
        </div>
        <div className="search__form--group">
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              d="M22.998 8.24695H8.99805C7.89348 8.24695 6.99805 9.14238 6.99805 10.2469V24.2469C6.99805 25.3515 7.89348 26.2469 8.99805 26.2469H22.998C24.1026 26.2469 24.998 25.3515 24.998 24.2469V10.2469C24.998 9.14238 24.1026 8.24695 22.998 8.24695Z"
              fill="white"
              stroke="#8E8E8E"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19.998 6.24695V10.2469"
              stroke="#8E8E8E"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11.998 6.24695V10.2469"
              stroke="#8E8E8E"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.99805 14.2469H24.998"
              stroke="#8E8E8E"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg> */}
          {/* <label htmlFor="checkOut">Check-out Date:</label> */}
          <input
            className="text__m--400"
            id="checkOut"
            type="date"
            {...register("checkOut", {
              required: "Check-out date is required",
            })}
          />
          {errors.checkOut && (
            <p className="error-message ">{errors.checkOut.message}</p>
          )}
        </div>
      </div>

      <div className="search__form--group">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
        >
          <path
            d="M20.998 25V23C20.998 21.9391 20.5766 20.9217 19.8265 20.1716C19.0763 19.4214 18.0589 19 16.998 19H8.99805C7.93718 19 6.91977 19.4214 6.16962 20.1716C5.41947 20.9217 4.99805 21.9391 4.99805 23V25"
            stroke="#8E8E8E"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.9961 15C15.2052 15 16.9961 13.2091 16.9961 11C16.9961 8.79086 15.2052 7 12.9961 7C10.787 7 8.99609 8.79086 8.99609 11C8.99609 13.2091 10.787 15 12.9961 15Z"
            stroke="#8E8E8E"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M26.998 25V23C26.9974 22.1137 26.7024 21.2528 26.1594 20.5523C25.6164 19.8519 24.8562 19.3516 23.998 19.13"
            stroke="#8E8E8E"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19.998 7.13C20.8585 7.35031 21.6211 7.85071 22.1657 8.55232C22.7103 9.25392 23.0059 10.1168 23.0059 11.005C23.0059 11.8932 22.7103 12.7561 22.1657 13.4577C21.6211 14.1593 20.8585 14.6597 19.998 14.88"
            stroke="#8E8E8E"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        {/* <label htmlFor="numberOfGuests">Number of Guests:</label> */}
        <input
          className="text__m--400"
          placeholder="Number of guests"
          id="numberOfGuests"
          type="number"
          {...register("numberOfGuests", {
            required: "Number of guests is required",
          })}
        />
        {errors.numberOfGuests && (
          <p className="error-message">{errors.numberOfGuests.message}</p>
        )}
      </div>

      <button
        className="blue__btn click__basic color__text--white text__m--400 color__bg--blue-2"
        type="submit"
      >
        Search
      </button>
    </form>
  );
};

export default SearchForm;
