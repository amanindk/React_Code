import React, { useState } from "react";

function Heartbutton() {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked((prevLiked) => !prevLiked);
  };
  return (
    <div>
      <FaHeart className={liked ? "liked" : "unliked"} onClick={toggleLike} />
      <p>
        {liked
          ? "Item added to wishlist"
          : "Click the heart to add to wishlist"}
      </p>
    </div>
  );
}

export default Heartbutton;
