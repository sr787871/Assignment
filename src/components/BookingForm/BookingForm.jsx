const BookingForm = ({ showName, onClose }) => {
    const handleSubmit = (e) => {
      e.preventDefault();
      alert(`Booking confirmed for ${showName}`);
      onClose(); // Close the modal after booking
    };
  
    return (
      <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Booking Form</h5>
              <button type="button" className="close" onClick={onClose} aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="movieName">Show Name:</label>
                  <input type="text" className="form-control" id="movieName" value={showName} readOnly />
                </div>
                <div className="form-group">
                  <label htmlFor="ticketCount">Number of Tickets:</label>
                  <input type="number" className="form-control" id="ticketCount" required />
                </div>
  
                {/* Add more form fields as needed */}
                
                <button type="submit" className="btn btn-primary">Book Ticket</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default BookingForm;