
export default function FilmReviews({ film }) {


    function starsVote(vote) {
        return '★'.repeat(vote)
    }

    return (
        <>
            {
                film.reviews?.map(review => (
                    <div key={review.id}>
                        <div className="text-primary">{review.name}</div>
                        <div className="text-danger"><span className="text-warning">{starsVote(review.vote)}</span> {film.title}</div>
                        <div className="text-white">{review.text}</div>
                    </div>
                ))
            }
        </>
    )
}