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
                            <div className="card h-100 bg-black text-white mx-auto" style={{ width: '18rem' }}>
                                <img src={`http://localhost:${port}/${film.image}`} className="card-img-top h-100" alt={film.title} />
                                <div className="card-body">
                                    <h3 className="card-title mt-2 text-center">{film.title}</h3>
                                    <div className="card-text mt-2"><span className="text-warning">Film Director:</span> {film.director}</div>
                                    <div className="mt-2"><span className="text-danger">Genre:</span> {film.genre}</div>
                                    <div className="mt-2"><span className="text-primary">Release:</span> {film.release_year}</div>
                                    <Link to={`/films/${film.id}`} className="text-white d-flex justify-content-center text-decoration-none bg-secondary mt-2 rounded mx-5">Dettagli</Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}