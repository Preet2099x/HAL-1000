import React, { useState } from 'react';
import './Sidebar.scss';
import { assets } from '../../assets/Assets';

const Sidebar = () => {
  const [extended, setExtended] = useState(false);

  return (
    <div className={`main-sidebar ${extended ? 'extended' : ''}`}>
      <div className="top">
        <div className='menu'>
          <img 
              onClick={() => setExtended(prev => !prev)} 
              className="menu-image" 
              src={assets.menu} 
              alt="menu" 
            />
        </div>

        <div className="new-chat">
          <img src={assets.plus} alt="new chat" />
          {extended && <p>New Chat</p>}
        </div>
        {extended && (
          <div className="recent">
            <p className="recent-title">Recent</p>
            <div className="recent-entry">
              <img src={assets.chat} alt="chat" />
              <p>What is React ...</p>
            </div>
          </div>
        )}
      </div>

      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.help} alt="help" />
          {extended && <p>Help</p>}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history} alt="history" />
          {extended && <p>Activity</p>}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.setting} alt="settings" />
          {extended && <p>Settings</p>}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
