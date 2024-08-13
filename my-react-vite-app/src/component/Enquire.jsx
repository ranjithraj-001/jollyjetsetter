import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import './Enquire.css';

const Enquire = () => {
    // State to handle form inputs
    const [formData, setFormData] = useState({
        name: '',
        city: '',
        email: '',
        phone: '',
        travelDestination: '',
        dateOfTravel: '',
        noOfPeople: '',
        vacationType: ''
    });

    // State to handle response messages
    const [responseMessage, setResponseMessage] = useState('');

    // State to manage the list of enquiries
    const [enquiries, setEnquiries] = useState([]);
    const [editEnquiry, setEditEnquiry] = useState(null);
    const [viewEnquiry, setViewEnquiry] = useState(null);

    // Fetch enquiries from the backend
    useEffect(() => {
        fetchEnquiries();
    }, []);

    const fetchEnquiries = async () => {
        try {
            const response = await Axios.get('http://localhost:5000/api/enquire');
            setEnquiries(response.data);
        } catch (error) {
            console.error('Error fetching enquiries', error);
        }
    };

    // Handle input changes
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await Axios.post('http://localhost:5000/api/enquire', formData);
            setResponseMessage(response.data.message);
            setFormData({ // Reset form after submission
                name: '',
                city: '',
                email: '',
                phone: '',
                travelDestination: '',
                dateOfTravel: '',
                noOfPeople: '',
                vacationType: ''
            });
            fetchEnquiries();
        } catch (error) {
            setResponseMessage('Error submitting enquiry, please try again later.');
        }
    };

    // Handle deletion of an enquiry
    const handleDelete = async (id) => {
        try {
            await Axios.delete(`http://localhost:5000/api/enquire/${id}`);
            setResponseMessage('Enquiry deleted successfully.');
            fetchEnquiries(); // Refresh the list after deletion
        } catch (error) {
            console.error('Error deleting enquiry:', error);
            setResponseMessage('Error deleting enquiry, please try again later.');
        }
    };

    // Handle editing of an enquiry
    const handleEdit = (enquiry) => {
        setEditEnquiry(enquiry);
    };

    // Handle viewing of an enquiry
    const handleView = (enquiry) => {
        setViewEnquiry(enquiry);
    };

    const handleUpdate = async () => {
        try {
            await Axios.put(`http://localhost:5000/api/enquire/${editEnquiry._id}`, editEnquiry);
            setResponseMessage('Enquiry updated successfully.');
            fetchEnquiries(); // Refresh the list after update
            setEditEnquiry(null);
        } catch (error) {
            console.error('Error updating enquiry', error);
            setResponseMessage('Error updating enquiry, please try again later.');
        }
    };

    return (
        <div className="enquire-page">
            <div className="image-container">
                <img src='s3.jpg' className="enquire-image" alt="Enquire" />
            </div>
            <div className="form-container">
                <h2>Enquire Form</h2>
                <form onSubmit={handleSubmit}>
                    {Object.keys(formData).map(key => (
                        <label key={key}>
                            {key.replace(/([A-Z])/g, ' $1').toUpperCase()}:
                            <input
                                type={key === 'dateOfTravel' ? 'date' : key === 'email' ? 'email' : 'text'}
                                name={key}
                                value={formData[key]}
                                onChange={handleChange}
                                required
                            />
                        </label>
                    ))}
                    <button type="submit">Submit</button>
                </form>
                {responseMessage && <p>{responseMessage}</p>}
            </div>
            <div className="grid-container">
                {enquiries.map(enquiry => (
                    <div key={enquiry._id} className="grid-item">
                        <h3>{enquiry.name}</h3>
                        <button onClick={() => handleView(enquiry)}>View</button>
                        <button onClick={() => handleEdit(enquiry)}>Edit</button>
                        <button onClick={() => handleDelete(enquiry._id)}>Delete</button>
                    </div>
                ))}
            </div>
            {editEnquiry && (
                <div className="edit-form">
                    <h3>Edit Enquiry</h3>
                    <form onSubmit={(e) => { e.preventDefault(); handleUpdate(); }}>
                        {Object.keys(editEnquiry).map(key => (
                            key !== '_id' && (
                                <label key={key}>
                                    {key.replace(/([A-Z])/g, ' $1').toUpperCase()}:
                                    <input
                                        type={key === 'dateOfTravel' ? 'date' : key === 'email' ? 'email' : 'text'}
                                        name={key}
                                        value={editEnquiry[key]}
                                        onChange={(e) => setEditEnquiry({ ...editEnquiry, [key]: e.target.value })}
                                        required
                                    />
                                </label>
                            )
                        ))}
                        <button type="submit">Update</button>
                        <button type="button" onClick={() => setEditEnquiry(null)}>Cancel</button>
                    </form>
                </div>
            )}
            {viewEnquiry && (
                <div className="view-details">
                    <h3>Enquiry Details</h3>
                    {Object.keys(viewEnquiry).map(key => (
                        key !== '_id' && (
                            <p key={key}>
                                {key.replace(/([A-Z])/g, ' $1').toUpperCase()}: {key === 'dateOfTravel' ? new Date(viewEnquiry[key]).toLocaleDateString() : viewEnquiry[key]}
                            </p>
                        )
                    ))}
                    <button onClick={() => setViewEnquiry(null)}>Close</button>
                </div>
            )}
        </div>
    );
}

export default Enquire;
