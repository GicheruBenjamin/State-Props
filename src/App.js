

import React, { useState } from 'react';


// Navbar component (using props)
function Navbar(props) {
  return (
    <nav>
      <ul>
        {props.links.map((link, index) => (
          <li key={index}>
            <a href={link.url}>{link.text}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

// ProfilePage component (using state)
function ProfilePage() {
  const [user, setUser] = useState({
    name: 'John Doe',
    bio: 'I am a software developer',
    imageUrl: 'https://example.com/profile.jpg',
  });

  function handleUpdate(updatedUser) {
    setUser(updatedUser);
  }

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.bio}</p>
      <button onClick={() => handleUpdate({ ...user, name: 'Jane Doe' })}>
        Update Name
      </button>
    </div>
  );
}

// App component (using both props and state)
function App() {
  const links = [
    { text: 'Home', url: '/' },
    { text: 'About', url: '/about' },
    { text: 'Contact', url: '/contact' },
  ];

  return (
    <div>
      <Navbar links={links} />
      <ProfilePage />
    </div>
  );
}

export default App




