import React from "react";
import { GetBookData } from "../../service/book.service";
import useFetch from "../../hook/useFetch";
import { useNavigate, useParams } from "react-router-dom";

const DetailbookPage = () => {
  const { id } = useParams();
  const nav = useNavigate();
  const { data, loading, error } = useFetch(GetBookData, `books/${id}`);
  const handleback = () => {
    nav(-1);
  };
  return (
    <div>
      {loading ? (
        <h1>Loading....</h1>
      ) : (
        <>
          {error ? (
            <h1>Error</h1>
          ) : (
            <>
              <div className="pb-5 align-center">
                <button onClick={handleback}>Back</button>
                <div>
                  <img
                    className="rounded-lg "
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdRMf2yptTiiGUlpqyWwmCinZega3BE3T9mA&usqp=CAU"
                    alt="photo.jpg"
                  />
                </div>
                <div>
                  <h1 className="text-lg font-bold">{data.title}</h1>
                  <h2 className="test-sm text-gray-400">{data.author}</h2>
                </div>
                <div>
                  <p>{data.description}</p>
                </div>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default DetailbookPage;
