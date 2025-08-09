import React from 'react';
import './ParentShieldLanding.css';
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  useSignIn
} from '@clerk/clerk-react';

const App = () => {
  return (
    <div className="page">
      {/* Header */}
      <div className="header">
        <span>Parent Shield AI</span>

        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>

      {/* Main Content */}
      <div className="container">
        {/* Left - Illustration */}
        <div className="illustration-section">
          <img
            src="/image.png"
            width="3500px"
            alt="Parent Shield AI Security Illustration"
            className="illustration-image"
          />
        </div>

        {/* Right - Text */}
        <div className="content-section">
          <h1 className="main-heading">
            Stay One<br />
            Step Ahead<br />
            of Online<br />
            Risks!!
          </h1>

          {/* Show Dive In button when signed out */}
          <SignedOut>
            <SignInButton mode="modal">
              <button className="dive-btn">Dive In</button>
            </SignInButton>
          </SignedOut>
        </div>
      </div>
    </div>
  );
};

export default App;
