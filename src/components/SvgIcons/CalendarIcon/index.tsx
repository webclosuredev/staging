import * as React from "react";
import Svg, { Path } from "react-native-svg";

type CalendarIconProps = {
  color?: string;
};

const CalendarIcon = ({ color, ...props }: CalendarIconProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill={color ?? "#000"}
      d="M16.75 3.56V2c0-.41-.34-.75-.75-.75s-.75.34-.75.75v1.5h-6.5V2c0-.41-.34-.75-.75-.75s-.75.34-.75.75v1.56c-2.7.25-4.01 1.86-4.21 4.25-.02.29.22.53.5.53h16.92c.29 0 .53-.25.5-.53-.2-2.39-1.51-4-4.21-4.25ZM20 9.84H4c-.55 0-1 .45-1 1V17c0 3 1.5 5 5 5h8c3.5 0 5-2 5-5v-6.16c0-.55-.45-1-1-1ZM9.21 18.21c-.05.04-.1.09-.15.12-.06.04-.12.07-.18.09-.06.03-.12.05-.18.06-.07.01-.13.02-.2.02-.13 0-.26-.03-.38-.08-.13-.05-.23-.12-.33-.21-.18-.19-.29-.45-.29-.71 0-.26.11-.52.29-.71.1-.09.2-.16.33-.21.18-.08.38-.1.58-.06.06.01.12.03.18.06.06.02.12.05.18.09l.15.12c.18.19.29.45.29.71 0 .26-.11.52-.29.71Zm0-3.5c-.19.18-.45.29-.71.29-.26 0-.52-.11-.71-.29-.18-.19-.29-.45-.29-.71 0-.26.11-.52.29-.71.28-.28.72-.37 1.09-.21.13.05.24.12.33.21.18.19.29.45.29.71 0 .26-.11.52-.29.71Zm3.5 3.5c-.19.18-.45.29-.71.29-.26 0-.52-.11-.71-.29-.18-.19-.29-.45-.29-.71 0-.26.11-.52.29-.71.37-.37 1.05-.37 1.42 0 .18.19.29.45.29.71 0 .26-.11.52-.29.71Zm0-3.5-.15.12c-.06.04-.12.07-.18.09-.06.03-.12.05-.18.06-.07.01-.13.02-.2.02-.26 0-.52-.11-.71-.29-.18-.19-.29-.45-.29-.71 0-.26.11-.52.29-.71.09-.09.2-.16.33-.21.37-.16.81-.07 1.09.21.18.19.29.45.29.71 0 .26-.11.52-.29.71Zm3.5 3.5c-.19.18-.45.29-.71.29-.26 0-.52-.11-.71-.29-.18-.19-.29-.45-.29-.71 0-.26.11-.52.29-.71.37-.37 1.05-.37 1.42 0 .18.19.29.45.29.71 0 .26-.11.52-.29.71Zm0-3.5-.15.12c-.06.04-.12.07-.18.09-.06.03-.12.05-.18.06-.07.01-.14.02-.2.02-.26 0-.52-.11-.71-.29-.18-.19-.29-.45-.29-.71 0-.26.11-.52.29-.71.1-.09.2-.16.33-.21.18-.08.38-.1.58-.06.06.01.12.03.18.06.06.02.12.05.18.09l.15.12c.18.19.29.45.29.71 0 .26-.11.52-.29.71Z"
    />
  </Svg>
);

export default CalendarIcon;
