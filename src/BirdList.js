import React from 'react'
import useFetch from './useFetch';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { FaArrowRightFromBracket } from "react-icons/fa6";

const BirdList = () => {
    const {data:birds} = useFetch('http://localhost:8000/Tbl_Bird');

    if (birds === null) {
        return <div>Loading...</div>;
    }

       // Split the birds array into chunks of 4
       const chunkedBirds  = birds.reduce((acc, bird, index) => {
        const chunkIndex = Math.floor(index / 4);

        if (!acc[chunkIndex]) {
            acc[chunkIndex] = [];
        }

        acc[chunkIndex].push(bird);
        return acc;
    }, []);

    const handleBirdCard = () => {

    }
  return (
    <div className='bird-list'>
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
                <div className='row' key={rowIndex}>
                    {row.map(bird => (
                        <div className='col' key={bird.id} onChange={handleBirdCard}>
                            <Link to={`/birds/${bird.id}`}>
                                <div className='' style={{ width: '20rem' }}>
                                    <img className='card-img-top' src={`${process.env.PUBLIC_URL}/${bird.ImagePath}`} alt='bird' style={{ width: 300, height: 200 }} />
                                    <div className='card-body d-flex justify-content-between'>
                                        <div>
                                            <h5 className='card-title'>{bird.BirdEnglishName}</h5>
                                            <h5 className='card-title'>{bird.BirdMyanmarName}</h5>
                                        </div>
                                        <div>
                                            <FaArrowRightFromBracket size={20}/>
                                        </div>

                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            ))}
    </div>
  )
}

export default BirdList
