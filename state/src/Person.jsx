/*
Ceci est juste un assignement de TOP dans la leçon. il n'est normalement pas lié à cet App.

Voici l'assignment en question :
Update the Person component we’ve been using above.

Add two separate input fields for the first name and the last name. Either of these should be able to update the full name in the h1 element with every keystroke.
There are many ways you can do this. Keep in mind what you’ve learned in this lesson while coding it out.
*/

import { useState } from 'react';

function Person() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const fullName = firstName + ' ' + lastName;

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }

  return (
    <>

    <h2>Hello, {fullName}</h2>
      <label>
        First name:{' '}
        <input
          value={firstName}
          onChange={handleFirstNameChange}
        />
        {' '}
      </label>
      <label>
        Last name:{' '}
        <input
          value={lastName}
          onChange={handleLastNameChange}
        />
      </label>
    </>
  );
}

export default Person;