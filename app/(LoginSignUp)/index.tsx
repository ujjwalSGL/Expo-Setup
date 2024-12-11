import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import React from "react";
import Entypo from "@expo/vector-icons/Entypo";
import { Link } from "expo-router";
import Login from "./Login";
import SignUp from "./SignUp";

const index = () => {
  return (
    <ImageBackground
      source={require("@/assets/images/LoginSignUp.jpg")}
      resizeMode="cover"
      className="flex-1 w-full h-full relative"
    >
      <View className="flex items-center justify-center">
        <Text className="text-gray-800 text-6xl font-extrabold pt-60">
          Examify
        </Text>
        <Text className="text-gray-600 text-xl font-extrabold ">
          Prepare. Practice. Perform.
        </Text>
      </View>
      <View className="bg-white rounded-t-3xl lg:w-full p-5 absolute bottom-0">
        <View className="flex items-center justify-center pt-10 gap-5 mb-10">
          <Entypo
            name="open-book"
            size={44}
            color="black"
            className="border-2 p-2 rounded-full"
          />
          <Text className="text-lg font-bold text-gray-700 text-center">
            Streamline your preparation with personalized resources and practice
            tests.
          </Text>
        </View>
        <View>
          <TouchableOpacity className="bg-white border-black border-2 p-3 w-full mt-4 lg:mt-4 rounded-full ">
            <View>
              <Link href="./Login">
                <Text className="text-xl text-black font-semibold text-center">
                  Login
                </Text>
              </Link>
            </View>
          </TouchableOpacity>
          <TouchableOpacity className="bg-black border-black border-2 p-3 w-full mt-4 lg:mt-4 rounded-full mb-16">
            <View>
              <Link href="./SignUp">
                <Text className="text-xl text-white font-semibold text-center">
                  Signup
                </Text>
              </Link>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default index;
