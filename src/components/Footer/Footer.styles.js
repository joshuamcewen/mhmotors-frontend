import { createUseStyles } from 'react-jss';
import Color from 'color';

export default createUseStyles(({ breakpoints, colors }) => ({
    footer: {
        composes: 'Footer',
        backgroundColor: `${Color(colors.primary).darken(0.5)}`,
        color: '#fff',
        padding: '1.5em',
        textAlign: 'center',

        [breakpoints.sm]: {
            textAlign: 'left'
        }
    },
    container: {
        composes: 'Footer__container',
        maxWidth: '60em',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',

        [breakpoints.sm]: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
        }
    },
    link: {
        composes: 'Footer__link',
        color: colors.accent,
        fontWeight: 700,
        textDecoration: 'none',

        '&:hover': {
            color: `${Color(colors.accent)
                .darken(0.4)
                .string()}`,
            transition: '150ms linear color'
        }
    },
    cookieLink: {
        composes: 'Footer__cookie-link',
        fontSize: '0.9em',
        padding: '0.5em',
        borderRadius: '0.2em',
        backgroundColor: `${Color(colors.primary).lighten(0.5)}`,
        border: `1px solid ${Color(colors.primary).lighten(0.5)}`,
        color: `${Color(colors.primary).lighten(7.5)}`,
        marginTop: '1em',

        [breakpoints.sm]: {
            marginTop: 0,
        },

        '&:hover': {
            cursor: 'pointer'
        }
    }
}));
