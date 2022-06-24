import React from 'react'
import { useContext } from 'react';
import AuthContext from '../Context/authentication/AuthContext';
import Modal from 'react-modal';
import "./ModalCollection.css"
import {useNavigate} from "react-router-dom"


export function LoginModal() {

  const navigate=useNavigate();
  const context = useContext(AuthContext);
  const { modalState, setModalState } = context;

  const closeHandler = () => {
    setModalState(false);
  }

  const handleEmailLogin=()=>{
    navigate("/login");
  }

  

  return (
    <div>
      {/* login modal */}
      <Modal isOpen={modalState}
        onRequestClose={() => {
          setModalState(false);
        }}
        style={
          {
            content: {
              backgroundColor: "white",
              color: "black",
              width: "30%",
              margin: "auto",
              marginTop: "80px",
              height: "60%"
            },
            overlay: {
              backgroundColor: "rgba(0, 0, 0, 0.7)",
              visibility: "visible"
            }
          }
        }
      >
        <button type="button" className="btn-close btn-close-black" aria-label="Close" style={{ position: "absolute", right: "10px", top: "10px", opacity: "2" }} onClick={closeHandler} ></button>
        <h2>Login</h2>
        <form className='my-3'>
          <div className='login-modal'>
            <div className='modal-button'>
              <img src={require("../Images/google.png")} alt="" />
              <h6>Login with Google</h6>
            </div>
            <div className='or' >
              <h5>OR</h5>
            </div>
            <div className='modal-button' onClick={handleEmailLogin}>
              <i class="fa fa-envelope" aria-hidden="true"></i>
              <h6>Login with Email</h6>
            </div>
            <div className='sign-up-button
            '>
              If you are new user Choose Option Login with Google for SignUp.
            </div>
          </div>
        </form>
      </Modal>
    </div >
  )
}

