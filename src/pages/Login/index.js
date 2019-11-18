import React from 'react';
import { SafeAreaView } from 'react-native';

// Styles
import {
    ColorView, Wrapper, Logo, Title,
} from './styles';

const Login = () => (
    <SafeAreaView>
        <ColorView />
        <Wrapper>
            <Logo source={require('~/assets/images/logo.png')} resizeMode="contain" />
            <Title>Login</Title>
        </Wrapper>
    </SafeAreaView>
);

export default Login;
