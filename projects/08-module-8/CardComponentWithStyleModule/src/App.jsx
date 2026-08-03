// import React from 'react';
// import Card from './components/Card/Card';
// import './styles/global.css'; // Ensure global styles are imported if you want them

// function App() {
//   return (
//     <div className='container'>
//       <h1>Component Styling with CSS Modules</h1>

//       <Card title='Primary Card'>
//         <p>This is the content for the primary themed card. It uses local styles managed by CSS Modules.</p>
//       </Card>

//       <Card title='Secondary Card' theme='secondary'>
//         <p>This card uses the secondary theme, demonstrating how props can control component styling.</p>
//         <ul>
//           <li>Item 1</li>
//           <li>Item 2</li>
//         </ul>
//       </Card>

//       <Card> {/* Default theme is primary */}
//         <p>This card also uses the primary theme by default.</p>
//       </Card>
//     </div>
//   );
// }

// export default App;


import React, { useState } from 'react';
import Modal from './components/Modal/Modal';
import './styles/global.css'; // Assuming global styles are still imported

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='container'>
      <h1>Modal Component with CSS Modules</h1>

      <button onClick={openModal}>Open Modal</button>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title='Important Information'
      >
        <p>This is the content of the modal. It can contain any React elements, such as text, forms, or lists.</p>
        <p>Click the 'X' button or outside the modal to close it.</p>
        {/* Example of adding footer buttons */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '20px' }}>
          <button onClick={closeModal} style={{ padding: '8px 15px', backgroundColor: '#6c757d', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
            Cancel
          </button>
          <button onClick={() => { alert('Action Saved!'); closeModal(); }} style={{ padding: '8px 15px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
            Save Changes
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default App;