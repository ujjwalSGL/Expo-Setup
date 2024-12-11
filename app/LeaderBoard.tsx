import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Link } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";

const LeaderBoard = () => {
  return (
    <View className="flex-1 justify-center items-center bg-blue-600 p-4">
      <View className="bg-white rounded-3xl shadow-lg p-8 w-full max-w-sm items-center">
        <Image
          source={require("@/assets/images/LeaderBoard.png")}
          className="h-32 w-32 mb-6"
        />
        <Text className="text-3xl font-bold text-gray-800 mb-2 text-center">
          Congratulations!
        </Text>
        <Text className="text-lg text-gray-600 text-center mb-6">
          You've made it to the leaderboard! Keep up the great work!
        </Text>
        <TouchableOpacity className="w-full bg-blue-600 rounded-full py-3 px-6 active:bg-blue-700">
          <Link href="/" asChild>
            <View className="flex-row items-center justify-center">
              <Text className="text-white font-bold text-lg mr-2">
                Go to Test List
              </Text>
              <AntDesign name="arrowright" size={16} color="white" />
            </View>
          </Link>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LeaderBoard;
