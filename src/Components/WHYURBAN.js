import React from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { IoGitNetworkSharp } from "react-icons/io5";
import { BsFillClockFill } from "react-icons/bs";
import { IoFlagSharp } from "react-icons/io5";
import { GiFoldedPaper } from "react-icons/gi";
import { FaGraduationCap } from "react-icons/fa";
import { BsBookmarkStarFill } from "react-icons/bs";
import { BsFillHouseFill } from "react-icons/bs";
import { GiCash } from "react-icons/gi";
import { HiBuildingLibrary } from "react-icons/hi2";
import { GiTakeMyMoney } from "react-icons/gi";
import { RiLuggageCartFill } from "react-icons/ri";

function WHYURBAN() {
  return (
    <div className="why">
      <h2>Why UrbanFit</h2>
      <p className="why_p">
        Owning a franchise not only will give you the opportunity to take charge
        of your own successful business but also allows you to be a part of the
        movement in the business of health supplements. If you are accepted as a
        UrbanFit Franchise owner, you will be a partner of India’s fastest
        growing fitness tech brand and the most trustworthy name in the industry
      </p>
      <div className="stats">
        <div className="stat">
          <h4>15462</h4>
          <div className="underline"></div>
          <p>No of Client Per Month</p>
        </div>
        <div className="stat">
          <h4>3</h4>
          <div className="underline"></div>
          <p>No of Stores</p>
        </div>
        <div className="stat">
          <h4>10 Lacs</h4>
          <div className="underline"></div>
          <p>Revenue Generated Per Store</p>
        </div>
        <div className="stat">
          <h4>67</h4>
          <div className="underline"></div>
          <p>Brands Officially Connected</p>
        </div>
        <div className="stat">
          <h4>&infin;</h4>
          <div className="underline"></div>
          <p>Oppurtunities</p>
        </div>
      </div>
      <h2>UrbanFit Location</h2>
      <div className="locations">
        <p>UrbanFit Shop - F Residency</p>
        <p>UrbanFit Shop - Kharadi</p>
        <p>UrbanFit Shop - Bibewadi</p>
      </div>
      <h2>UrbanFit Franchies Vision</h2>
      <div className="visions">
        <div className="vision l">
          <BsShieldFillCheck className="icon" />
          <p>
            We aim to bring the change in fitness industry by establishing
            network of state of the art health supplement storess
          </p>
        </div>
        <div className="vision">
          <p className="zero">
            0<span>%</span>
          </p>
          <p>
            There is no possibility of fake products with UrbanFit due to our
            vast tie network of premium supplement brands
          </p>
        </div>
        <div className="vision r">
          <IoGitNetworkSharp className="icon" />
          <p>
            Our priority will always be our customer. We aim to build trust,
            happiness and loyalty for our customers
          </p>
        </div>
      </div>
      <h2>Prerequisites & Procedure</h2>
      <p className="procedure">
        We are looking for people who are ready and eager to work with us to
        successfully launch a franchise and smoothly operate it.
      </p>
      <div className="prequisites">
        <div className="prequisite">
          <BsFillClockFill className="icon" />
          <p>People willing to donate time and resources to the business</p>
        </div>
        <div className="prequisite">
          <IoFlagSharp className="icon" />
          <p>
            People with long term vision and the determination to make it happen
          </p>
        </div>
        <div className="prequisite">
          <GiFoldedPaper className="icon" />
          <p>Financial and logistical requirements and guidelines</p>
        </div>
        <div className="prequisite">
          <FaGraduationCap className="icon" />
          <p>
            A sound investor profile with sufficient back up and ability to
            sustain during adverse scenarios
          </p>
        </div>
        <div className="prequisite">
          <BsBookmarkStarFill className="icon" />
          <p>
            Attractive space in a high footfall area with a minimum carpet area
            of 200 sq. ft - 500 sq. ft.
          </p>
        </div>
        <div className="prequisite">
          <BsFillHouseFill className="icon" />
          <p>
            Willingness to adhere to high customer service standards set by
            UrbanFit.
          </p>
        </div>
      </div>
      <h2>Other Financials</h2>
      <div className="others">
        <div className="other">
          <div>
            <GiCash className="other_icon" />
          </div>
          <div className="other_details">
            <h5>Franchise Fee 5 Lacs</h5>
            <p>
              Start your Franchise Business Under Rs.5 Lakh Now. Check out
              India's most wanted Franchise Opportunity Under Rs.5 Lakh Only
            </p>
          </div>
        </div>
        <div className="other">
          <div>
            <HiBuildingLibrary className="other_icon" />
          </div>
          <div className="other_details">
            <h5>Interiors 1800-2200/sqft</h5>
            <p>
              The would be franchisor should have minimum shop area of 200 sqft
            </p>
          </div>
        </div>
        <div className="other">
          <div>
            <RiLuggageCartFill className="other_icon" />
          </div>
          <div className="other_details">
            <h5>Stock 8-15 Lacs</h5>
            <p>
              Franchisor is only allowed to purchase stock from the parent
              company
            </p>
          </div>
        </div>
        <div className="other">
          <div>
            <GiTakeMyMoney className="other_icon" />
          </div>
          <div className="other_details">
            <h5>Brand Ambassador Fee* 1.5 Lacs</h5>
            <p>
              The Brand Ambassador Fee is around 1.5 lakh to perform at an
              event.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WHYURBAN;
