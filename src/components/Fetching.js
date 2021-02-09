/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState, useEffect } from 'react';
import { inputForm, backgroundForm, filterStyle } from '../styling/inputForm';
import { cardContent, cards } from '../styling/cards';

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
      <div css={inputForm}>
        <h1>Corona - Party</h1>

        <input
          placeholder="First Name"
          onChange={(event) => {
            setFirstName(event.currentTarget.value);
          }}
          value={firstName}
        />

        <input
          placeholder="Last Name"
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
      <div css={backgroundForm} />
      <div css={filterStyle}>
        <span>Filter:</span>
        <select
          onChange={(event) => {
            setStatus(event.target.value);
          }}
        >
          <option>Choose your Coronies</option>
          <option>Attending</option>
          <option>Stay At Home Crew</option>
        </select>
      </div>
      <div css={cards}>
        {filterGuest.map((guest) => (
          <div css={cardContent} key={guest.id}>
            <p>
              {guest.firstName} {guest.lastName}
            </p>
            <button
              onClick={() => {
                deleteGuest(guest);
              }}
            >
              Vaccinated
            </button>
            <label htmlFor="checkbox">Is attending</label>
            <input
              type="checkbox"
              label="attend"
              id="checkbox"
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
