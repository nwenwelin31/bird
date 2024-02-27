import React from 'react'
import useFetch from './useFetch';


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
                        <div className='col-md-3' key={bird.id}>
                            <div className='card' style={{ width: '15rem' }}>
                                <img className='card-img-top' src={`${process.env.PUBLIC_URL}/${bird.ImagePath}`} alt='bird' style={{ width: 220, height: 150 }} />
                                <div className='card-body'>
                                    <h5 className='card-title'>{bird.BirdEnglishName}</h5>
                                    <h5 className='card-title'>{bird.BirdMyanmarName}</h5>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
    </div>
  )
}

export default BirdList
