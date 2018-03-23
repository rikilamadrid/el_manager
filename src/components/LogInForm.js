import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {
    Card,
    CardSection,
    Input,
    Button,
    Spinner
} from './common';
import { connect } from 'react-redux';
import {
    emailChanged,
    passwordChanged,
    logInUser
} from '../actions';

class LogInForm extends Component {
    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    onButtonPress() {
        const {
            email,
            password,
            logInUser
        } = this.props;

        logInUser({ email, password });
    }

    renderError() {
        const {
            errorBackgroundStyle,
            errorTextStyle
        } = styles;

        if (this.props.error) {
            return (
                <View style={errorBackgroundStyle}>
                    <Text style={errorTextStyle}>
                        {this.props.error}
                    </Text>
                </View>
            );
        }
    }

    renderButton() {
        if(this.props.loading) {
            return (
                <Spinner size="large" />
            );
        }

        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Log In
            </Button>
        )
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeholder="user@user.com"
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label="Password"
                        placeholder="password"
                        secureTextEntry
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                    />
                </CardSection>

                {this.renderError()}

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    },
    errorBackgroundStyle: {
        backgroundColor: 'white'
    }
}

const mapStateToProps = state => {
    const {
        email,
        password,
        error,
        loading
    } = state.auth;

    return {
        email,
        password,
        error,
        loading
    };
}

export default connect(mapStateToProps, {
    emailChanged,
    passwordChanged,
    logInUser
})(LogInForm);
