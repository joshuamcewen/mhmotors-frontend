import { createUseStyles } from 'react-jss';
import Color from 'color';

export default createUseStyles(({ colors, breakpoints }) => ({
    '@keyframes fadeLeft': {
        from: { opacity: 0 },
        to: { opacity: 1 }
    },
    '@keyframes fadeRight': {
        '0%': { opacity: 0 },
        '10%': { opacity: 0 },
        '100%': { opacity: 1 }
    },
    hero: {
        composes: 'Hero',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: colors.banner.start,
        background: `radial-gradient(
            circle at top left,
            ${colors.banner.start},
            ${colors.banner.end} 80%
          );`,
        minHeight: '100vh',
        width: '100%'
    },
    header: {
        composes: 'HeroHeader',
        backgroundColor: 'rgba(0,0,0,0.2)',
        padding: '1em 1.5em',
        display: 'flex',
        justifyContent: 'center',

        [breakpoints.sm]: {
            justifyContent: 'flex-start'
        }
    },
    headerContainer: {
        composes: 'HeroHeader__container',
        maxWidth: '60em',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',

        [breakpoints.sm]: {
            justifyContent: 'space-between'
        }
    },
    logo: {
        composes: 'HeroHeader__logo',
        height: '3em',
        maxWidth: '100%'
    },
    telephone: {
        composes: 'HeroHeader__telephone',
        fontSize: '1.5em',
        fontWeight: 600,
        color: '#fff',
        textDecoration: 'none',
        display: 'none',

        [breakpoints.sm]: {
            display: 'block'
        }
    },
    heading: {
        composes: 'Hero__heading',
        color: colors.accent,
        margin: 0,
        fontSize: '2.2em',

        [breakpoints.sm]: {
            fontSize: '3em'
        }
    },
    subheading: {
        composes: 'Hero__subheading',
        color: '#fff',
        margin: '0 0 1em',
        fontSize: '1em',

        [breakpoints.sm]: {
            fontSize: '1.2em',
            margin: '0 0 2em'
        }
    },
    paragraph: {
        composes: 'Hero__paragraph',
        color: '#fff',
        lineHeight: 1.5
    },
    container: {
        composes: 'Hero__container',
        maxWidth: '60em',
        margin: '0 auto',
        padding: '0 1.5em',
        display: 'flex',
        alignItems: 'stretch',
        flexDirection: 'column',
        flexGrow: 1,

        [breakpoints.sm]: {
            flexDirection: 'row'
        }
    },
    left: {
        order: 1,
        animationName: '$fadeLeft',
        animationDuration: '5s',

        [breakpoints.sm]: {
            width: '50%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            order: 0
        }
    },
    right: {
        order: 0,
        display: 'flex',
        justifyContent: 'center',
        animationName: '$fadeRight',
        animationDuration: '5s',

        [breakpoints.sm]: {
            width: '50%',
            flexDirection: 'column',
            paddingLeft: '1em',
            order: 1
        }
    },
    image: {
        composes: 'Hero__image',
        maxWidth: '15em',
        padding: '2em 0',

        [breakpoints.sm]: {
            maxWidth: '100%',
            padding: 0
        }
    },
    button: {
        composes: 'Hero__button',
        backgroundColor: colors.accent,
        color: colors.primary,
        textTransform: 'uppercase',
        fontFamily: 'inherit',
        fontSize: '1em',
        fontWeight: 700,
        padding: '0.9em 2em',
        borderRadius: '2em',
        border: 'none',
        marginTop: '2em',
        marginBottom: '2em',

        '&:hover': {
            cursor: 'pointer',
            boxShadow: `0 0 0 0.4em ${Color(colors.accent)
                .alpha(0.1)
                .string()}`,
            transition: '150ms linear all'
        }
    }
}));
