import React from 'react';
import Text from './Text';

const styleByType = {
	'title': { size: '32px', weight: '700', color: 'var(--black-dark)', lineHeight: '38.73px' },
	'subtitle': { size: '14px', weight: '600', color: 'var(--black-main)' },
	'section-title': { size: '18px', weight: '700', color: 'var(--black-main)' },
	'button' : { size: '15px', weight: '600', lineHeight: '18.15px'}
};

const Typography = ({ children, type, tag}) =>
	React.createElement(
		tag || 'span',
		{},
		<Text {...styleByType[type]}>{children}</Text>
	)
;

export default Typography;
