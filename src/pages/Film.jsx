import { useState, useEffect } from "react"
import axios from 'axios'
import { useParams } from "react-router-dom"
import { Link } from 'react-router-dom'
import FormNewMovie from "../components/FormNewReview"

export default function Film() {

    const port = import.meta.env.VITE_PORT

    const { filmId } = useParams()

    //console.log(filmId);

    const [films, setFilms] = useState([])
    const [addNewReviewCheck, setAddNewReviewCheck] = useState(false)

    useEffect(() => {

        const api_url = import.meta.env.VITE_API_ADDRESS + '/movies/'

        axios.get(`${api_url}${filmId}`)
            .then(datas => {
                // console.log(datas.data)
                setFilms([datas.data])
            }
            )
    }, [addNewReviewCheck])

    function starsVote(vote) {
        return '★'.repeat(vote)
    }

    return (
        <div className="container text-center">
            <div className="row">
                {
                    films.map((film) => (
                        <div key={film.id}>
                            <div className="card m-3" style={{ maxwidth: "540px" }} >
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src={`http://localhost:${port}/${film.image}`} className="img-fluid rounded-start" alt={film.title} />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h3 className="card-title">{film.title}</h3>
                                            <p className="card-text"><span className="text-warning">Film Director :</span> {film.director}</p>
                                            <p className="card-text"><span className="text-danger">Genre :</span> {film.genre}</p>
                                            <p className="card-text"><span className="text-primary">Release Year :</span> {film.release_year}</p>
                                            <div className="text-danger">Description </div> 
                                            <div className="card-text">{film.abstract}</div>
                                            <Link to='/' className="btn btn-secondary position-absolute bottom-0 end-0 m-2">Torna alla Home</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            < FormNewMovie filmId={filmId} setAddNewReviewCheck={setAddNewReviewCheck} />
                            {
                                film.reviews?.map((review, index) => (
                                    <div key={index}>
                                        <div className="text-primary">{review.name}</div>
                                        <div className="text-danger"><span className="text-warning">{starsVote(review.vote)}</span> {film.title}</div>
                                        <div className="text-white">{review.text}</div>
                                    </div>
                                ))
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    )
}


/*

<div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="..." class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
*/

/*
{
                    film.map((film, index) => (
                        <div key={index} className="col">
                            <div className="card h-100 bg-black text-white mx-auto" style={{ width: '18rem' }}>
                                <img src={`http://localhost:${port}/${film.image}`} className="card-img-top h-100" alt={film.title} />
                                <div className="card-body">
                                    <h3 className="card-title text-center mt-2">{film.title}</h3>
                                    <div className="card-text"><span className="text-warning">Film Director :</span> {film.director}</div>
                                    <div className="mt-2"><span className="text-danger">Genre :</span> {film.genre}</div>
                                    <div className="mt-2"><span className="text-primary">Release :</span> {film.release_year}</div>
                                    <FormNewMovie filmId={filmId} setAddNewReviewCheck={setAddNewReviewCheck} />
                                    <div>Recensioni :</div>
                                    {
                                        film.reviews?.map((review, index) => (
                                            <div key={index}>
                                                <div className="text-warning">{review.name}</div>
                                                <div className="text-danger">{starsVote(review.vote)} {film.title}</div>
                                                <div>{review.text}</div>
                                            </div>
                                        ))
                                    }
                                    <Link to='/' className="text-danger d-flex justify-content-center text-decoration-none bg-primary rounded mx-5 mt-2">Torna alla Home</Link>
                                </div>
                            </div>
                        </div>
                    ))
                }







*/