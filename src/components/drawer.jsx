import React, { useState } from 'react';
import './drawer.css';
import { navbarItems } from '../data';

function Drawer() {
  const [isCollapse, setIsCollapse] = useState(false);

  return (
    <div className="drawer-container">
      <h1>Drawer</h1>
      <div style={{ width: '80%', height: '70%' }}>
        <div className="top-bar">
          <p
            onClick={() => setIsCollapse(!isCollapse)}
            style={{ cursor: 'pointer' }}
          >
            🛠️
          </p>
          <h3>Variant Collapsable Drawer</h3>
        </div>
        <div className="main">
          <div
            style={{ background: 'rgba(13, 105, 105, 1)' }}
            className="drawer"
          >
            {navbarItems.map(({ title, icon }) => (
              <div className="nav-items">
                <p>{icon}</p>
                {isCollapse && <h4>{title}</h4>}
              </div>
            ))}
          </div>
          <div
            style={{
              background: 'rgba(13, 45, 45, 1)',
              color: 'white',
              opacity: '0.9',
            }}
            className="content"
          >
            <p>
              Once upon a time, there was a programmer who wrote beautiful code.
              Everyone who saw it was inspired to write better code themselves.
              The end.
            </p>
            <p>
              But then, one day, the programmer encountered a bug that they just
              couldn't fix. They tried everything they knew, but nothing worked.
              They were about to give up when they remembered a piece of advice
              they had once received: "When all else fails, take a break and
              come back to it later." So the programmer took a break, went for a
              walk, and cleared their mind. When they returned, they looked at
              the code with fresh eyes and saw the problem immediately. They
              fixed the bug and the code was beautiful once again.
            </p>
            <p>
              And that's the story of how the programmer learned that sometimes
              the best way to solve a problem is to step away from it for a
              little while. It's important to take breaks and give your mind a
              chance to rest and recharge. When you come back to the problem,
              you'll be able to approach it with a fresh perspective and find a
              solution that you might not have seen before.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
