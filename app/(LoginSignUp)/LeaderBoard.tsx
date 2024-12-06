import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import React from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Link } from "expo-router";
import Entypo from "@expo/vector-icons/Entypo";
import AntDesign from "@expo/vector-icons/AntDesign";

const LeaderBoard = () => {
  return (
    <View className="bg-gray-100">
      <View className="flex justify-center items-center">
        <View className="items-center">
          <ImageBackground
            source={{
              uri: "https://static.vecteezy.com/system/resources/previews/006/082/809/non_2x/colorful-confetti-and-tinsel-explosion-on-a-white-background-multicolor-party-confetti-and-foil-paper-falling-background-festival-and-birthday-celebration-frame-elements-vector.jpg",
            }}
            resizeMode="cover"
            className=""
          >
            <Text className="text-xl font-medium">
              You have Complete the Exam
            </Text>
            <Text className="text-lg font-semibold">Subject Name</Text>
            <Text className="text-gray-400 font-medium">
              Here are your results:
            </Text>
          </ImageBackground>
        </View>
        <Text className="flex flex-col justify-center items-center space-y-4 mt-10">
          <View className="grid grid-cols-2 gap-4 mx-2">
            <View className="flex flex-row justify-center items-center gap-2 bg-white rounded-xl py-4 px-2 shadow-md">
              <View>
                <MaterialIcons name="layers" size={24} color="blue" />
              </View>
              <View>
                <Text className="text-lg font-medium">15</Text>
                <Text className="text-sm font-medium text-gray-400">
                  Total Question
                </Text>
              </View>
            </View>
            <View className="flex flex-row justify-center items-center gap-2 bg-white rounded-xl py-4 px-2 shadow-md">
              <View>
                <AntDesign name="clockcircle" size={24} color="blue" />
              </View>
              <View>
                <Text className="text-lg font-medium">20 min</Text>
                <Text className="text-sm font-medium text-gray-400">
                  workine time
                </Text>
              </View>
            </View>
            <View className="flex flex-row justify-center items-center gap-2 bg-white rounded-xl py-4 px-2 shadow-md">
              <View>
                <AntDesign name="star" size={24} color="blue" />
              </View>
              <View>
                <Text className="text-lg font-medium">92</Text>
                <Text className="text-sm font-medium text-gray-400">
                  Quiz Score
                </Text>
              </View>
            </View>
            <View className="flex flex-row justify-center items-center gap-2 bg-white rounded-xl py-4 px-2 shadow-md">
              <View>
                <MaterialIcons name="layers" size={24} color="blue" />
              </View>
              <View>
                <Text className="text-lg font-medium">15</Text>
                <Text className="text-sm font-medium text-gray-400">
                  Answered questions
                </Text>
              </View>
            </View>
          </View>
        </Text>
      </View>

      <View className="flex flex-row mx-5 mt-10 gap-4 ">
        <TouchableOpacity>
          <View className="rounded-full bg-gray-300 p-3">
            <Entypo name="share" size={24} color="black" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity className="pr-5">
          <View className="bg-blue-700 rounded-full flex items-center justify-center">
            <Text
              className="text-white p-5 font-semibold"
              // onPress={handleSubmit}
            >
              {/* <Link href="/TestList"></Link> */}
              Submit
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LeaderBoard;
