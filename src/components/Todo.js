import React from "react";
import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
  const [showModal, setShowModal] = useState(false);

  function deleteHandler() {
    setShowModal(!showModal);
  }

  function closeModalHandler() {
    setShowModal(false);
  }

  return (
    <div>
      <div className="card">
        <h2>{props.title}</h2>
        <div className="actions">
          <button className="btn" onClick={deleteHandler}>
            Delete
          </button>
        </div>

        {showModal && <Modal></Modal>}
        {showModal && <Backdrop onClick={closeModalHandler}></Backdrop>}
      </div>
    </div>
  );
}

export default Todo;
