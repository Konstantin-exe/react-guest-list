import { useState, useEffect } from 'react';

export default function Fetching() {
  const baseUrl = 'http://localhost:5000';

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [list, setList] = useState([]);
  const [attending, setAttending] = useState();

  // Create Guest on API
  async function createGuest(firstName, lastName) {
    const response = await fetch(`${baseUrl}/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
      }),
    });
    // const createdGuest = await response.json();
  }

  const attendingGuest = async (guest) => {
    const response = await fetch(`${baseUrl}/${guest.attending}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ attending: true }),
    });
    const updatedGuest = await response.json();
    setAttending(updatedGuest);
  };

  // Get all Guests from API
  async function getAllGuests() {
    const response = await fetch(`${baseUrl}/`);
    const allGuests = await response.json();
    setList(allGuests);
  }
  useEffect(() => {
    getAllGuests();
  });

  // Deleting a Guest
  const deleteGuest = async (guest) => {
    const response = await fetch(`${baseUrl}/${guest.id}`, {
      method: 'DELETE',
    });
    // const deletedGuest = await response.json();
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
              // id={guest.attending}
              onChange={() => {
                setAttending(guest.attending);
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
