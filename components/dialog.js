import * as React from 'react';
import { View } from 'react-native';
import { Button, Dialog, Portal, Provider, Text } from 'react-native-paper';

const DialogBox = ({showDialog,hideDialog,visible}) => {


  return (
    <Provider>
      <View>
        <Button onPress={showDialog}>Show Dialog</Button>
        <Portal>
          <Dialog visible={true} onDismiss={hideDialog}>
            <Dialog.Title>Alert</Dialog.Title>
            <Dialog.Content>
              <Text variant="bodyMedium">This is simple dialog</Text>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={hideDialog}>Done</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </View>
    </Provider>
  );
};

export default DialogBox;