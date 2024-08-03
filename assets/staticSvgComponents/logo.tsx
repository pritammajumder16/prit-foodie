import React from "react";
import Svg, {
  Circle,
  Defs,
  LinearGradient,
  Stop,
  Text,
} from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  textColor?: string; // Customize the text color
}

const CustomLogo: React.FC<IconProps> = ({
  width = 50,
  height = 50,
  textColor = "#FFFFFF",
}) => (
  <Svg width={width} height={height} viewBox="0 0 32 32">
    {/* Gradient Background */}
    <Defs>
      <LinearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <Stop offset="0%" stopColor="#01A296" stopOpacity={1} />
        <Stop offset="100%" stopColor="#00B3A6" stopOpacity={1} />
      </LinearGradient>
    </Defs>
    <Circle cx="16" cy="16" r="16" fill="url(#grad1)" />

    {/* Outer Circle */}
    <Circle
      cx="16"
      cy="16"
      r="14"
      stroke="#FFFFFF"
      strokeWidth="2"
      fill="none"
    />

    {/* Center Circle */}
    <Circle
      cx="16"
      cy="16"
      r="12"
      stroke="#FFFFFF"
      strokeWidth="2"
      fill="none"
    />

    {/* Text */}
    <Text
      x="50%"
      y="62%"
      fontFamily="Arial"
      fontSize="10" // Adjusted font size for better fit
      fill={textColor}
      textAnchor="middle"
    >
      PM
    </Text>
  </Svg>
);

export default CustomLogo;
