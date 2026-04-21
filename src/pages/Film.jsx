import { useState, useEffect } from "react"
import axios from 'axios'
import { useParams } from "react-router-dom"

export default function Film() {


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

    return (
        <div className="container">
            <div className="row">
                {
                    film.map((film, index) => (
                        <div key={index} className="col">
                            <div className="card" style={{ width: '18rem' }}>
                                <img src={`http://localhost:3010/${film.title}.jpg`} className="card-img-top" alt={film.title} />
                                <div className="card-body">
                                    <h5 className="card-title">{film.title}</h5>
                                    <p className="card-text">{film.director}{film.genre}{film.release_year}</p>
                                    {
                                        film.reviews?.map((review, index) => (
                                            <div key={index}>
                                                <div>{review.name}{review.text}{review.vote}</div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}