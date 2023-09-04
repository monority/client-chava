import React from 'react'
import {FcContacts ,FcQuestions, FcFeedback, FcPhone} from 'react-icons/fc'
import {FaPaw, FaShoppingBag,FaSearchLocation} from 'react-icons/fa'
import {FaLocationDot, FaStar, FaRegEye, FaChalkboardUser,FaRegMessage} from 'react-icons/fa6'

// Composants icônes pour pouvoir importer tout les icons de react dans le composant et ensuite
// Lui passé des props permettant de les modifier lors de l'appel au composant icon
const components = {
    FcContacts,
    FcQuestions,
    FcFeedback,
    FcPhone,
	FaPaw,
	FaLocationDot,
	FaShoppingBag,
	FaStar,
	FaRegEye,
	FaChalkboardUser,
	FaSearchLocation,
	FaRegMessage
    
};
const Icon = ({ type, size, className, action }) => {
    const SpecificIcon = components[type];
    return <SpecificIcon size={size} onClick={action} className={className} />;
};

export default Icon;