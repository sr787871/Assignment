import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import BookingForm from '../BookingForm/BookingForm';

const ShowDetails = () => {
  const { id } = useParams();
  const [showDetails, setShowDetails] = useState(null);
  const [isBookingFormVisible, setBookingFormVisibility] = useState(false);

  useEffect(() => {
    const fetchShowDetails = async () => {
      try {
        const response = await axios.get(`https://api.tvmaze.com/shows/${id}`);
        setShowDetails(response.data);
      } catch (error) {
        console.error('Error fetching show details:', error);
      }
    };

    fetchShowDetails();
  }, [id]);

  if (!showDetails) {
    return <p>Loading...</p>;
  }

  const handleOpenBookingForm = () => {
    setBookingFormVisibility(true);
  };

  const handleCloseBookingForm = () => {
    setBookingFormVisibility(false);
  };

  return (
    <div>
      <h1>Show Details</h1>
      <h2>{showDetails.name}</h2>
      <p>{showDetails.summary}</p>

      {/* Display other details as needed */}
      
      <button onClick={handleOpenBookingForm} className="btn btn-primary">Book Ticket</button>

      {/* BookingForm as a Bootstrap modal */}
      {isBookingFormVisible && (
        <BookingForm showName={showDetails.name} onClose={handleCloseBookingForm} />
      )}
    </div>
  );
};

export default ShowDetails;