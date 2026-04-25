import { useState, useEffect } from "react"
import axios from 'axios'
import { useParams } from "react-router-dom"
import { Link } from 'react-router-dom'
import FormNewMovie from "../components/FormNewMovie"

export default function Film() {

    const port = import.meta.env.VITE_PORT
    
    const { filmId } = useParams()

    console.log(filmId);

    const [film, setFilm] = useState([])

    useEffect(() => {

        const api_url = import.meta.env.VITE_API_ADDRESS + '/movies/'

        axios.get(`${api_url}${filmId}`)
            .then(datas => {
                console.log(datas.data)
                setFilm([datas.data])
            }
            )
    }, [])

    function starsVote(vote) {
        return '★'.repeat(vote)
    }

    return (
        <div className="container text-center">
            <div className="row">
                {
                    film.map((film, index) => (
                        <div key={index} className="col">
                            <div className="card h-100 bg-black text-white mx-auto" style={{ width: '18rem' }}>
                                <img src={`http://localhost:${port}/${film.image}`} className="card-img-top h-100" alt={film.title}  />
                                <div className="card-body">
                                    <h3 className="card-title text-center mt-2">{film.title}</h3>
                                    <div className="card-text"><span className="text-warning">Film Director :</span> {film.director}</div>
                                    <div className="mt-2"><span className="text-danger">Genre :</span> {film.genre}</div>
                                    <div className="mt-2"><span className="text-primary">Release :</span> {film.release_year}</div>
                                    <FormNewMovie/>
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
            </div>
        </div>
    )
}