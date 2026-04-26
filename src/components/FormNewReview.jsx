import { useState } from 'react'
import axios from 'axios'


export default function FormNewMovie({ filmId, setAddNewReviewCheck }) {


    //console.log(filmId);

    const [newReview, setNewReview] = useState({
        movie_id: Number(filmId),
        name: '',
        vote: 1,
        text: ''
    })



    function submitNewReview(e) {

        e.preventDefault()
        // console.log(newReview);
        setAddNewReviewCheck(false)
        const api_url = import.meta.env.VITE_API_ADDRESS + '/movies/'

        axios.post(api_url, newReview)
            .then(datas => {
                //console.log(datas.data)
                setAddNewReviewCheck(true)
            }
            )
    }


    return (
        <>
            <form onSubmit={submitNewReview} className='text-start mx-3'>
                <input name='name' type="text" className="rounded" placeholder="Nome" aria-label="Nome" value={newReview.name} onChange={(e) => { setNewReview({ ...newReview, [e.target.name]: e.target.value }) }} required />
                <select name='vote' className="rounded ms-3 text-center" aria-label="Default select example" value={newReview.vote} onChange={(e) => { setNewReview({ ...newReview, [e.target.name]: Number(e.target.value) }) }} required>
                    <option value="1">★</option>
                    <option value="2">★★</option>
                    <option value="3">★★★</option>
                    <option value="4">★★★★</option>
                    <option value="5">★★★★★</option>
                </select>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label text-white">Scrivici cosa ne pensi</label>
                    <textarea name='text' className="form-control" id="exampleFormControlTextarea1" rows="3" value={newReview.text} onChange={(e) => { setNewReview({ ...newReview, [e.target.name]: e.target.value }) }} required />
                </div>
                <button className='btn btn-primary'>Submit</button>
            </form>
        </>
    )
}