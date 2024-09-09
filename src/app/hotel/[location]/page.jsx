// "use client";

import Image from "next/image";
import Link from "next/link";
import "../../../styles/main.scss";
import SearchBox from "@/components/SearchBox";

async function getHotelbyLocation(location) {
  const responce = await fetch(`http://localhost:3000/api/search/${location}`, {
    method: "GET",
  });
  return responce.json();
}
async function PostLocation({ params, searchParams }) {
  const post = await getHotelbyLocation(params.location);
  const { location, checkIn, checkOut, numberOfGuests } = searchParams;

  return (
    <div className="container">
      <div className="container__main">
        <div className="hotel">
          <SearchBox />
          {post.hotels.length === 0 ? (
            <p className="hotel__intro text__l--500">
              No hotels available at this moments.
            </p>
          ) : (
            <p className="hotel__intro text__l--500">
              Best places to enjoy your stay in {location} from
              {checkIn} to
              {checkOut} for {numberOfGuests} guest
            </p>
          )}

          <div className="hotel__group">
            {post.hotels.map((hotel) => (
              <HotelItem
                hotel={hotel}
                searchParams={searchParams}
                key={hotel.id}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function HotelItem({ hotel, searchParams }) {
  const { image, id, name, room, location } = hotel;
  const { checkIn, checkOut, numberOfGuests } = searchParams;
  console.log(image);
  return (
    <div className="hotel__item">
      <div className="hotel__image">
        <Image
          src={image}
          width={500}
          height={290}
          alt="hotel in searching location"
        />
      </div>

      <div className="hotel__info">
        <div className="hotel__info--text">
          <p className="text__l--500">
            {name}, {location}
          </p>
          <p className="text__s--400">Price starts from {room[0].price}</p>
        </div>

        <Link
          // href={`/explore-hotel/${id}`}
          href={{
            pathname: `/explore-hotel/${id}`,
            query: {
              location,
              checkIn,
              checkOut,
              numberOfGuests,
            },
          }}
          className="white__btn text__m--500 color__bg--white color__text--blue-2 click__basic"
        >
          View Detail
        </Link>
      </div>
    </div>
  );
}
export default PostLocation;
