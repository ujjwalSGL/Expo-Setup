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

        <TouchableOpacity className="bg-blue-700 flex-row items-center justify-center rounded-full p-4 w-full">
          <View className="flex-row items-center gap-2">
            <Link href="/TestList" className="text-lg text-white font-semibold">
              <Text>Go to TestList</Text>
            </Link>
            <View>
              <AntDesign name="arrowright" size={20} color="white" />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LeaderBoard;
