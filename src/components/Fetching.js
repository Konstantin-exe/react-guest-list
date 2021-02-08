/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState, useEffect } from 'react';

export default function Fetching() {
  const baseUrl = 'http://localhost:5000';

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [list, setList] = useState([]);
  const [attending, setAttending] = useState(false);
  const [status, setStatus] = useState('');
  const [filterGuest, setFilterGuest] = useState([]);

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
  // Filter
  const setFilter = () => {
    switch (status) {
      case 'Attending':
        setFilterGuest(list.filter((guest) => guest.attending === true));
        break;
      case 'Stay At Home Crew':
        setFilterGuest(list.filter((guest) => guest.attending === false));
        break;
      default:
        setFilterGuest(list);
        break;
    }
  };
  // setting a Guest to attending
  async function attendingGuest(guest, checkedState) {
    await fetch(`${baseUrl}/${guest.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ attending: checkedState }),
    });
    setAttending(checkedState);
    // const updatedGuest = await response.json();
    // setAttending(updatedGuest);
  }

  // Get all Guests from API
  async function getAllGuests() {
    const response = await fetch(`${baseUrl}/`);
    const allGuests = await response.json();
    setList(allGuests);
  }
  useEffect(() => {
    getAllGuests();
    setFilter();
  }, [list, status]);

  // Deleting a Guest
  const deleteGuest = async (guest) => {
    const response = await fetch(`${baseUrl}/${guest.id}`, {
      method: 'DELETE',
    });
    // const deletedGuest = await response.json();
  };

  return (
    <div>
      <div>
        <h1>Corona - Party</h1>

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
      </div>
      <select
        onChange={(event) => {
          setStatus(event.target.value);
        }}
      >
        <option>Choose your Coronies</option>
        <option>Attending</option>
        <option>Stay At Home Crew</option>
      </select>
      <div>
        {filterGuest.map((guest) => (
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
              label="attend"
              checked={guest.attending}
              onChange={(event) => {
                attendingGuest(guest, event.currentTarget.checked);
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
