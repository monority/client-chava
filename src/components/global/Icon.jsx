import React from 'react'
import {FcContacts ,FcQuestions, FcFeedback, FcPhone} from 'react-icons/fc'

const components = {
    FcContacts,
    FcQuestions,
    FcFeedback,
    FcPhone,
};
const Icon = ({ type, size, className, action }) => {
    const SpecificIcon = components[type];
    return <SpecificIcon size={size} onClick={action} className={className} />;
};

export default Icon;