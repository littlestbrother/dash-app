import { extendTheme } from '@mui/joy/styles';

const steps = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
const createColor = (hex) => steps.reduce((acc, cur) => ({ ...acc, [cur]: hex }), {})

const BACKGROUND = '#000000';
const PRIMARY = '#9B33FE';
const DANGER = '#DC3545';
const SUCCESS = '#1DB954';
const WARNING = '#FFC107';
const DIVIDER = 'rgba(255, 255, 255, 0.6)';

const theme = extendTheme({
	colorSchemes: {
		// light mode sucks lol
		dark: {
			palette: {
				background: createColor(BACKGROUND),
				primary: createColor(PRIMARY),
				danger: createColor(DANGER),
				success: createColor(SUCCESS),
				warning: createColor(WARNING),
				divider: DIVIDER,
			},
		},
	},
	components: {
		JoyButton: {
			styleOverrides: {
				root: {
					'&:hover': {
						color: 'white',
					},
				},
			},
		}
	},
});

export default theme;