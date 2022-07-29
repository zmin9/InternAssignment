const colors = {
	blue: {
		main: 'hsl(205, 90%, 50%)',
		light: 'hsl(205, 90%, 90%)',
	},
	red: {
		main: 'hsl(205, 90%, 50%)',
		light: 'hsl(205, 90%, 90%)',
	},
	black: {
		dark: '#292B35',
		main: '#575767',
		light: '#B9B9BE',
	},
	bg: {
		main: 'hsl(0, 0%, 97%)',
		light: 'hsla(0, 0%, 0%, 0.06)',
	},
};

const button = {
	primary: `
      background: ${colors.blue.main};
      color: ${colors.bg.main};
		`
	,
	secondary: `
		color: ${colors.blue.main};
		background: ${colors.bg.main};
	`,
};

const chip = {
	default: `
		background: ${colors.bg.light};
		color: ${colors.black.main};
	`,
	selected:`
		background: ${colors.blue.light};
		color: ${colors.blue.main};
	`,
};

const spacing = ['4px', '8px', '12px', '16px', '20px', '24px', '32px'];

const theme = {
	colors,
	clickableStyle: {
		button,
		chip,
	},
	spacing,
};

export default theme;
