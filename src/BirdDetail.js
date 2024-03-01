import React from "react";
import {
  Link,
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch"; 

const BirdDetail = () => {
  //fetch data equal user request id
  const { id } = useParams();
  const {
    data: bird,
    error,
    isPending,
  } = useFetch("https://json-server-snowy-pi.vercel.app/Birds/" + id);
  const history = useHistory();

  //delete button
  const handleClick = () => {
    fetch("https://json-server-snowy-pi.vercel.app/Birds/" + bird.id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };

  return (
    <div className="bird-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {bird && (
        <div className="row">
          <div className="col-md-7">
            <article>
              <h2>{bird.BirdEnglishName}</h2>
              <h2>{bird.BirdMyanmarName}</h2>
              <div className="description m-3">{bird.Description}</div>

              <Link to="/birdlist" className="btn btn-success mx-2">
                Back
              </Link>
              {/* <button onClick={handleClick}>Delete</button> */}
            </article>
          </div>
          <div className="col-md-5">
            <img
              src={`${process.env.PUBLIC_URL}/${bird.ImagePath}`}
              alt="bird"
              className="img-fluid"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default BirdDetail;
