import React, { useState } from 'react';
// Library import
import { 
    Typography 
    , Grid
    , TextField
    , Button
    , Paper
} from '@mui/material';
// Component imports

// ABI
import devDoggieTokenArtifact from '../contracts/DevDoggieToken.json';

import devDoggieType1 from '../images/devdoggie_type_1.svg';
import devDoggieType2 from '../images/devdoggie_type_2.svg';
import devDoggieType3 from '../images/devdoggie_type_3.svg';

// Utils
import useDevDoggieTokenContract from '../hooks/useDevDoggieTokenContract';

// Style import
import useStyles from './useStyles';
import DogalogueCard from '../components/DogalogueCard/DogalogueCard';

const devDoggieTypes = [
    {
        id: 0
        , imgUrl: devDoggieType1
        , description: 'White and yellow devdoggie type 1'
    }
    , {
        id: 1
        , imgUrl: devDoggieType2
        , description: 'White devdoggie type 2'
    }
    , {
        id: 2
        , imgUrl: devDoggieType3
        , description: 'White devdoggie type 3'
    }
];

const AdoptionCenterPage = ( {
    pending
    , toastType
    , openToast
    , handleToastClose
    , toastMessage
} ) => {
    const classes = useStyles();
    const [ firstName, setFirstName ] = useState( '' );
    const [ lastName, setLastName ] = useState( '' );
    const [ devDoggieTokenType, setDevDoggieTokenType ] = useState( 0 );
    const { adoptDevDoggie, currentAdoptionFee } = useDevDoggieTokenContract();
    const [ error, setError ] = useState( false );

    const handleDevDoggieSelection = ( index ) => {
        setDevDoggieTokenType( index );
    }

    const handleAdoptionFee = () => {
        if ( 
            !firstName && !lastName 
            || !firstName
            || !lastName
        ) {
            setError( true );
            // Display error toast message
            return;
        }
        const params = {
            devDoggieType: devDoggieTokenType
            , firstName
            , lastName
        }
        adoptDevDoggie( params )
    }

    return (
    <section className={ classes.containerThird }>
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                space={3}
            >
                <Grid 
                    item
                    // xs={12}
                >
                    <Typography variant="h1" component="div" sx={{ flexGrow: 1 }}>Adoption Center</Typography>
                </Grid>
                <Grid 
                    item 
                    // xs={12}
                >
                    <Typography variant="body1" component="div" sx={{ flexGrow: 1 }}>
                        Welcome to the Adoption Center.
                    </Typography>
                </Grid>
                <Grid 
                    item 
                    // xs={12]
                >
                    <Grid
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        space={2}
                    >
                        <Grid
                            item
                            classes={ {
                                root: classes.devDoggieTypeContainer
                            } }
                        >
                            <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                                1. Choose DevDoggie Type
                            </Typography>
                            <Grid
                                container
                                direction="row"
                                justifyContent="space-around"
                            >
                                {
                                    devDoggieTypes.map( ( devDoggieType, index ) => {
                                        const isSelected = devDoggieTokenType === index;
                                        return (
                                            <Grid
                                                key={ `devdoggie-type-${ index }`}
                                                item
                                                onClick={ () => handleDevDoggieSelection( index ) }
                                            >
                                                <DogalogueCard
                                                    imgUrl={ devDoggieType.imgUrl }
                                                    description={ devDoggieTokenType.description }
                                                    isSelected={ isSelected }
                                                    currentAdoptionFee={ currentAdoptionFee }
                                                />
                                            </Grid>
                                        )
                                    } )
                                }
                            </Grid>
                        </Grid>
                        <Grid
                            item
                        >
                            <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                            2. Complete Adoption
                            </Typography>
                            <Grid
                                container
                                direction="column"
                                justifyContent="space-around"
                                alignItems="center"
                                space={5}
                            >
                                <Grid
                                    item
                                    classes={ {
                                        root: classes.textFieldContainer
                                    } }
                                >
                                    <TextField
                                        variant="outlined"
                                        inputProps={{ style: { color: '#fff', padding: '12px 15px', width: 250 } }}
                                        required
                                        id="outlined-first-name"
                                        label="First Name"
                                        value={ firstName }
                                        onChange={ ( e ) => setFirstName( e.target.value ) }
                                        color="secondary"
                                        focused
                                        helperText={ error ? 'Please enter a first name.' : null }
                                        error={ error && !firstName }
                                    />
                                </Grid>
                                <Grid
                                    item
                                    classes={ {
                                        root: classes.textFieldContainer
                                    } }
                                >
                                    <TextField
                                        variant="outlined"
                                        inputProps={{ style: { color: '#fff', padding: '12px 15px', width: 250 } }}
                                        required
                                        id="outlined-required"
                                        label="Last Name"
                                        value={ lastName }
                                        onChange={ ( e ) => setLastName( e.target.value ) }
                                        color="secondary"
                                        focused
                                        helperText={ error ? 'Please enter a last name.' : null }
                                        error={ error && !lastName }
                                    />
                                </Grid>
                                <Grid
                                    item
                                >
                                    <Button
                                        variant="contained"
                                        className={ classes.primaryButton }
                                        onClick={ handleAdoptionFee }
                                        // disable={ error }
                                        fullWidth
                                    >
                                        <p className={ classes.primaryButtonText }>
                                            Pay Adoption Fee
                                        </p>
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </section>
    );
};

export default AdoptionCenterPage;
