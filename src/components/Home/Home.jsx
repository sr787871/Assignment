/* eslint-disable no-undef */
import { Link, NavLink } from 'react-router-dom';
import { useGlobalContext } from '../../context/context' 

function Home() {
    const {showList} = useGlobalContext();
  return (
    <div className="container mt-5">
      <h1 className="mb-4">TV Show List</h1>
      <ul className="list-group">
        {showList.map((show) => 
        (
          <li key={show.show.id} className="list-group-item">
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                {show.show.image && show.show.image.medium && (
                  <img
                    src={show.show.image.medium}
                    alt={show.show.name}
                    className="img-thumbnail mr-3"
                    style={{ maxWidth: '100px', maxHeight: '100px' }}
                  />
                )}
                <div>
                  <h5 className="mb-1">{show.show.name}</h5>
                  <p className="mb-1">Genre: {show.show.genres.join(', ')}</p>
                  <p className="mb-0">Language: {show.show.language}</p>
                </div>
              </div>
              <Link to={`show/${show.show.id}`}>
                <button className="btn btn-primary">View Details</button>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home