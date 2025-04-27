import { useEffect } from 'react';


// Settings Components
import { tabController } from '../../bpl-tools/utils/functions';

import Settings from './Settings';
import Style from './Style';
import MainArea from './MainArea';

const Edit = props => {
	const { className, attributes, setAttributes, clientId, isSelected } = props;
	const { code } = attributes;

	useEffect(() => { clientId && setAttributes({ cId: clientId.substring(0, 10) }); }, [clientId]); // Set & Update clientId to cId
	useEffect(() => tabController(), [isSelected]);

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