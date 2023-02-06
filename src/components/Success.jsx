import React from 'react';

export const Success = ({ count }) => {
  return (
    <div class="success-block">
      <img src="/assets/success.svg" alt="Success" />
      <h3>Yosh!</h3>
      <p>All {count} heroes added as friends.</p>
      <button onClick={() => window.location.reload()} className="send-invite-btn">Back</button>
    </div>
  );
};
