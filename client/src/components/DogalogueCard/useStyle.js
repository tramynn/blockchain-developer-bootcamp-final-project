import { createStyles, makeStyles } from '@material-ui/styles';

import { spaceBlue1, spaceBlue3, spaceBlue4, colorfulSpace2 } from '../../globalStyles';

const useStyles = makeStyles( ( theme ) => {
    return createStyles( { 
        container: {
        }
        , img: {
            height: '100%'
            , width: '100%'
        }
        , feeContainer: {
            padding: '2px 0'
        }
        , feeTitle: {
            height: 25
            , width: 50
            , backgroundColor: spaceBlue4
            , padding: '0 10px'
            , fontWeight: 800
            , borderRadius: 2
        }
        , fee: {
            paddingLeft: 5
        }
    } );
} );

export default useStyles;