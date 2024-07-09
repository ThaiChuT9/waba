import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

const locations = [
  {
    name: 'Location 1',
    address: '123 Main St, City, Country',
    phone: '+1234567890'
  },
  {
    name: 'Location 2',
    address: '456 Second St, City, Country',
    phone: '+1234567891'
  },
  {
    name: 'Location 3',
    address: '789 Third St, City, Country',
    phone: '+1234567892'
  },
  {
    name: 'Location 4',
    address: '101 Fourth St, City, Country',
    phone: '+1234567893'
  },
  {
    name: 'Location 5',
    address: '202 Fifth St, City, Country',
    phone: '+1234567894'
  },
  {
    name: 'Location 6',
    address: '303 Sixth St, City, Country',
    phone: '+1234567895'
  },
  {
    name: 'Location 7',
    address: '404 Seventh St, City, Country',
    phone: '+1234567896'
  },
  {
    name: 'Location 8',
    address: '505 Eighth St, City, Country',
    phone: '+1234567897'
  },
  {
    name: 'Location 9',
    address: '606 Ninth St, City, Country',
    phone: '+1234567898'
  },
  {
    name: 'Location 10',
    address: '707 Tenth St, City, Country',
    phone: '+1234567899'
  }
];



const Contactus = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (index) => {
    if (openDropdown === index) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(index);
    }
  };

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    reason: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    address: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      setStep(3);
    }
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  return (
    <div className="container mx-auto ">
      <h1 className="text-4xl font-bold mb-16 text-center">How/Where you can contact us</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {locations.map((location, index) => (
          <div key={index}>
            <button
              onClick={() => toggleDropdown(index)}
              className="w-full bg-gray-800 text-white p-4 rounded-md text-left"
            >
              {location.name}
            </button>
            {openDropdown === index && (
              <div className="bg-gray-100 p-4 rounded-md mt-2">
                <p><strong>Address:</strong> {location.address}</p>
                <p><strong>Phone:</strong> {location.phone}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      <p className='text-center mt-8 text-xl'>For commonly asked questions, please visit:</p>
      <div className="flex justify-center mt-2">
        <NavLink to="/faq" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none mt-2">
          FAQ
        </NavLink>
      </div>
      <div className="mt-32 text-center">
        <h1 className="text-4xl font-bold">INQUIRES</h1>
        <p className="text-xl mt-4">For any inquiries, please choose from any of the following options.</p>
      </div>

      <div className="border p-4 rounded-md mt-6">
        <div className="mb-4">
          <div className="flex items-center">
            <div className={`flex-1 text-center ${step === 1 ? 'font-bold' : ''}`}>1. Inquiries</div>
            <div className="flex-1 h-1 bg-gray-300 mx-2"></div>
            <div className={`flex-1 text-center ${step === 2 ? 'font-bold' : ''}`}>2. Contact</div>
          </div>
        </div>
        {step === 1 && (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <select name="reason" value={formData.reason} onChange={handleChange} className='w-full p-2 border rounded' required>
                <option value="" disabled>REASON FOR INQUIRY</option>
                <option value="Advanced Reservations">Advanced Reservations</option>
                <option value="Advertising">Advertising</option>
                <option value="Corporate Partnership/Sponsorship">Corporate Partnership/Sponsorship</option>
                <option value="Donation Request">Donation Request</option>
                <option value="Franchising Requests">Franchising Requests</option>
                <option value="Gift Cards">Gift Cards</option>
                <option value="Leagues">Leagues</option>
              </select>
            </div>
            <div className="flex justify-end">
              <button type='submit' className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5'>Submit</button>
            </div>
          </form>
        )}
        {step === 2 && (
          <form onSubmit={handleSubmit}>
            <div className="mb-4 grid grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                className="w-full p-2 border rounded"
                required
              />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Address"
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div className="flex justify-between">
              <button
                type="button"
                onClick={handlePrevious}
                className="text-white bg-gray-500 hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5"
              >
                Previous
              </button>
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
              >
                Next
              </button>
            </div>
          </form>
        )}
        {step === 3 && (
          <div className="text-center p-4 bg-green-100 border border-green-400 text-green-700 rounded">
            Request sent successfully!
          </div>
        )}
      </div>

    </div>
  )
}

export default Contactus