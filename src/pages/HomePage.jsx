import { useState, useEffect } from "react"
import axios from 'axios'
import { Link } from 'react-router-dom'
import { GlobalContextUse } from "../context/GlobalContext"


export default function HomePage() {

    const port = import.meta.env.VITE_PORT

    const [films, setFilms] = useState([])


    const { setLoading } = GlobalContextUse()

    useEffect(() => {

        setLoading(true)

        const api_url = import.meta.env.VITE_API_ADDRESS + '/movies'

        axios.get(api_url)
            .then(datas => {
                // console.log(datas.data)
                setFilms(datas.data)
                setLoading(false)
            }
            )
    }, [])

    return (
        <div className="container">
            <div className="row">
                {
                    films.map((film, index) => (
                        <div key={index} className="col g-3">
                            <div className="card h-100 bg-black text-white mx-auto film_card" style={{ width: '18rem' }}>
                                <Link to={`/films/${film.id}`} className="">
                                    <div id="overlay" className="text-center">
                                        <div className="text-white-50">Premi per i Dettagli</div>
                                        <i className="bi bi-eye text-white"></i>
                                        <div className="card-body text-white">
                                            <h3 className="card-title mt-2 text-center text-success">{film.title}</h3>
                                            <div className="card-text mt-2"><span className="text-warning">Film Director:</span> {film.director}</div>
                                            <div className="mt-2"><span className="text-danger">Genre:</span> {film.genre}</div>
                                            <div className="mt-2"><span className="text-primary">Release:</span> {film.release_year}</div>
                                            <div className="textwhite">{film.abstract}</div>
                                        </div>
                                    </div>
                                </Link>
                                <img src={`http://localhost:${port}/${film.image}`} className="card-img-top h-100 img_hover" alt={film.title} />
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}