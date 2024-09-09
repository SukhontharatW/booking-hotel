import Image from "next/image";
import Link from "next/link";
import "../../../styles/main.scss";
import SearchBox from "@/components/SearchBox";
import SerachSecondary from "@/components/SerachSecondary";
import GuestForm from "@/components/GuestForm";
import CalculateCost from "@/components/calculateCost";

async function getHotelbyID(id) {
  const responce = await fetch(`http://localhost:3000/api/hotels/${id}`, {
    method: "GET",
  });
  return responce.json();
}
async function PostReview({ params, searchParams }) {
  const post = await getHotelbyID(params.id);
  console.log(post);
  const { roomtype, roomPrice, location, checkIn, checkOut, numberOfGuests } =
    searchParams;
  return (
    <div className="container">
      <div className="container__main">
        <div className="review">
          <SearchBox />
          <SerachSecondary />
          <div className="review__row">
            <div className="detail">
              <div className="item">
                <p className="text__l--600 color__text--black">
                  {post.hotel.map((i) => (
                    <p key={i.id}>
                      {i.name}, {i.location}
                    </p>
                  ))}
                </p>
              </div>

              <div className="item">
                <p className="text__l--400 color__text--black-fade">
                  Room type:
                </p>
                <span className="text__l--400 color__text--blue-light-1">
                  {roomtype}
                </span>
              </div>
              <div className="item">
                <p className="text__l--400 color__text--black-fade">
                  Check-out:
                </p>
                <span className="text__l--400 color__text--blue-light-1">
                  {checkOut}
                </span>
              </div>
              <div className="item">
                <p className="text__l--400 color__text--black-fade">
                  Check-in:
                </p>
                <span className="text__l--400 color__text--blue-light-1">
                  {checkIn}
                </span>
              </div>
              <div className="item">
                <p className="text__l--400 color__text--black-fade">
                  Check-out:
                </p>
                <span className="text__l--400 color__text--blue-light-1">
                  {checkOut}
                </span>
              </div>
              <div className="item">
                <p className="text__l--400 color__text--blue-light-1">
                  {numberOfGuests}
                </p>
                <p className="text__l--400 color__text--black-fade">
                  x Guest - 1 x room
                </p>
              </div>
            </div>
            <CalculateCost
              roomPrice={roomPrice}
              checkIn={checkIn}
              checkOut={checkOut}
              numberOfGuests={numberOfGuests}
            />
          </div>

          <GuestForm id={params.id} />
        </div>
      </div>
    </div>
  );
}

export default PostReview;
