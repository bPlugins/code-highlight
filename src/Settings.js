
import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import { InspectorControls, } from '@wordpress/block-editor';
import { PanelBody, PanelRow, RangeControl, SelectControl, TabPanel, TextareaControl, ToggleControl, __experimentalUnitControl as UnitControl, __experimentalBoxControl as BoxControl, } from '@wordpress/components';
import Select from 'react-select';
import produce from 'immer';

// Settings Components
import { tabController } from '../../Components/utils/functions';
import { align, generalStyleTabs, languageOpt, themeOpt } from './utils/options';
import { BDevice, Background, BorderControl, ColorsControl, Label, MultiShadowControl } from '../../Components';
import { pxUnit, vhUnit } from '../../Components/utils/options';

const Settings = ({ attributes, setAttributes }) => {
	const { language, code, theme, lineNumbers, height, width, codeTypo, clipBoard, wordWrap, padding, background, layout, border, shadow, clipBoardColors } = attributes;

	const [DWidth, setDWidth] = useState('tablet');
	const [DHeight, setDHeight] = useState('desktop');
	const [typo, setTypo] = useState('desktop');

	// useEffect(() => {
	// 	const myDiv = document.querySelector('.my-div');

	// 	CodeMirror(myDiv, {
	// 		lineNumbers: true,
	// 		tabSize: 2,
	// 		value: 'console.log("Hello, World");'
	// 	});
	// }, []);


	return <>
		<InspectorControls>
			<TabPanel className='bPlTabPanel pChTabPanel' activeClass='activeTab' tabs={generalStyleTabs} onSelect={tabController}>{tab => <>
				{'general' === tab.name && <>

					<PanelBody className='bPlPanelBody' title={__('Code HighLight', 'code-highlight')} initialOpen={true}>
						<Select className='bchSelectControl' value={languageOpt.find(option => option.value === language)} options={languageOpt} isSearchable onChange={(val) => setAttributes({ language: val?.value })} />
						{/* <div className="my-div">

						</div> */}
						<TextareaControl className='mt10' label={__('Code', 'code-highlight')} value={code} rows={12} onChange={val => setAttributes({ code: val })} />

						<ToggleControl label={__('Line Number', 'code-highlight')} className='mt10' checked={lineNumbers} onChange={val => setAttributes({ lineNumbers: val })} />

						<ToggleControl label={__('Clipboard', 'code-highlight')} className='mt10' checked={clipBoard} onChange={val => setAttributes({ clipBoard: val })} />

						<ToggleControl label={__('Word Wrap', 'code-highlight')} className='mt10' checked={wordWrap} onChange={val => setAttributes({ wordWrap: val })} />
					</PanelBody>

					<PanelBody className='bPlPanelBody' title={__('Theme', 'code-highlight')} initialOpen={false}>
						<PanelRow>
							<Label className="mt0">{__('Select', 'code-highlight')}</Label>
							<SelectControl options={themeOpt} className='mt10' value={theme} onChange={val => setAttributes({ theme: val })} />
						</PanelRow>

					</PanelBody>
				</>}

				{'style' === tab.name && <>

					<PanelBody className=' bPlPanelBody' title={__('Layout', 'code-highlight')} initialOpen={false}>
						<BoxControl className='' label={__('Padding', 'code-highlight')} values={padding} onChange={val => setAttributes({ padding: val })} resetValues={{ top: '0px', left: '0px', right: '0px', bottom: '0px' }} />

						{/* Width  */}
						<PanelRow className=''>
							<p></p>
							<BDevice device={DWidth} onChange={val => setDWidth(val)} />
						</PanelRow>
						<UnitControl className='mt0' label={__('Width', 'code-highlight')} labelPosition='left' value={width[DWidth]} onChange={val => { setAttributes({ width: { ...width, [DWidth]: val } }) }} units={[pxUnit(400), vhUnit(30)]} isResetValueOnUnitChange={true} beforeIcon='grid-view' />

						{/* height */}
						<PanelRow className=''>
							<p></p>
							<BDevice device={DHeight} onChange={val => setDHeight(val)} />
						</PanelRow>
						<UnitControl className='' label={__('Height', 'code-highlight')} labelPosition='left' value={height[DHeight]} onChange={val => { setAttributes({ height: { ...height, [DHeight]: val } }) }} units={[pxUnit(400), vhUnit(30)]} isResetValueOnUnitChange={true} beforeIcon='grid-view' />
						<PanelRow>
							<Label className='mt0'>{__('Align', 'code-highlight')}</Label>
							<SelectControl className='mt10' options={align} value={layout?.align} onChange={val => setAttributes({ layout: { ...layout, align: val } })} />
						</PanelRow>

						<BorderControl className='' label={__('Border', 'code-highlight')} value={border}
							onChange={(val) => setAttributes({ border: val })} />

						<MultiShadowControl label={__('Shadow:', 'sound-cloud')} value={shadow} onChange={val => setAttributes({ shadow: val })} produce={produce} />
					</PanelBody>

					<PanelBody className='bPlPanelBody' title={__('Background', 'code-highlight')} initialOpen={false}>
						<Background className='' label={__('Background', 'code-highlight')} value={background} onChange={val => setAttributes({ background: val })} />
					</PanelBody>

					<PanelBody className=' bPlPanelBody' title={__('Code', 'code-highlight')} initialOpen={false}>

						<PanelRow className=''>
							<p></p>
							<BDevice device={typo} onChange={val => setTypo(val)} />
						</PanelRow>

						<RangeControl className='' label={__('Font-size', 'code-highlight')} labelPosition='left' value={codeTypo[typo]} onChange={val => { setAttributes({ codeTypo: { ...codeTypo, [typo]: val } }) }} />
					</PanelBody>

					<PanelBody className='' title={__('Copy Clipboard', 'code-highlight')} initialOpen={false}>
						<ColorsControl className='' value={clipBoardColors} onChange={val => setAttributes({ clipBoardColors: val })} />
					</PanelBody>
				</>}
			</>}</TabPanel>
		</InspectorControls>
	</>;
};
export default Settings;