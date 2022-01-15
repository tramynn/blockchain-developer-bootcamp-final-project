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

// Style import
import useStyles from './useStyles';

const AdoptionCenterPage = () => {
    const classes = useStyles();
    const [ firstName, setFirstName ] = useState( '' );
    const [ lastName, setLastName ] = useState( '' );

    return (
    <section className={ classes.container }>
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
                            {/* TODO: Mapped DevDoggie Types */}
                            <Grid
                                container
                                direction="row"
                                justifyContent="space-around"
                                alignItems="center"
                                space={5}
                            >
                                <Grid
                                    item
                                >
                                    type 1
                                </Grid>
                                <Grid
                                    item
                                >
                                    type 2
                                </Grid>
                                <Grid
                                    item
                                >
                                    type 3
                                </Grid>
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
                                    />
                                </Grid>
                                <Grid
                                    item
                                >
                                    <Button
                                        variant="contained"
                                        className={ classes.primaryButton }
                                        // onClick={ payAdoptionFee }
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
