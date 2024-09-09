import Image from "next/image";
import Link from "next/link";
import "../../../styles/main.scss";
import SerachSecondary from "@/components/SerachSecondary";
import SearchBox from "@/components/SearchBox";
const Gallery1 = "/image/gallery1.png";
const Gallery2 = "/image/gallery2.png";
const Gallery3 = "/image/gallery3.png";

async function getHotelbyID(id) {
  const responce = await fetch(`http://localhost:3000/api/hotels/${id}`, {
    method: "GET",
  });
  return responce.json();
}
async function PostID({ params, searchParams }) {
  const post = await getHotelbyID(params.id);
  const { location, checkIn, checkOut, numberOfGuests } = searchParams;

  return (
    <div className="container">
      <div className="container__main">
        <div className="explore-hotel">
          <SearchBox />
          <SerachSecondary />

          <div className="gallery">
            {post.hotel.map((detail) => (
              <Image
                key={detail.id}
                src={detail.image}
                width={680}
                height={448}
                alt="explore hotel chosen "
                className="gallery__item gallery__item--0"
              />
            ))}
            <Image
              src={Gallery1}
              width={440}
              height={285}
              alt="explore hotel chosen "
              className="gallery__item gallery__item--1"
            />
            <Image
              src={Gallery2}
              width={210}
              height={151}
              alt="explore hotel chosen "
              className="gallery__item gallery__item--2"
            />
            <Image
              src={Gallery3}
              width={210}
              height={151}
              alt="explore hotel chosen "
              className="gallery__item gallery__item--3"
            />
          </div>

          {post.hotel.map((detail) => {
            return (
              <div key={detail.id}>
                <h6 className="heading__h6 color__text--black-light-1 ">
                  <span>{detail.name}</span>, <span>{detail.location}</span>
                </h6>
                <p className="text__m--400 color__text--blue-light-1">
                  {detail.area}
                </p>
                <div className="explore-hotel__room">
                  {detail.room.map((i) => {
                    return (
                      <div key={i.type} className="explore-hotel__room--item">
                        <Image
                          src={detail.image}
                          width={174}
                          height={140}
                          alt="room image "
                        />
                        <div className="explore-hotel__room--text">
                          <p className="text__ss--400 color__text--black-light-1 ">
                            {i.type}
                          </p>
                          <p className="text__3xl--700 color__text--blue-2">
                            {i.price} BAHT/night
                          </p>
                        </div>

                        <Link
                          // href={`/review/${detail.id}?price=${i.price}`}
                          href={{
                            pathname: `/review/${detail.id}`,
                            query: {
                              roomtype: i.type,
                              roomPrice: i.price,
                              location: searchParams.location,
                              checkIn: searchParams.checkIn,
                              checkOut: searchParams.checkOut,
                              numberOfGuests: searchParams.numberOfGuests,
                            },
                          }}
                          className="book__btn text__ss--500 color__text--white click__basic color__bg--blue-2 text-rotate"
                        >
                          <p> Book Now</p>
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default PostID;
