import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const Login = () => {
  return (
    <View className="bg-gray-100">
      <View className="bg-gray-100 h-screen justify-center items-center mx-4 lg:mx-60">
        <View className="bg-white rounded-xl py-10 pb-16 mb-16 shadow-md p-8 lg:w-full ">
          <View>
            <View className="flex flex-row gap-2 text-center">
              <Entypo name="open-book" size={24} color="black" />
              <Text className="text-lg font-semibold text-gray-500">
                Examify
              </Text>
            </View>
            <View>
              <Text className="text-2xl mt-8">Create new account</Text>
              <Text className="text-gray-400 mt-3">
                Have an account?{" "}
                <Text className="text-blue-600 hover:text-blue-500">Login</Text>
              </Text>
            </View>
            <View className="border border-gray-300 rounded-xl mt-12 p-5 w-full">
              <View className="border-b-2 border-gray-300 flex flex-row pt-2">
                <TouchableOpacity>
                  <Text className="text-2xl mt-3">
                    🇮🇳 <FontAwesome name="angle-down" size={24} color="black" />{" "}
                  </Text>
                </TouchableOpacity>

                <TextInput
                  placeholder=""
                  maxLength={14}
                  keyboardType="numeric"
                  defaultValue="+91 "
                  className=" outline-none mb-2 pl-2 w-44 text-lg ml-1 border-l border-gray-100"
                ></TextInput>
              </View>

              <View>
                <TouchableOpacity className="bg-blue-700 hover:bg-blue-600 text-white p-2.5 w-full mt-4 lg:mt-4 rounded-xl">
                  <Text className="text-lg text-white font-normal text-center">
                    Continue
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <View className="flex items-center justify-center">
                    <Text className="text-gray-400 font-medium item mt-5 hover:underline">
                      Signup with email
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Login;
