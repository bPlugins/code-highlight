import { __ } from '@wordpress/i18n';

import { verticalLineIcon, horizontalLineIcon } from './icons';

export const align = [
	{ value: 'left', label: __('Left', 'code-highlight') },
	{ value: 'right', label: __('Right', 'code-highlight') },
	{ value: 'center', label: __('Center', 'code-highlight') }
]

export const themeOpt = [
	{ value: 'default', label: __('Solid', 'code-highlight') },
	{ value: 'dark', label: __('Dark', 'code-highlight') },
	{ value: 'tomorrow', label: __('Tomorrow', 'code-highlight') },
	{ value: 'solarizedLight', label: __('Solarized Light', 'code-highlight') },
	{ value: 'twilight', label: __('Twilight', 'code-highlight') },
	{ value: 'porple', label: __('Porple', 'code-highlight') },
]

export const languageOpt = [
	// { value: 'markup', label: __('Markup', 'code-highlight') },
	{ value: 'html', label: __('HTML', 'code-highlight') },
	{ value: 'css', label: __('CSS', 'code-highlight') },
	{ value: 'scss', label: __('Scss', 'code-highlight') },
	{ value: 'less', label: __('less', 'code-highlight') },
	{ value: 'javascript', label: __('Javascript', 'code-highlight') },
	{ value: 'typeScript', label: __('TypeScript', 'code-highlight') },
	{ value: 'php', label: __('PHP', 'code-highlight') },
	{ value: 'ruby', label: __('Ruby', 'code-highlight') },
	{ value: 'Json', label: __('Json', 'code-highlight') },
	{ value: 'http', label: __('HTTP', 'code-highlight') },
	{ value: 'xml', label: __('XML', 'code-highlight') },
	{ value: 'rust', label: __('Rust', 'code-highlight') },
	{ value: 'dart', label: __('Dart', 'code-highlight') },
	{ value: 'java', label: __('Java', 'code-highlight') },
	{ value: 'sql', label: __('Sql', 'code-highlight') },
	{ value: 'go', label: __('Go', 'code-highlight') },
	{ value: 'kotlin', label: __('Kotlin', 'code-highlight') },
	{ value: 'julia', label: __('Julia', 'code-highlight') },
	{ value: 'python', label: __('Python', 'code-highlight') },
	{ value: 'swift', label: __('Swift', 'code-highlight') },
	{ value: 'scala', label: __('Scala', 'code-highlight') },
	{ value: 'haskell', label: __('Haskell', 'code-highlight') },
	{ value: 'perl', label: __('Perl', 'code-highlight') },
	{ value: 'c', label: __('C', 'code-highlight') },
	{ value: 'c', label: __('C++', 'code-highlight') },
]

export const layouts = [
	{ label: __('Vertical', 'block-directory'), value: 'vertical', icon: verticalLineIcon },
	{ label: __('Horizontal', 'block-directory'), value: 'horizontal', icon: horizontalLineIcon }
];

export const generalStyleTabs = [
	{ name: 'general', title: __('General', 'block-directory') },
	{ name: 'style', title: __('Style', 'block-directory') }
];