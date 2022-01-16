import React, { useState, useEffect } from 'react';

// Library imports
import { 
    Typography 
    , Grid
    , TextField
    , Paper
} from '@mui/material';

// Component imports

// Utils
import useDevDoggieTokenContract from '../../hooks/useDevDoggieTokenContract';

// Style imports
import { colorfulSpace2, spaceBlue1, spaceBlue3 } from '../../globalStyles';
import useStyles from './useStyle';

const DogalogueCard = ({
    imgUrl
    , description
    , isSelected
    , currentAdoptionFee
}) => {
    const classes = useStyles();

    return (
        <Paper
            style={ {  
                width: 200
                , height: 225
                , backgroundColor: spaceBlue3
                , border: isSelected ? `3px solid ${ colorfulSpace2 }` : `3px solid ${ spaceBlue1 }`
                , boxSizing: 'border-box'
                , borderRadius: 5
                , color: '#fff'
                , padding: 10
                , margin: 10
                , '& :hover': {
                    border: `3px solid ${ colorfulSpace2 }`
                }
            } }
            elevation={ 24 }
        >
            <Grid
                container
                direction="column"
                justifyContent="flex-start"
                space={ 3 }
            >
                <Grid
                    item
                    xs={ 12 }
                    className={ classes.imgContainer }
                >
                    <img 
                        className={ classes.img }
                        src={ imgUrl }
                        alt={ description }
                    />
                </Grid>
                <Grid
                    item
                    xs={ 12 }
                >
                    <Grid
                        container
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="center"
                        space={ 1 }
                        className={ classes.feeContainer }
                    >
                        <Grid
                            item
                            xs={ 4 }
                        >
                            <p
                                className={ classes.feeTitle }
                            >
                                FEE:
                            </p>
                        </Grid>
                        <Grid
                            item
                            xs={ 6 }
                        >
                            <p
                                className={ classes.fee }
                            >
                                { currentAdoptionFee } ETH
                            </p>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    );
}

export default DogalogueCard;