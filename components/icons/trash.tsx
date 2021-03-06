import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IIconProps } from '../../types';

export default function TrashIcon(props: IIconProps) {
  const { size, color } = props;
  return (
    <Svg width={size} height={size} fill="none" viewBox="0 0 30 30">
      <Path
        d="M7.5 23.75C7.5 25.125 8.625 26.25 10 26.25H20C21.375 26.25 22.5 25.125 22.5 23.75V8.75H7.5V23.75ZM10.575 14.85L12.3375 13.0875L15 15.7375L17.65 13.0875L19.4125 14.85L16.7625 17.5L19.4125 20.15L17.65 21.9125L15 19.2625L12.35 21.9125L10.5875 20.15L13.2375 17.5L10.575 14.85ZM19.375 5L18.125 3.75H11.875L10.625 5H6.25V7.5H23.75V5H19.375Z"
        fill={color}
      />
    </Svg>
  );
}
