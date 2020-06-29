import { createUseStyles } from 'react-jss';

export default createUseStyles(({ colors, breakpoints }) => ({
    socials: {
        composes: 'Socials',
        backgroundColor: colors.primary,
        padding: '1em'
    },
    container: {
        composes: 'Socials__container',
        maxWidth: '60em',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'center',

        '& a:last-child $social': {
            marginRight: 0
        },

        [breakpoints.sm]: {
            justifyContent: 'flex-start'
        }
    },
    social: {
        composes: 'Social',
        border: 'none',
        backgroundColor: '#fff',
        borderRadius: '50%',
        padding: '1em',
        marginRight: '1em',

        '&:hover': {
            cursor: 'pointer',
            boxShadow: '0 0 0 0.5em rgba(255,255,255,0.15)',
            transition: '150ms linear box-shadow'
        },

        '& img': {
            display: 'block',
            width: '2em',
            height: '2em'
        }
    }
}));
