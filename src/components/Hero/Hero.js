import React from 'react';
import { useTheme } from 'react-jss';
import useStyles from './Hero.styles';
import vehicle from '../../assets/vehicle.svg';
import logo from '../../assets/logo.svg';

const Hero = () => {
    const theme = useTheme();
    const classes = useStyles({ theme });

    return (
        <div className={classes.hero}>
            <div className={classes.header}>
                <div className={classes.headerContainer}>
                    <img
                        className={classes.logo}
                        src={logo}
                        alt="M&H Motors Morecambe"
                    />
                    <a className={classes.telephone} href="tel:+447877082963">
                        07877 082963
                    </a>
                </div>
            </div>
            <div className={classes.container}>
                <div className={classes.left}>
                    <div className={classes.intro}>
                        <h1 className={classes.heading}>Mechanics</h1>
                        <h2 className={classes.subheading}>
                            Morecambe, Lancashire
                        </h2>
                        <p className={classes.paragraph}>
                            MH Motors is a small family run business,
                            established almost 20 years ago. We offer vehicle
                            servicing, repairs and MOTs on vehicles of all makes
                            and models from our garage located on the White Lund
                            Industrial Estate in Morecambe.
                        </p>
                        <a href="tel:+447877082963">
                            <button className={classes.button}>
                                Call Us Now
                            </button>
                        </a>
                    </div>
                </div>
                <div className={classes.right}>
                    <img
                        className={classes.image}
                        src={vehicle}
                        alt="Vehicle"
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;
