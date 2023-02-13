import React from 'react';

import success from '../assets/success.svg'

export const Success = ({ count }) => {
  return (
    <div class="success-block">
      <img src={success} alt="Success" />
      <h3>Yosh!</h3>
      <p>All {count} heroes added as friends.</p>
      <button onClick={() => window.location.reload()} className="send-invite-btn">Back</button>
    </div>
  );
};
