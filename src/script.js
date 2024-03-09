import { createRoot } from 'react-dom/client';

import './style.scss';
import Style from './Style';
import MainArea from './MainArea';

// Block Directory
document.addEventListener('DOMContentLoaded', () => {
	const codeHighLightEles = document.querySelectorAll('.wp-block-bch-code-highlight');
	codeHighLightEles.forEach(codeHighlightEle => {
		const attributes = JSON.parse(codeHighlightEle.dataset.attributes);

		createRoot(codeHighlightEle).render(<>
			<Style attributes={attributes} clientId={attributes.cId} />
			<Directory attributes={attributes} />
		</>);
		codeHighlightEle?.removeAttribute('data-attributes');
	});
});

const Directory = ({ attributes }) => {
	const { code } = attributes;
	if (!code) {
		return <p></p>
	}
	return <div className="bhcBlockDirectory">
		<MainArea attributes={attributes} />
	</div>
}