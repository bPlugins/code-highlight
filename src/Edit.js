import { useState, useEffect } from 'react';
import { __ } from '@wordpress/i18n';
import { RichText } from '@wordpress/block-editor';


// Settings Components
import { BplMediaPlaceholder } from '../../Components';
import { tabController } from '../../Components/utils/functions';

import Settings from './Settings';
import Style from './Style';
import MainArea from './MainArea';

const Edit = props => {
	const { className, attributes, setAttributes, clientId, isSelected } = props;
	const { items, language, code } = attributes;

	useEffect(() => { clientId && setAttributes({ cId: clientId.substring(0, 10) }); }, [clientId]); // Set & Update clientId to cId
	useEffect(() => tabController(), [isSelected]);


	// if (!code) {
	// 	return <h2 className='bchEmptyNotice'>Insert Your Code</h2>
	// }

	return <>
		<Settings attributes={attributes} setAttributes={setAttributes} />

		<div className={className} id={`bhcCodeHighlight-${clientId}`}>
			<Style attributes={attributes} clientId={clientId} />

			{!code ? <h2 className='bchEmptyNotice'>Insert Your Code</h2> : <div className="bhcBlockDirectory ">
				<MainArea attributes={attributes} /></div>}
		</div>
	</>;
};
export default Edit;