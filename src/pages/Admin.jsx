import { useState, useEffect } from "react"
import axios from 'axios'
import { GlobalContextUse } from "../context/GlobalContext"
import { NavLink } from 'react-router-dom'


export default function Admin() {

    const port = import.meta.env.VITE_PORT

    const [films, setFilms] = useState([])


    const { setLoading } = GlobalContextUse()

    useEffect(() => {

        setLoading(true)

        const api_url = import.meta.env.VITE_API_ADDRESS + '/movies'

        axios.get(api_url)
            .then(datas => {
                console.log(datas.data)
                setFilms(datas.data)
                setLoading(false)
            }
            )
    }, [])

    return (
        <>
            <NavLink to='/' className="navbar-brand pe-4 text-white fs-3">
                <i className="bi bi-camera-reels-fill pe-3 ps-2"></i>
                <span>My Films</span>
            </NavLink>
            <span className="text-danger fs-1">Your Admin Page</span>

            <div className="d-flex ">
                <div >
                    <ul className="list-group list-group-flush rounded">
                        <li className="list-group-item">Gestione film</li>
                        <li className="list-group-item">Gestione Utenti</li>
                        <li className="list-group-item">Cambio Ruoli utenti</li>
                        <li className="list-group-item">Statistiche</li>
                        <li className="list-group-item">Fix</li>
                    </ul>
                </div>
                <div className="flex-grow-1 ms-2">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Film Name</th>
                                <th scope="col">Created at</th>
                                <th scope="col">Last Update</th>
                                <th scope="col">Modifiche</th>

                            </tr>
                        </thead>
                        {
                            films.map(film => (
                                <tbody key={film.id}>
                                    <tr>
                                        <th scope="row">{film.id}</th>
                                        <td>{film.title}</td>
                                        <td>{film.created_at}</td>
                                        <td>{film.updated_at}</td>
                                        <td>
                                            <button className="btn">✍️</button>
                                            <button className="btn">🗑️</button>
                                        </td>
                                    </tr>
                                </tbody>
                            ))
                        }
                    </table>
                </div>
            </div>
        </>
    )
}