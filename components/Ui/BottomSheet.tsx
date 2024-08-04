// BottomSheet.tsx
import React, { useEffect } from "react";
import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import Animated, {
  useSharedValue,
  withSpring,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

const { height: SCREEN_HEIGHT } = Dimensions.get("window");

interface BottomSheetProps {
  isVisible: boolean;
  onClose: () => void;
  children: JSX.Element;
}

const BottomSheet: React.FC<BottomSheetProps> = ({
  isVisible,
  children,
  onClose,
}) => {
  const translateY = useSharedValue(SCREEN_HEIGHT);

  useEffect(() => {
    translateY.value = isVisible
      ? withTiming(0, { duration: 300 })
      : withTiming(SCREEN_HEIGHT, { duration: 300 });
  }, [isVisible]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  return (
    <>
      {isVisible && (
        <TouchableOpacity
          className="absolute inset-0 bg-slate-400/50 bg-opacity-50 h-screen w-full"
          activeOpacity={1}
          onPress={onClose}
        />
      )}
      <Animated.View
        className="absolute bottom-0 w-full h-1/3 bg-white p-4 rounded-t-xl"
        style={animatedStyle}
      >
        {children}
      </Animated.View>
    </>
  );
};

export default BottomSheet;
