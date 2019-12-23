import React, { Component } from 'react';
import { View, Text, Button } from 'native-base';
import { Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Footer from './Footer';
import Styles from './Styles';
class Test extends Component {
    render() {
        return (
            <View style={Styles.Content}>
                <View style={Styles.View}>
                    <View style={Styles.ViewTop}>
                        <View style={Styles.ViewEdge}>
                            <Image source={require('../image/face.png')} style={Styles.ImgFace} />
                        </View>
                        <View style={Styles.TxtFace}>
                            <Text style={Styles.Txt}>farid</Text>
                        </View>
                        <View style={Styles.ViewCenter}>
                            <Image source={require('../image/medal.png')} style={Styles.ImgMedal} />
                        </View>
                        <View style={Styles.TxtMedal}>
                            <Text style={Styles.Txt}>1</Text>
                        </View>
                        <View style={Styles.ViewCenter}>
                            <Image source={require('../image/jewelry.png')} style={Styles.ImgMedal} />
                        </View>
                        <View style={Styles.TxtJewelry}>
                            <Text style={Styles.Txt}>2</Text>
                        </View>
                        <View style={Styles.ViewEdge}>
                            <Image source={require('../image/box.png')} style={Styles.ImgBox} />
                        </View>
                    </View>
                </View>
                <View style={{ flex: 8 }}></View>

                <View style={Styles.View}>
                    <Button style={Styles.Button} >
                        <Text>شروع بازی</Text>
                    </Button>
                </View>
                <View style={{ flex: 2 }}>

                </View>
                <View style={{ flex: 1 }}>
                    <Footer />
                </View>
            </View>
        );
    }
}
const RootStack = createStackNavigator(
    {
        Test: Test
    },
    {
        initialRouteName: 'Test',
        headerMode: 'none'
    }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
    render() {
        return <AppContainer />;
    }
}

