import EStyleSheet from 'react-native-extended-stylesheet';
import { StatusBar } from 'react-native';

export default EStyleSheet.create({
    container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        '@media ios': {
            paddingTop: 25,
        },
        '@media andriod': {
            paddingTop: StatusBar.currentHeight
        }

    },
    button: {
        alignSelf: 'flex-end',
        paddingVertical: 5,
        paddingHorizontal: 33,

    },
    icon: {
        width: 18,
    }
});
