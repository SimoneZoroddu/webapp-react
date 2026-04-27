import { useState, useEffect } from "react"
import axios from 'axios'
import { useParams } from "react-router-dom"
import { Link } from 'react-router-dom'
import FormNewMovie from "./FormNewReview"
import FilmReviews from './Reviews'


export default function FilmSingle() {

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

    return (
        <>
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
                        < FilmReviews film={film} />
                    </div>
                ))
            }
        </>
    )
}