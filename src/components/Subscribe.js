/* eslint-disable jsx-a11y/label-has-associated-control */
import '../styles/Subscribe.css';
import React, { useState } from 'react';

const Subscribe = () => {
  const [emailValue, setEmailValue] = useState('');
  const [validility, setValidility] = useState('');
  const [style, setStyle] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const isEmailValid = /@/.test(emailValue);
    console.log(emailValue);

    if (isEmailValid === false) {
      setStyle({ color: '#da291c' });
      setValidility('Please use a valid email address');
    } else {
      setStyle({ color: 'green' });
      setValidility('Thank you for subscribing!');
    }
  };

  return (
    <div className="subscribeContainer">
      <h2>Subscribe by Email</h2>
      <p>
        Register to receive email updates on the latest collections, items,
        services and events
      </p>
      <form className="submitEmailDiv" action="" onSubmit={handleSubmit}>
        <label htmlFor="submitEmail">Email Address *</label>
        <input
          onChange={(e) => setEmailValue(e.target.value)}
          required
          type="text"
          id="submitEmail"
          name="submitEmail"
        />
        <input className="subscribeButton" type="submit" value="SUBSCRIBE" />
      </form>
      <p className="checkEmailText" style={style}>
        {validility}
      </p>
    </div>
  );
};
export default Subscribe;
