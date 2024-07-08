import React from 'react';
import './App.css';
import './normal.css'
function App() {
  return (
    <div className="App">
      <aside className='sidemenu'>
        <div className='side-menu-button'>
       <span>+</span>   New Chat
        </div>
      </aside>
      <section className='chatbox'>
      <div className="chatlog">
        <div className="chat-message">
          <div className="chat-message-center">
          <div className="avatar">
              
          </div>
          <div className="message">
              Helo
          </div>  
          </div>
        </div>
        <div className="chat-message chatgpt">
          <div className="chat-message-center">
          <div className="avatar">
              <img src="https://blog.bismart.com/hs-fs/hubfs/Imported_Blog_Media/los-10-mejores-bots-disponibles-en-Internet-Sep-26-2023-08-53-22-8616-AM.jpg?width=5184&name=los-10-mejores-bots-disponibles-en-Internet-Sep-26-2023-08-53-22-8616-AM.jpg" alt="1" />
          </div>
          <div className="message">
              Helo
          </div>  
          </div>
        </div>
      </div>
          <div className="chat-input-holder">
            <textarea rows='1'className="chat-input" placeholder='Type your mesaage here'></textarea>
          </div>
      </section>
    </div>
  );
}

export default App;
