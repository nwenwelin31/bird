import React from 'react'
import { Link, useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import useFetch from './useFetch';

const BirdDetail = () => {
    const {id} = useParams();
    //http://localhost:8000/blogs/
    const {data:bird, error, isPending} = useFetch('http://localhost:8000/Tbl_Bird/'+id);
    const history = useHistory();

    const handleClick = () => {
        fetch('http://localhost:8000/Tbl_Bird/'+bird.id,{
            method: 'DELETE',
        }).then(() => {
            history.push('/');
        })
    }

  return (
    <div className='bird-details'>
        {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {bird && (
            <div className='row'>
                <div className='col-md-7'>
                <article>
                    <h2>{bird.BirdEnglishName}</h2>
                    <h2>{bird.BirdMyanmarName}</h2>
                    <div className='description m-3'>{bird.Description}</div>
                  
                    <Link to='/birdlist' className='btn btn-success mx-2'>Back</Link>
                    <button onClick={handleClick}>Delete</button>
                </article>
                </div>
                <div className='col-md-5'>
                <img src={`${process.env.PUBLIC_URL}/${bird.ImagePath}`} alt='bird' className='img-fluid'/>
                </div>
            </div>

        )
      }
    </div>
  )
}

export default BirdDetail
