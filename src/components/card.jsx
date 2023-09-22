import React from 'react';

function Card() {
  return (
    <div className="card-container">
      <div className="card">
        <div className="card-header">
          <div style={{ display: 'flex', gap: '1em', alignItems: 'center' }}>
            <img
              style={{ width: '3em', height: '3em', borderRadius: '50%' }}
              alt="avatar"
              className="avatar"
              src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
            />
            <div>
              <p> Shrimp and Chorizo Paella </p>{' '}
              <p style={{ color: 'gray', marginTop: '-0.7em' }}>
                {' '}
                September 14, 2016{' '}
              </p>{' '}
            </div>{' '}
          </div>{' '}
          <div> 🛠️ </div>{' '}
        </div>{' '}
        <div className="card-body">
          <img
            src="https://mui.com/static/images/cards/paella.jpg"
            className="card-image"
            alt="card"
          />
          <p style={{ color: 'gray', padding: '0 1em' }}>
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests.Add 1 cup of frozen peas along with
            the mussels, if you like.{' '}
          </p>{' '}
        </div>{' '}
        <div className="card-footer">
          <p> 💖 </p> <p> 📝 </p>{' '}
        </div>{' '}
      </div>{' '}
    </div>
  );
}

export default Card;
