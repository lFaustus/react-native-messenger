import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import StatusList from '@components/StatusList';
import ReactionContainer from '@components/ReactionContainer';

import styles from './styles';

export default class MessagesScreen extends Component {
    onPress = () => {
        const { navigation } = this.props;
        navigation.navigate('CameraScreen');
    };

    render() {
        return (
            <View style={styles.container}>
                <StatusList />
                <ReactionContainer />
            </View>
        );
    }
}

MessagesScreen.propTypes = {
    navigation: PropTypes.object
};
