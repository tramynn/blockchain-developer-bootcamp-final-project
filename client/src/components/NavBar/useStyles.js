import { createStyles, makeStyles } from '@material-ui/styles';

import {
    spaceBlue5
    , spaceBlue1
    , spaceBlue3
    , colorfulSpace4
} from '../../globalStyles';

const useStyles = makeStyles( ( theme ) => {
    return createStyles( { 
        container: {
        }
        , appBar: {
            position: '-webkit-sticky'
            , position: 'sticky'
            , zIndex: 1120
            , color: spaceBlue5
        }
        , toolbar: {
            backgroundColor: spaceBlue5
        }
        , navBarLink: {
            textAlign: 'center'
        }
        , moreIcon: {
            textAlign: 'right'
        }
        , startModalContainer: {
            position: 'absolute'
            , top: '50%'
            , left: '50%'
            , transform: 'translate(-50%, -50%)'
            , height: 200
            , width: 400
            , background: spaceBlue3
            , boxShadow: 24
            , p: 4
            , borderRadius: 2
            , padding: '25px 50px'
            , display: 'flex'
            , alignItems: 'center'
        }
        , startModalInnerContainer: {
            // height: 200
            // , width: '100%'
        }
        , disabledButton: {
            color: colorfulSpace4
            , fontWeight: 800
            , letterSpacing: '.05rem'
            , width: 200
            // , '&:hover': {
            //     backgroundColor: spaceBlue1
            //     , color: spaceBlue5
            // }
        }
        , primaryButton: {
            color: spaceBlue5
            , fontWeight: 800
            , letterSpacing: '.05rem'
            // , '&:hover': {
            //     backgroundColor: spaceBlue1
            //     , color: spaceBlue5
            // }
        }
    } );
} );

export default useStyles;