import { useState, useEffect } from 'react';

export default function Fetching() {
  const baseUrl = 'http://localhost:5000';

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [list, setList] = useState([]);
  const [attending, setAttending] = useState(false);

  // Create Guest function
  async function createGuest(firstName, lastName) {
    const response = await fetch(`${baseUrl}/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ firstName: firstName, lastName: lastName }),
    });
    // const createdGuest = await response.json();
  }
  // Fetching the data
  async function getAllGuests() {
    const response = await fetch(`${baseUrl}/`);
    const allGuests = await response.json();
    setList(allGuests);
  }
  useEffect(() => {
    getAllGuests();
  });

  const deleteGuest = async (guest) => {
    const response = await fetch(`${baseUrl}/${guest.id}`, {
      method: 'DELETE',
    });
    const deletedGuest = await response.json();
  };

  return (
    <div>
      <h1>Guest List</h1>

      <input
        onChange={(event) => {
          setFirstName(event.currentTarget.value);
        }}
        value={firstName}
      />

      <input
        onChange={(event) => {
          setLastName(event.currentTarget.value);
        }}
        value={lastName}
      />
      <button
        type="submit"
        onClick={(event) => {
          event.preventDefault();
          createGuest(firstName, lastName);
          getAllGuests();
          setFirstName('');
          setLastName('');
        }}
      >
        Submit
      </button>

      <div>
        {list.map((guest) => (
          <div key={guest.id}>
            {guest.firstName} {guest.lastName}
            {/* Delete Button  */}
            <button
              onClick={() => {
                deleteGuest(guest);
              }}
            >
              Delete
            </button>
            <input
              type="checkbox"
              label="attending"
              onChange={(e) => {
                setAttending(e.target.value);
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
