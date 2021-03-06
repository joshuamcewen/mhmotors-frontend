import React from 'react';
import { useTheme } from 'react-jss';
import useStyles from './Footer.styles';

const Footer = () => {
    const theme = useTheme();
    const classes = useStyles({ theme });

    return (
        <footer className={classes.footer}>
            <div className={classes.container}>
                <span>
                    Design by{' '}
                    <a
                        className={classes.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://joshmcewen.io"
                    >
                        Josh McEwen
                    </a>
                </span>
                <a
                    className={classes.cookieLink}
                    onClick={() => {
                        displayPreferenceModal();
                    }}
                >
                    Change Cookie Preferences
                </a>
            </div>
        </footer>
    );
};

export default Footer;
