import { Dimensions, StyleProp, ViewStyle } from 'react-native';
import { screenWidthbreakpoints } from '../utilities';

const screenWidth = Dimensions.get('screen').width;

export const modalContainerStyle: StyleProp<ViewStyle> = {
  flex: 1,
  paddingLeft: 20,
  paddingRight: 20,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
};

export const modalContentBaseStyle: StyleProp<ViewStyle> = {
  padding: 20,
  flexDirection: 'column',
  backgroundColor: '#fff',
  width: screenWidth >= screenWidthbreakpoints.sm ? 600 : '100%',
};
