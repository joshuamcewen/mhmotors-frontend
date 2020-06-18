import { createUseStyles } from 'react-jss';

export default createUseStyles({
    card: {
        border: '1px solid #D8D8D8',
        borderRadius: '0.3em',
        padding: '1.5em'
    },
    heading: {
        margin: 0,
        fontWeight: 700,
        fontSize: '1.3em',
        color: ({ theme }) => theme.colors.heading,

        '&:after': {
            display: 'block',
            content: '""',
            height: '0.2em',
            width: '1.75em',
            backgroundColor: ({ theme }) => theme.colors.accent,
            margin: '0.2em 0 0.6em'
        }
    },
    contents: {
        color: ({ theme }) => theme.colors.body,
        lineHeight: 1.5,

        '& p:last-child': {
            marginBottom: 0
        }
    }
});
