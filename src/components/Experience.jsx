import React from "react";
import LikeHandler from "./LikeHandler.jsx";

const Experience = ({ experience, images }) => {
  const { title, body, username, created_at, likes } = experience;
  const date = new Date(+created_at);
  return (
    <div>
      <h2>{title}</h2>
      <p>{body}</p>
      {images.map((image) => (
        <img
          className="experience-image"
          src={image.image_URL}
          alt={image.image_desc}
          key={image.image_id}
        ></img>
      ))}
      <p>
        {username} on {date.toLocaleString()}
      </p>
      <p>
        <LikeHandler />
        likes: {likes}
      </p>
    </div>
  );
};

export default Experience;
