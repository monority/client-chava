import React from 'react';
import { Collapse } from 'antd';


const Accordeon = ({items}) => {
	return (
		<Collapse accordion items={items}/>
	)
}
export default Accordeon;