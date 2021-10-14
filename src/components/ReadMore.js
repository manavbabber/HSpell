import React, { useState } from "react";
import './ReadMore.css';
const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text.slice(0, 100) : text}
      <span style={{color:'#0199CB'}} onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? " ...read more" : " show less"}
      </span>
    </p>
  );
};

export default ReadMore;