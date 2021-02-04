import { useState, useEffect } from 'react';

export default function Fetching() {
  const baseUrl = 'http://localhost:5000';

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

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
          const inputFirstName = document.getElementById('firstName').value;
          const inputLastName = document.getElementById('lastName').value;
          createGuest(inputFirstName, inputLastName);
          getAllGuests();
        }}
      >
        <input id="firstName" />
        <input id="lastName" />
        <button>Submit</button>
      </form>

      <p>
        {firstName}
        {lastName}
      </p>
    </div>
  );
}
