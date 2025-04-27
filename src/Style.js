import { getBoxValue } from '../../bpl-tools/utils/functions';
import { getBackgroundCSS, getBorderCSS, getColorsCSS, getMultiShadowCSS } from '../../bpl-tools/utils/getCSS';

const Style = ({ attributes, clientId }) => {
	const { codeTypo, lineNumbers, height, width, wordWrap, padding, background, layout, border, shadow, clipBoardColors } = attributes;

	const mainSl = `#bhcCodeHighlight-${clientId}`;
	const directorySl = `${mainSl} .bhcBlockDirectory`;

	return <style dangerouslySetInnerHTML={{
		__html: `
		${directorySl} {
			padding: ${getBoxValue(padding)};
			${getBackgroundCSS(background)};
			width:${width?.desktop};
			height: ${height?.desktop === '0px' ? 'auto' : height?.desktop};
			${getBorderCSS(border)};
			box-shadow: ${getMultiShadowCSS(shadow)};
			${layout?.align === 'left' ? `margin-right:auto;` : layout?.align === 'right' ? `margin-left:auto;` : `margin: 0 auto;`};
			overflow:hidden;
		}

		@media (max-width: 768px) {
			${directorySl} {
				width:${width?.tablet || width?.desktop};
				height: ${(height?.tablet === '0px' ? 'auto' : height?.tablet) || (height?.desktop === '0px' ? 'auto' : height?.desktop)};
			}
		}

		@media (max-width: 576px) {
			${directorySl} {
				width:${width?.mobile || width?.tablet || width?.desktop};
				height: ${(height?.mobile === '0px' ? 'auto' : height?.mobile) || (height?.tablet === '0px' ? 'auto' : height?.tablet) || (height?.desktop === '0px' ? 'auto' : height?.desktop)};
			}
		}

		${directorySl} .theme pre code {
  			white-space: ${wordWrap && 'pre-wrap'};
		}

		${directorySl} .theme, ${directorySl} .theme span {
			font-size:${codeTypo?.desktop}px;
		}

		@media (max-width: 768px) {
			${directorySl} .theme, ${directorySl} .theme span {
				font-size:${codeTypo?.tablet || codeTypo?.desktop}px;
			}
		}

		@media (max-width: 576px) {
			${directorySl} .theme, ${directorySl} .theme span {
				font-size:${codeTypo?.mobile || codeTypo?.tablet || codeTypo?.desktop}px;
			}
		}

		${directorySl} .theme .hljs-ln-numbers {
			border-right: ${lineNumbers ? '1px' : 'none'} solid #CCC;
			padding-right: ${lineNumbers ? '5px' : '0px'};
		}

		${directorySl} .theme .hljs-ln-n {
			display:${lineNumbers ? 'block' : 'none'};
		}

		${directorySl} .theme .bchClickToCopy {
			${getColorsCSS(clipBoardColors)};
		}
		 
	`}} />;
}
export default Style;