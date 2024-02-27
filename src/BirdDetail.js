import React from 'react'
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';
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
                    <h1>{bird.BirdEnglishName}</h1>
                    <h1>{bird.BirdMyanmarName}</h1>
                    <div className='description m-3'>{bird.Description}</div>
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
