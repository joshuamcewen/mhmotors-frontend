import React from 'react';
import { useTheme } from 'react-jss';
import useStyles from './Socials.styles';
import facebook from '../../assets/facebook.svg';
import instagram from '../../assets/instagram.svg';

const Socials = () => {
    const theme = useTheme();
    const classes = useStyles({ theme });

    return (
        <div className={classes.socials}>
            <div className={classes.container}>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.facebook.com/M-H-Motors-of-Morecambe-630838676991928"
                >
                    <button className={classes.social}>
                        <img src={facebook} />
                    </button>
                </a>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.instagram.com/mandhmotors"
                >
                    <button className={classes.social}>
                        <img src={instagram} />
                    </button>
                </a>
            </div>
        </div>
    );
};

export default Socials;
