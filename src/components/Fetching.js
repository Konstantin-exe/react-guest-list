import { useState, useEffect } from 'react';

export default function Fetching() {
  const baseUrl = 'http://localhost:5000';

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [list, setList] = useState([]);

  // Create Guest function
  async function createGuest(firstName, lastName) {
    const response = await fetch(`${baseUrl}/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ firstName: firstName, lastName: lastName }),
    });
    const createdGuest = await response.json();
    // console.log(createdGuest);
  }
  // Fetching the data
  async function getAllGuests() {
    const response = await fetch(`${baseUrl}/`);
    const allGuests = await response.json();
    console.log(allGuests);
  }

  return (
    <div>
      <h1>Guest List</h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          // createGuest(inputFirstName, inputLastName);
          getAllGuests();
        }}
      >
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
          onClick={() => {
            setList();
          }}
        >
          Submit
        </button>
      </form>
      <ul>
        {list.map((guest) => (
          <li key={guest.id}>
            {firstName}
            {lastName}
          </li>
        ))}
      </ul>
      <p>{firstName}</p>
      <p>{lastName}</p>
    </div>
  );
}
