import React from 'react';
import { StyleSheet, Dimensions, SafeAreaView } from 'react-native';
import Video from 'react-native-video';

// Local Images and files
import backgroundVideo from '~/assets/videos/init-video-1.mp4';

// Styles
import {
    ColorView, Wrapper, Logo, Title, TextDescription, ButtonWrapper, Button,
} from './styles';

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
    backgroundVideo: {
        height,
        position: 'absolute',
        top: 0,
        left: 0,
        alignItems: 'stretch',
        bottom: 0,
        right: 0,
    },
});

const Init = props => (
    <SafeAreaView>
        <Video
            source={backgroundVideo}
            style={styles.backgroundVideo}
            muted
            repeat
            resizeMode="cover"
            rate={1.0}
            ignoreSilentSwitch="obey"
            useTextureView={false}
        />

        <ColorView />

        <Wrapper>
            <Logo source={require('~/assets/images/logo.png')} resizeMode="contain" />
            <Title>Coma por R$10 ou menos</Title>
            <TextDescription>
				Porque comida incrível deve ser provada e não desperdiçada!
            </TextDescription>
            <ButtonWrapper>
                <>
                    <Button
                        onPress="Register"
                        navigation={props.navigation}
                        title="Criar uma conta"
                    />
                    <Button
                        onPress="Login"
                        navigation={props.navigation}
                        transparent
                        title="Entrar"
                    />
                </>
            </ButtonWrapper>
        </Wrapper>
    </SafeAreaView>
);

export default Init;
