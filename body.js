import { View, Text, StyleSheet, Image, ImageBackground, Dimensions, PixelRatio } from 'react-native';
import { Themes } from '../../assets/Themes';
import Profiles from '../../assets/Profiles/index';


const Body = ({useLightMode}) => {
  return (
    <View style={styles(useLightMode).profile}>
        <View style={styles(useLightMode).firstSection}>
            <ImageBackground source={require('../../assets/Profiles/mtl.jpg')} style={styles(useLightMode).profile_pic}>
                <Text style={styles(useLightMode).name}>{Profiles.mtl.name}</Text>
                <Text style={styles(useLightMode).caption}>{Profiles.mtl.caption}</Text>
            </ImageBackground>
        </View>
        <View style={styles(useLightMode).secondSection}>
            <Text style={styles(useLightMode).audioTitle}>My hottest take</Text>
            <View style={styles(useLightMode).audio}>
                <Image style={styles(useLightMode).audioIcon} source={useLightMode ? require('../../assets/Icons/player_light.png') : require('../../assets/Icons/player_dark.png')}/>
                <Image style={styles(useLightMode).audioWaveform} source={useLightMode ? require('../../assets/Icons/audio_waveform_light.png') : require('../../assets/Icons/audio_waveform_dark.png')}/>
            </View>
        </View>
    </View>
  );
};

export default Body;

const styles = (useLightMode) => StyleSheet.create({
    profile: {
        width: Dimensions.get('window').width,
        shadowColor: (useLightMode) ? Themes.light.shadows.shadowColor: Themes.dark,
        shadowOpacity: Themes.light.shadows.shadowOpacity,
        shadowRadius: Themes.light.shadows.shadowRadius,
        shadowOffset: Themes.light.shadows.shadowOffset,
    },
    firstSection: {
        top: 30,
        alignItems: 'center',
    },
    profile_pic: {
        width: Dimensions.get('window').width * 0.9,
        height: Dimensions.get('window').width,
        borderRadius: 20,
        overflow: 'hidden',
    },
    name: {
        position: 'absolute',
        fontFamily: 'Sydney',
        color: 'white',
        fontSize: PixelRatio.getFontScale() * Dimensions.get('window').height * 0.045,
        top: Dimensions.get('window').height * 0.015,
        left: Dimensions.get('window').width * 0.045,
    },
    caption: {
        position: 'absolute',
        fontFamily: 'Sydney',
        color: 'white',
        fontSize: PixelRatio.getFontScale() * Dimensions.get('window').height * 0.025,
        left: Dimensions.get('window').width * 0.045,
        bottom: Dimensions.get('window').height * 0.015,
        justifyContent: 'flex-end',
    },
    secondSection: {
        width: '90%',
        height: '25%',
        borderRadius: 20,
        justifyContent: 'center',
        flexDirection: 'column',
        top: 50,
        left: 20,
        backgroundColor: useLightMode ? Themes.light.bgSecondary : Themes.dark.bgSecondary,
    },
    audio: {
        flexDirection: 'row',
        justifyContent: 'center', // center horizontally
        alignItems: 'center', // center vertically
        marginBottom: 10,
    },
    audioTitle: {
        fontSize: PixelRatio.getFontScale() * Dimensions.get('window').height * 0.035,
        fontFamily: 'Sydney',
        color: useLightMode ? 'black' : 'white',
        marginBottom: 20,
        marginLeft: 15
    },
    audioIcon: {
        flex: 1,
        height: '130%',
        resizeMode: 'contain',
    },
    audioWaveform: {
        flex: 3,
        aspectRatio: 5.7,
        marginRight: 10,
        resizeMode: 'contain',
    },
});