import React from 'react'
import {FcContacts ,FcQuestions, FcFeedback, FcPhone} from 'react-icons/fc'
import {FaPaw, FaShoppingBag} from 'react-icons/fa'
import {FaLocationDot, FaStar} from 'react-icons/fa6'
const components = {
    FcContacts,
    FcQuestions,
    FcFeedback,
    FcPhone,
	FaPaw,
	FaLocationDot,
	FaShoppingBag,
	FaStar,
    
};
const Icon = ({ type, size, className, action }) => {
    const SpecificIcon = components[type];
    return <SpecificIcon size={size} onClick={action} className={className} />;
};

export default Icon;