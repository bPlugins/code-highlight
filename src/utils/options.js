import { __ } from '@wordpress/i18n';

import { verticalLineIcon, horizontalLineIcon } from './icons';

export const align = [
	{ value: 'left', label: __('Left', 'code-snippets-block') },
	{ value: 'right', label: __('Right', 'code-snippets-block') },
	{ value: 'center', label: __('Center', 'code-snippets-block') }
]

export const themeOpt = [
	{ value: 'default', label: __('Solid', 'code-snippets-block') },
	{ value: 'dark', label: __('Dark', 'code-snippets-block') },
	{ value: 'tomorrow', label: __('Tomorrow', 'code-snippets-block') },
	{ value: 'solarizedLight', label: __('Solarized Light', 'code-snippets-block') },
	{ value: 'twilight', label: __('Twilight', 'code-snippets-block') },
	{ value: 'porple', label: __('Porple', 'code-snippets-block') },
]

export const languageOpt = [
	// { value: 'markup', label: __('Markup', 'code-snippets-block') },
	{ value: 'html', label: __('HTML', 'code-snippets-block') },
	{ value: 'css', label: __('CSS', 'code-snippets-block') },
	{ value: 'scss', label: __('Scss', 'code-snippets-block') },
	{ value: 'less', label: __('less', 'code-snippets-block') },
	{ value: 'javascript', label: __('Javascript', 'code-snippets-block') },
	{ value: 'typeScript', label: __('TypeScript', 'code-snippets-block') },
	{ value: 'php', label: __('PHP', 'code-snippets-block') },
	{ value: 'ruby', label: __('Ruby', 'code-snippets-block') },
	{ value: 'Json', label: __('Json', 'code-snippets-block') },
	{ value: 'http', label: __('HTTP', 'code-snippets-block') },
	{ value: 'xml', label: __('XML', 'code-snippets-block') },
	{ value: 'rust', label: __('Rust', 'code-snippets-block') },
	{ value: 'dart', label: __('Dart', 'code-snippets-block') },
	{ value: 'java', label: __('Java', 'code-snippets-block') },
	{ value: 'sql', label: __('Sql', 'code-snippets-block') },
	{ value: 'go', label: __('Go', 'code-snippets-block') },
	{ value: 'kotlin', label: __('Kotlin', 'code-snippets-block') },
	{ value: 'julia', label: __('Julia', 'code-snippets-block') },
	{ value: 'python', label: __('Python', 'code-snippets-block') },
	{ value: 'swift', label: __('Swift', 'code-snippets-block') },
	{ value: 'scala', label: __('Scala', 'code-snippets-block') },
	{ value: 'haskell', label: __('Haskell', 'code-snippets-block') },
	{ value: 'perl', label: __('Perl', 'code-snippets-block') },
	{ value: 'c', label: __('C', 'code-snippets-block') },
	{ value: 'c', label: __('C++', 'code-snippets-block') },
]

export const layouts = [
	{ label: __('Vertical', 'code-snippets-block'), value: 'vertical', icon: verticalLineIcon },
	{ label: __('Horizontal', 'code-snippets-block'), value: 'horizontal', icon: horizontalLineIcon }
];

export const generalStyleTabs = [
	{ name: 'general', title: __('General', 'code-snippets-block') },
	{ name: 'style', title: __('Style', 'code-snippets-block') }
];