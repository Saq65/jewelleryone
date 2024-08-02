import React, { useState } from "react";
import {
  IoBagOutline,
  IoPersonOutline,
  IoSearchOutline,
} from "react-icons/io5";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

function Header() {
  const [arrow, setArrow] = useState(false);

  function toggleArrow() {
    setArrow((prevArrow) => !prevArrow);
  }

  return (
    <div className="container-fluid-lg">
      <div className="welcome">
        <div>
          <p>Welcome to the Ramzan Ali Jewellery website</p>
        </div>
      </div>
      <div className="nav">
        <div className="row w-100 align-items-center">
          <div className="col-lg-5">
            <div className="collection ">
              <ul>
                <li>COLLECTIONS</li>
                <li>JEWELLERY</li>
                <li>GIFTS</li>
                <li>CONTACTS</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="icon">RA Jeweller</div>
          </div>
          <div className="col-lg-3">
            <div
              className="w-75 d-flex align-items-center"
              style={{ gap: "0.5vh" }}
            >
              <div className="dropdown" id="up" onClick={toggleArrow}>
                <div style={{ position: "absolute", top: "5px", left: "67px" }}>
                  {arrow ? (
                    <IoIosArrowUp style={{ color: "#C6A856" }} />
                  ) : (
                    <IoIosArrowDown style={{ color: "#C6A856" }} />
                  )}
                </div>
                <select
                  style={{
                    backgroundColor: "unset",
                    color: "#C6A856",
                    border: "none",
                  }}
                  className="form-control w-75"
                  name=""
                  id=""
                >
                  <option value="India">Rupees</option>
                  <option value="Usa">Dollar</option>
                  <option value="Euro">United Kingdom</option>
                  <option value="Saudi">Riyal</option>
                  <option value="Tokyo">Yen</option>
                </select>
              </div>
              <div className="d-flex w-50 justify-content-between">
                <div>
                  <IoPersonOutline
                    style={{ color: "#C6A856", fontSize: "20px" }}
                  />
                </div>
                <div>
                  <IoSearchOutline
                    style={{ color: "#C6A856", fontSize: "20px" }}
                  />
                </div>
                <div>
                  <IoBagOutline
                    style={{ color: "#C6A856", fontSize: "20px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
