import { useState } from "react";
import "../Components/Modal.css";

function Patient() {
  const [modal, setModal] = useState(false);
  const [modalDoc, setModalDoc] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };
  const toggleModalDoc = () => {
    setModalDoc(!modalDoc);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  if (modalDoc) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      <div className="container">
        <div className="patient">
          <div id="medicine">
            <h1 id="patient-heading">This is the Medicine</h1>
          </div>

          <div id="interaction">
            <button onClick={toggleModal} id="report">
              Report Progress
            </button>
            <button onClick={toggleModalDoc} id="doctor">
              Doctor comment
            </button>
          </div>

          <dialog className="modal" id="patient-fill">
            <h1>Fill Progress</h1>
            <label htmlFor="progress"></label>
            <input type="text" id="progress" name="progress" />
            <button onClick={toggleModal} id="submit">
              Submit
            </button>
          </dialog>

          <dialog className="modal" id="doctor-fill">
            <h1>Doctors Advice</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
              praesentium
              <br />
              voluptatibus modi necessitatibus debitis cum, quidem tempore{" "}
              <br />
              vero error aliquam id ab, recusandae aspernatur vitae, ullam{" "}
              <br />
              placeat cumque accusamus et?
            </p>
            <button id="doctor-fill-close">Close</button>
          </dialog>
        </div>
      </div>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Hello Patient</h2>
            <h1>Fill Progress</h1>
            <label htmlFor="progress"></label>
            <input type="text" id="progress" name="progress" />
            <button onClick={toggleModal} id="submit">
              Submit
            </button>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              perferendis suscipit officia recusandae, eveniet quaerat assumenda
              id fugit, dignissimos maxime non natus placeat illo iusto!
              Sapiente dolorum id maiores dolores? Illum pariatur possimus
              quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt
              placeat tempora vitae enim incidunt porro fuga ea.
            </p>
          </div>
        </div>
      )}

      {modalDoc && (
        <div className="modalDoc">
          <div onClick={toggleModalDoc} className="overlay"></div>
          <div className="modal-content">
            <h2>Hello Doctor</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              perferendis suscipit officia recusandae, eveniet quaerat assumenda
              id fugit, dignissimos maxime non natus placeat illo iusto!
              Sapiente dolorum id maiores dolores? Illum pariatur possimus
              quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt
              placeat tempora vitae enim incidunt porro fuga ea.
            </p>
            <button className="close-modal" onClick={toggleModalDoc}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Patient />
    </div>
  );
}

export default App;
