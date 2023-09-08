import React from 'react';
import { Collapse } from 'antd';

// Accordéon de ant design pour la page foire aux questions
// Items en props pour récupérer sur la page foire aux questions qui nous permet d'assigner des titres et du contenu à l'accordéon
const Accordeon = ({ items }) => {
	return (
		<Collapse accordion items={items} />
	)
}
export default Accordeon;

