import React from "react";
import useFetch from "./useFetch";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { FaArrowRightFromBracket } from "react-icons/fa6";

const BirdList = () => {
  const { data: birds } = useFetch("https://json-server-vercel-bird.vercel.app/Tbl_Bird");

  if (birds === null) {
    return <div>Loading...</div>;
  }

  // Split the birds array into chunks of 4
  const chunkedBirds = birds.reduce((acc, bird, index) => {
    const chunkIndex = Math.floor(index / 4);

    if (!acc[chunkIndex]) {
      acc[chunkIndex] = [];
    }

    acc[chunkIndex].push(bird);
    return acc;
  }, []);

  return (
    <div className="col-lg-12 mt-5 pt-5">
      <h1>All birds</h1>
      {/* {birds.map(bird => (
        <div class="card" style={{width: '15rem'}}>
            <img class="card-img-top" src={process.env.PUBLIC_URL + '/' + bird.ImagePath} alt="bird" style={{ width: 220, height: 150 }}/>
            <div class="card-body">
                <h5 class="card-title">{bird.BirdEnglishName}</h5>
                <h5 class="card-title">{bird.BirdMyanmarName}</h5>
            </div>
        </div>
        ))} */}

      {chunkedBirds.map((row, rowIndex) => (
        <div className="row mb-5" key={rowIndex}>
          <div className="col-lg-12">
            <div className="row">
            {row.map((bird) => (
          <div
            className="col-lg-3 col-md-5 col-sm-7 bird-list"
            key={bird.id} // Add key prop here using bird.id
          >
            <Link to={`/birds/${bird.id}`}>
              <div>
                <div>
                  <img
                    className="img-fluid"
                    src={`${process.env.PUBLIC_URL}/${bird.ImagePath}`}
                    alt="bird"
                  />
                </div>
                <div className="d-flex justify-content-between mt-1">
                  <div>
                    <h6 className="">{bird.BirdEnglishName}</h6>
                    <h6 className="">{bird.BirdMyanmarName}</h6>
                  </div>
                  <div>
                    <FaArrowRightFromBracket size={20} />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BirdList;
