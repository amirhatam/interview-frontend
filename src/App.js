import React from 'react';
// import { MDBBtn, MDBContainer } from 'mdb-react-ui-kit';
import NavbarPage from './components/Navbar';
import { Home } from './views/Home';

function App() {
  return (
    <div >
      <NavbarPage />
      <Home />
    </div>
  );
}

export default App;
