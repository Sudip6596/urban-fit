import React from "react";
import { GrDocumentStore } from "react-icons/gr";
import { FaUserAlt } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { HiSpeakerphone } from "react-icons/hi";

function Marketing() {
  return (
    <div className="marketing">
      <h2>Marketing Support & Software</h2>
      <div className="blue_underline"></div>
      <div className="support">
        <div className="software">
          <div>
            <GrDocumentStore className="support_icon" />
          </div>
          <h3>Billing Software</h3>
        </div>
        <div className="software">
          <div>
            <FaUserAlt className="support_icon" />
          </div>
          <h3>Customer Data</h3>
        </div>
        <div className="software">
          <div>
            <FaUsers className="support_icon" />
          </div>
          <h3>Stock Management</h3>
        </div>
        <div className="software">
          <div>
            <FaShoppingCart className="support_icon" />
          </div>
          <h3>Purchase Details</h3>
        </div>
      </div>
      <div className="software mic">
        <div>
          <HiSpeakerphone className="support_icon" />
        </div>
        <h3>Marketing Support</h3>
      </div>
    </div>
  );
}

export default Marketing;
