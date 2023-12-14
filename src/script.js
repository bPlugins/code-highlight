import { render } from 'react-dom';

import './style.scss';
import Style from './Style';
import MainArea from './MainArea';

// Block Directory
document.addEventListener('DOMContentLoaded', () => {
	const allBlockDirectory = document.querySelectorAll('.wp-block-bch-code-highlight');
	allBlockDirectory.forEach(directory => {
		const attributes = JSON.parse(directory.dataset.attributes);

		render(<>
			<Style attributes={attributes} clientId={attributes.cId} />

			<Directory attributes={attributes} />
		</>, directory);

		directory?.removeAttribute('data-attributes');
	});
});

const Directory = ({ attributes }) => {
	const { columns, code } = attributes;
	if (!code) {
		return <p></p>
	}
	return <div className="bhcBlockDirectory">
		<MainArea attributes={attributes} />
	</div>
}