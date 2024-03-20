import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Badge from 'react-bootstrap/Badge';
import Modal from '../Modal';
import Cart from '../screens/Cart';
import { useCart } from './ContextReducer';

export default function Navbar() {
  const [cartView, setCartView] = useState(false);
  let data = useCart();
  const navigate = useNavigate();

  const handlLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{
          backgroundColor: "#2B7A0B",
          position: "fixed",
          top: 0,
          margin: 0,
          width: "100%",
          zIndex: 1000,
        }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand fs-3 fst-bold mx-2" to="/">
            UrbanBites
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2">
              
              {localStorage.getItem("authToken") ? (
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/myOrder">
                    My Orders
                  </Link>
                </li>
              ) : (
                ""
              )}
            </ul>
            {!localStorage.getItem("authToken") ? (
              <div className="d-flex">
                <Link
                  className="btn me-2"
                  to="/login"
                  style={{
                    backgroundColor: "#ECECEC",
                    padding: "1px 2px",
                    width: "60px",
                    color: "#2B7A0B",
                  }}
                >
                  Log in
                </Link>
                <Link
                  className="btn me-3"
                  to="/creatuser"
                  style={{
                    backgroundColor: "#ECECEC",
                    padding: "1px 2px",
                    width: "60px",
                    color: "#2B7A0B",
                  }}
                >
                  Sign up
                </Link>
              </div>
            ) : (
              <div>
                <div className='btn me-4' onClick={()=>{setCartView(true)}} style={{ position: 'relative' }}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <FontAwesomeIcon icon={faShoppingCart} style={{ fontSize: '1.3rem', color: "#ECECEC" }} />
                    {data.length > 0 && (
                    <Badge pill bg="danger" style={{ fontSize: '0.6rem', position: 'absolute', top: '-6px', right: '-3px' }}>
                      {data.length}
                    </Badge>
                    )}
                  </div>
                </div>
              {cartView? <Modal onClose={()=>setCartView(false)}><Cart/></Modal>:null}

                <div
                  className="btn me-3 text-danger"
                  onClick={handlLogout}
                  style={{
                    backgroundColor: "#ECECEC",
                    padding: "1px 2px",
                    width: "70px"
                   }}
                >
                  Log Out
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
      <br/>
      <br/>
    </div>
  );
}

