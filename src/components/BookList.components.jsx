import React from "react";

const BookListComponents = ({ data }) => {

  return (
    <div className="w-[200px] h-[300px] border rounded-lg mb-5 ">
        
        <div>
            <img className="rounded-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdRMf2yptTiiGUlpqyWwmCinZega3BE3T9mA&usqp=CAU" alt="photo.jpg" />
        </div>
      <div>
        <h1 className="text-lg font-bold">{data.title}</h1>
        <h2 className="test-sm text-gray-400">{data.author}</h2>
      </div>
      <div> 
        <p>{data.description}</p>      
      </div>
    </div>
  );
};

export default BookListComponents;
