import React from 'react';
import { useTheme } from 'react-jss';
import useStyles from './Map.styles';
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';

const Map = () => {
    const theme = useTheme();
    const classes = useStyles({ theme });
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: 'AIzaSyDmdyfxjE70o5tmL4shyj-CI0HYD487dXU'
    });

    return (
        <div className={classes.map}>
            <div className={classes.container}>
                <div className={classes.left}>
                    <h2 className={classes.header}>Finding Us</h2>
                    <p>
                        Our garage can be found on Northgate, White Lund
                        Industrial Estate in Morecambe, Lancashire.
                    </p>
                    <address className={classes.address}>
                        <strong className={classes.unitName}>
                            Unit 1C, Concorde Works
                        </strong>
                        <br />
                        Northgate
                        <br />
                        White Lund Industrial Estate
                        <br />
                        Morecambe
                        <br />
                        LA3 3BS
                    </address>
                </div>
                <div className={classes.right}>
                    {isLoaded ? (
                        <GoogleMap
                            mapContainerClassName={classes.mapFrame}
                            zoom={15}
                            center={{ lat: 54.059608, lng: -2.846987 }}
                        >
                            <Marker
                                position={{ lat: 54.059608, lng: -2.846987 }}
                            />
                        </GoogleMap>
                    ) : (
                        <div>Loading</div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Map;
