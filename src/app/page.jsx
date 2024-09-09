"use client";
import Image from "next/image";
// import variable from "../styles/variables.module.scss";

import "../styles/main.scss";
import { useState } from "react";
import ExplorePage from "./explore/page";
import HomePage from "./home/page";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [hotels, setHotels] = useState([]);
  const fetchDataFromApi = async () => {
    try {
      setLoading(true);
      const responce = await fetch("/api/search", {
        headers: {
          Accept: "application/json",
          method: "GET",
        },
      });
      if (responce) {
        const data = await responce.json();
        setHotels(data.HOTEL_DATA);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return <HomePage />;
}
