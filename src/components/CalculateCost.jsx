import React from "react";

function CalculateCost({ roomPrice, checkIn, checkOut, numberOfGuests }) {
  console.log("Rendering CalculateCost");
  console.log(roomPrice, checkIn, checkOut, numberOfGuests);

  const pricePerNight = parseFloat(roomPrice);
  const guests = parseInt(numberOfGuests, 10);

  const checkInDate = new Date(checkIn);
  const checkOutDate = new Date(checkOut);

  let errorMessage = null;

  if (
    isNaN(pricePerNight) ||
    isNaN(guests) ||
    isNaN(checkInDate.getTime()) ||
    isNaN(checkOutDate.getTime())
  ) {
    errorMessage = "Please fill out all fields correctly.";
  } else {
    const timeDiff = checkOutDate - checkInDate;
    const numberOfNights = Math.ceil(timeDiff / (1000 * 3600 * 24));
    if (numberOfNights <= 0) {
      errorMessage = "Check-out date must be after the check-in date.";
    } else {
      const discountPercentage = 5;

      const initialCost = pricePerNight * numberOfNights;

      const discountAmount = initialCost * (discountPercentage / 100);

      const costAfterDiscount = initialCost - discountAmount;

      const vat = costAfterDiscount * 0.07;

      const totalAmount = costAfterDiscount + vat;

      return (
        <div className="cost">
          <div className="item">
            <label className="text__l--400 color__text--black-fade">
              1 room x {numberOfNights} night:
            </label>
            <span className="text__l--400 color__text--blue-light-1">
              {initialCost.toFixed(2)} THB
            </span>
          </div>

          <div className="item">
            <label className="text__l--400 color__text--black-fade">
              Total discount:
            </label>
            <span className="text__l--400 color__text--blue-light-1">
              {discountAmount.toFixed(2)} THB
            </span>
          </div>
          <div className="item">
            <label className="text__l--400 color__text--black-fade">
              Price after discount:
            </label>
            <span className="text__l--400 color__text--blue-light-1">
              {costAfterDiscount.toFixed(2)} THB
            </span>
          </div>
          <div className="item">
            <label className="text__l--400 color__text--black-fade">
              VAT 7%:
            </label>
            <span className="text__l--400 color__text--blue-light-1">
              {vat.toFixed(2)} THB
            </span>
          </div>
          <div className="item">
            <label className="text__xl--700 color__text--black-light-1">
              Total Amount:
            </label>
            <span className="text__xl--700 color__text--blue-2">
              {totalAmount.toFixed(2)} THB
            </span>
          </div>
        </div>
      );
    }
  }

  return <div className="error">{errorMessage}</div>;
}

export default CalculateCost;
