import { View, Text, StyleSheet, Image, TouchableOpacity, PixelRatio, Dimensions } from 'react-native';
import { Themes } from '../../assets/Themes';

const Header = ({useLightMode, changeMode}) => {

  return (
    <View style={styles(useLightMode).header}>
        <Image style={styles(useLightMode).icon} source={useLightMode ? require('../../assets/Icons/menu_light.png') : require('../../assets/Icons/menu_dark.png')} />
        <Text style={styles(useLightMode).title}>ensom</Text>
        {/* Used TouchableOpacity to create a clickable button that can change mode
        from light to dark. In future will update to use Hooks instead of indvidual
        useLightMode changes on all the components. */}
        <TouchableOpacity 
            style={styles(useLightMode).icon}
            activeOpacity='1'
            onPress={changeMode}>
            <Image style={{
                flex: 1,
                width: '100%',
                resizeMode: 'contain',
            }} 
            source={useLightMode ? require('../../assets/Icons/sun.png') : require('../../assets/Icons/moon.png')}/>
         </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = (useLightMode) => StyleSheet.create({
    header: {
        width: Dimensions.get('window').width,
        backgroundColor: useLightMode ? Themes.light.bg : Themes.dark.bg,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        paddingTop: 50,
        paddingLeft: Dimensions.get('window').width * 0.05,
        paddingRight: Dimensions.get('window').width * 0.04,
        paddingBottom: 10
    },
    title: {
        fontFamily: 'SydneyBold',
        color: useLightMode ? 'black' : 'white',
        flex: 2,
        fontSize: PixelRatio.getFontScale() * Dimensions.get('window').height * 0.05,
        textAlign: 'center', 
    },
    icon: {
        alignSelf: 'center',
        resizeMode: 'contain',
        height: '20%',
        width: '15%',
        aspectRatio: 1,
    }
});
