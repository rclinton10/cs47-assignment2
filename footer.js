import { View, Text, StyleSheet, Image, Dimensions, PixelRatio } from 'react-native';
import { Themes } from '../../assets/Themes';

const Footer = ({useLightMode}) => {
    return (
    <View style={styles(useLightMode).footer}>
        <View style={styles(useLightMode).tab}>
            <Image style={styles(useLightMode).icon} source={useLightMode ? require('../../assets/Icons/discover_light.png') : require('../../assets/Icons/discover_dark.png')}/>
            <Text style={styles(useLightMode).text}>Discover</Text>
        </View>
        <View style={styles(useLightMode).tab}>
            <Image style={styles(useLightMode).icon} source={useLightMode ? require('../../assets/Icons/heart_light.png') : require('../../assets/Icons/heart_dark.png')}/>
            <Text style={styles(useLightMode).text}>Matches</Text>
        </View>
        <View style={styles(useLightMode).tab}>
            <Image style={styles(useLightMode).icon} source={useLightMode ? require('../../assets/Icons/messages_light.png') : require('../../assets/Icons/messages_dark.png')}/>
            <Text style={styles(useLightMode).text}>DMs</Text>
        </View>
    </View>
  );
};

export default Footer;

const styles = (useLightMode) => StyleSheet.create({
    footer: {
        position: 'absolute',
        bottom: 0,
        height: Dimensions.get('window').height * 0.10,
        width: Dimensions.get('window').width,
        flexDirection: 'row', // makes them go in row, not column
        backgroundColor: useLightMode ? Themes.light.navigation : Themes.dark.navigation,
        paddingLeft: 30,
        paddingRight: 30,
        paddingBottom: 10
    },
    tab: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    icon: {
        height: Dimensions.get('window').height * 0.05,
        width: 75,
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    text: {
        fontSize: PixelRatio.getFontScale() * Dimensions.get('window').height * 0.02,
        fontFamily: 'Sydney',
        color: useLightMode ? '#FFFFFF' : "#000000",
        textAlign: 'center'
    }
});