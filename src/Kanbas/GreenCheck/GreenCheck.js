import React from 'react';
import { FaCheck } from 'react-icons/fa';
import "./GreenCheck.css"

function CheckIconWithCircle() {
    return (
        <div className="circle">
            <FaCheck className="check-icon fa-2xx" />
        </div>
    );
}

export default CheckIconWithCircle;