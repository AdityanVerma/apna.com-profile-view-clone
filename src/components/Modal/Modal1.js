import React from 'react';
import './Modal.css';

function Modal1({onClose}) {

  return (
    <>
      <main>
        <div className="overlay" onClick={onClose}>
          <div className="modal-content font-600" onClick={(e) => e.stopPropagation()}>

            <div className="heading-section font-600">
              <h1 className="heading-modal">Edit experience level</h1>
              <svg onClick={onClose} xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" class="cursor-pointer"><path fill="#5E6C84" d="M13.37.634a1.007 1.007 0 0 0-1.426 0L6.999 5.569 2.054.624A1.007 1.007 0 1 0 .628 2.05l4.945 4.945L.628 11.94a1.007 1.007 0 1 0 1.426 1.426L6.999 8.42l4.945 4.945a1.007 1.007 0 1 0 1.426-1.426L8.425 6.995 13.37 2.05a1.014 1.014 0 0 0 0-1.416Z"></path></svg>
            </div>
            
            <div className="content-section">
              <div className="flex modal-content-inside">
                <h1 className="modal-heading">Experience level</h1>
                <form className="selection">
                  <input type="radio" id="diploma" name="exp-lvl" value="Fresher" checked="checked" />
                  <label for="diploma">Fresher</label>

                  <input type="radio" id="experienced" name="exp-lvl" value="Experienced" />
                  <label for="experienced">Experienced</label>
                </form>
              </div>
            </div>

            <div className="save-section">
              <button type="submit" disabled className="greenBtn heading">Save</button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Modal1;
