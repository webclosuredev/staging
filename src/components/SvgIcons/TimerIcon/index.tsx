import * as React from "react";
import Svg, { Path } from "react-native-svg";

type TimerIconProps = {
  color?: string;
};

const TimerIcon = ({ color, ...props }: TimerIconProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill={color ?? "#000"}
      d="M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0Zm0 17.75c-4.27 0-7.75-3.48-7.75-7.75 0-1.36.36-2.69 1.03-3.86a.75.75 0 0 1 1.02-.28l6.07 3.49c.36.21.48.66.28 1.02-.21.36-.66.48-1.02.28L4.24 7.56c-.32.77-.49 1.6-.49 2.44 0 3.45 2.8 6.25 6.25 6.25s6.25-2.8 6.25-6.25a6.252 6.252 0 0 0-10-5 .75.75 0 0 1-.9-1.2A7.715 7.715 0 0 1 10 2.25c4.27 0 7.75 3.48 7.75 7.75s-3.48 7.75-7.75 7.75Z"
    />
  </Svg>
);

export default TimerIcon;
