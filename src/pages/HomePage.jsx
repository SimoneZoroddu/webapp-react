import { useState, useEffect } from "react"
import axios from 'axios'

export default function HomePage() {

    const [films, setFilms] = useState([])

    useEffect(() => {
        const api_url = import.meta.env.VITE_API_ADDRESS + '/movies'

        axios.get(api_url)
            .then(datas => {
                console.log(datas.data)
                setFilms(datas.data)
            }
            )
    }, [])

    return (
        <div className="container">
            <div className="row">
                {
                    films.map((film, index) => (
                        <div key={index} className="col">
                            <div className="card" style={{ width: '18rem' }}>
                                <img src={`http://localhost:3010/${film.title}.jpg`} className="card-img-top" alt={film.title} />
                                <div className="card-body">
                                    <h5 className="card-title">{film.title}</h5>
                                    <p className="card-text">{film.director}{film.genre}{film.release_year}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}