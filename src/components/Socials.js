import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'


const Socials = () => (
    <React.Fragment>
        <a target="_blank" href="https://www.instagram.com/searchpartyhunts">
            <FontAwesomeIcon size="2x" icon={faInstagram} />
        </a>

        <a target="_blank" href="https://www.facebook.com/SearchPartyHunts/">
            <FontAwesomeIcon size="2x" icon={faFacebook} />
        </a>
    </React.Fragment>
);
export default Socials;
