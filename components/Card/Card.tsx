// import React from "react";
// import { Text, View } from "react-native";

// const cardDimension = {
//   primary:
//     "w-full max-w-full border m-3 rounded-lg p-4 xs:max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl sm:p-6 md:p-8",
//   secondary:
//     "w-full p-8 m-8 w-5/6 lg:w-5/6 md:w-4/5 sm:w-3/4 border rounded-xl",
//   innerCard:
//     "w-full max-w-full border rounded-lg p-4 xs:max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl sm:p-6 md:p-8",
//   primaryTopleftBorder:
//     "w-full max-w-xs m-3 sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl p-4 border rounded-tl-lg sm:p-6 md:p-8",
//   primaryTopRightBorder:
//     " max-w-xs m-3 sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl p-4 border rounded-tr-lg sm:p-6 md:p-8",
//   primaryBottomLeftBorder:
//     "w-full max-w-xs m-3 sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl p-4 border rounded-bl-lg sm:p-6 md:p-8",
//   primaryBottomRightBorder:
//     " max-w-xs m-3 sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl p-4 border rounded-br-lg sm:p-6 md:p-8",
// };
// const cardTheme = {
//   defaultDark: "border-gray-200 shadow bg-gray-800 border-gray-700",
//   defaultLight: "border-gray-200 shadow bg-white text-black",
//   Light: "border-gray-200 shadow bg-gray-50 text-black",
// };

// interface CardProps {
//   children: React.ReactNode;
//   dimension?: keyof typeof cardDimension;
//   className?: string;
//   theme?: keyof typeof cardTheme;
// }
// function CardComponent({
//   children,
//   dimension = "primary",
//   theme = "defaultLight",
//   className,
// }: CardProps) {
//   const baseClass = "shadow-sm";
//   const DimensionClass = cardDimension[dimension];
//   const ThemeClass = cardTheme[theme];
//   return (
//     <Text
//       className={`${DimensionClass} ${baseClass} ${ThemeClass} ${
//         className || ""
//       }`}
//     >
//       {children}
//     </Text>
//   );
// }
// export default CardComponent;
import React from "react";
import { View, Text } from "react-native";

interface cardprops {
  title: string;
  description: string;
}

const Card = ({ title, description }: cardprops) => {
  return (
    <View className="bg-white rounded-lg shadow-md overflow-hidden my-3 mx-4 ">
      <Text className="text-lg font-bold text-gray-800">{title}</Text>
      <Text className="text-sm text-gray-600 mt-2">{description}</Text>
    </View>
  );
};

export default Card;
