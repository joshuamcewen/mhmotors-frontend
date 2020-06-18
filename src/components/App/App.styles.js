import { createUseStyles } from 'react-jss';

export default createUseStyles(({ breakpoints, colors }) => ({
    '@global': {
        'html, #root': {
            height: '100%'
        },
        body: {
            fontFamily: 'Muli, sans-serif',
            margin: '0',
            padding: '0',
            fontSize: '16px',
            height: '100%'
        },
        'h1, h2, h3': {
            fontWeight: '600'
        }
    },
    container: {
        maxWidth: '60em',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column'
    },
    serviceHeader: {
        display: 'none',

        [breakpoints.sm]: {
            display: 'block',
            textAlign: 'center',
            fontWeight: 700,
            fontSize: '1.8em',
            color: colors.headings,
            margin: '1.5em 0 1em'
        }
    },
    serviceCards: {
        display: 'flex',
        flexDirection: 'column',
        margin: '-2em 1em 1em',

        [breakpoints.sm]: {
            margin: '1em 0',
            alignItems: 'stretch',
            flexDirection: 'row'
        },

        '& .ServiceCard': {
            width: 'calc(100% - 4em)',
            margin: '0.5em',

            [breakpoints.sm]: {
                width: '33.3333%'
            }
        }
    }
}));
