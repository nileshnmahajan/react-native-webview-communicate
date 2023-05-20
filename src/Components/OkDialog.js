import React, {Component} from 'react';
import {
  View,
  TouchableOpacity,
  Modal,
  Dimensions,
  StyleSheet,
} from 'react-native';

import Text from './Text';
import colors from '../constants/colors';

class OkDialog extends Component {
  state = {};
  render() {
    const {message, onOkPress, visible = false} = this.props;

    return (
      <Modal statusBarTranslucent transparent={true} visible={visible}>
        <View style={styles.root}>
          <View style={styles.dialogBox}>
            <View style={styles.message}>
              <Text center>{message}</Text>
            </View>

            <View
              style={{
                height: 1,
                backgroundColor: 'rgba(255,255,255,0.1)',
                width: '100%',
                marginTop: 10,
                // marginBottom: 15,
              }}
            />

            <TouchableOpacity
              onPress={() => {
                console.log('ok pressed');
                onOkPress();
              }}
              style={{
                // paddingHorizontal: 30,
                paddingVertical: 10,
                // marginTop: 45,
                // borderWidth: 2,
                // borderTopColor: "rgba(255,255,255,0.4)",
                width: '100%',
              }}>
              <Text color={colors.buttonColor} center>
                OK
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  }
}

export default OkDialog;

const styles = StyleSheet.create({
  root: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  dialogBox: {
    backgroundColor: '#02111B',
    // height: 180,
    width: Dimensions.get('window').width - 60,
    alignSelf: 'center',
    // justifyContent: "center",
    alignItems: 'center',
    paddingTop: 15,
    borderRadius: 12,
    overflow: 'hidden',
  },
  message: {
    // marginTop: 20,
    paddingHorizontal: 15,
    paddingVertical: 8,
  },
});
