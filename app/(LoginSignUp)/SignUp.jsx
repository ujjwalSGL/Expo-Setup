import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React from "react";
import Entypo from "@expo/vector-icons/Entypo";
import { Link } from "expo-router";

const SignUp = () => {
  return (
    <KeyboardAvoidingView
      className="flex-1"
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      // keyboardVerticalOffset={50}
    >
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
        <View className="bg-white rounded-t-3xl p-5 absolute w-full bottom-0">
          <View className="flex flex-row items-center justify-center pt-10 gap-5 mb-10">
            <TouchableOpacity>
              <Link href="/">
                <Entypo name="chevron-left" size={24} color="black" />
              </Link>
            </TouchableOpacity>
            <Text className="text-2xl font-bold text-black text-center">
              Sign up
            </Text>
          </View>
          <TextInput
            placeholder="Full name"
            keyboardType="default"
            className="border-2 placeholder:accent-slate-300 rounded-full outline-none mb-2 pl-5 text-lg ml-1 border-l border-gray-100"
          />
          <TextInput
            placeholder="Phone Number"
            keyboardType="phone-pad"
            className="border-2 placeholder:accent-slate-300 rounded-full outline-none mb-2 pl-5 text-lg ml-1 border-l border-gray-100"
          />
          <TextInput
            placeholder="Email Id"
            keyboardType="email-address"
            className="border-2 placeholder:accent-slate-300 rounded-full outline-none mb-2 pl-5 text-lg ml-1 border-l border-gray-100"
          />
          <TextInput
            placeholder="Password"
            secureTextEntry={false}
            className="border-2 placeholder:accent-slate-300 rounded-full outline-none mb-2 pl-5 text-lg ml-1 border-l border-gray-100"
          />
          <TouchableOpacity className="bg-black border-black border-2 p-3 w-full mt-4 lg:mt-4 rounded-full mb-10">
            <Link href="./SignUp">
              <Text className="text-xl text-white font-semibold text-center">
                Signup
              </Text>
            </Link>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

export default SignUp;
