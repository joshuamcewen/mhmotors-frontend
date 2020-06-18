import { createUseStyles } from 'react-jss';
import Color from 'color';

export default createUseStyles(({ breakpoints, colors }) => ({
    footer: {
        composes: 'Footer',
        backgroundColor: `${Color(colors.primary)
            .darken(0.5)
            .string()}`,
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
        margin: '0 auto'
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
    }
}));
