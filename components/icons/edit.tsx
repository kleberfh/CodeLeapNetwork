import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IIconProps } from '../../types';

export default function EditIcon(props: IIconProps) {
  const { size, color } = props;
  return (
    <Svg fill="none" width={size} height={size} viewBox="0 0 30 30">
      <Path
        fill={color}
        d="M8.75 21.2663L14.2662 21.2475L26.3062 9.3225C26.7787 8.85 27.0387 8.2225 27.0387 7.555C27.0387 6.8875 26.7787 6.26 26.3062 5.7875L24.3237 3.805C23.3787 2.86 21.73 2.865 20.7925 3.80125L8.75 15.7288V21.2663ZM22.5562 5.5725L24.5425 7.55125L22.5462 9.52875L20.5637 7.5475L22.5562 5.5725ZM11.25 16.7713L18.7875 9.305L20.77 11.2875L13.2337 18.7513L11.25 18.7575V16.7713Z"
      />
      <Path
        fill={color}
        d="M6.25 26.25H23.75C25.1287 26.25 26.25 25.1287 26.25 23.75V12.915L23.75 15.415V23.75H10.1975C10.165 23.75 10.1313 23.7625 10.0988 23.7625C10.0575 23.7625 10.0163 23.7512 9.97375 23.75H6.25V6.25H14.8088L17.3088 3.75H6.25C4.87125 3.75 3.75 4.87125 3.75 6.25V23.75C3.75 25.1287 4.87125 26.25 6.25 26.25Z"
      />
    </Svg>
  );
}
