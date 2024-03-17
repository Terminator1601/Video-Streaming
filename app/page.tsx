import RoomForm from "@/components/RoomForm/RoomForm";
import SearchResult from "@/components/SearchResult/SearchResult";
import React from "react";

const page = () => {
  return (
    <>
      <h1 className="text-center">Welcome to Video Streaming</h1>
      <RoomForm />
      <SearchResult />
    </>
  );
};

export default page;
