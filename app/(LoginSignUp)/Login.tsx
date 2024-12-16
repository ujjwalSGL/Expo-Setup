import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Alert,
  Platform,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import { Link, useRouter } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

// const Navigation = useNavigation();

const Login = () => {
  const router = useRouter();
  const [value, setValue] = useState("");
  const [activeState, setActiveState] = useState(false);
  const userNumber = "123";
  const userEmail = "Ujjwal@gmail.com";

  const handleNavigation = () => {
    if (value === userNumber) {
      router.push("/TestList");
    } else if (value === userEmail) {
      router.push("/TestList");
    } else {
      Alert.alert("User not found");
    }
  };
  const handleLogintype = () => {
    setActiveState(!activeState);
    setValue("");
  };
  //  const handleContinue = () => {
  //   if (value === user) {
  //     navigation.navigate("/SignUp");
  //   } else {
  //     Alert.alert(
  //       "Invalid Input",
  //       "The entered value does not match the predefined value."
  //     );
  //   }
  // };
  return (
    // <KeyboardAvoidingView
    //   className="flex-1"
    //   behavior={Platform.OS === "android" ? "padding" : undefined}
    //   // keyboardVerticalOffset={0}
    // >
    <ImageBackground
      source={require("@/assets/images/LoginSignUp.jpg")}
      resizeMode="cover"
      className="flex-1 w-full lg:w-full h-full relative"
    >
      <View className="flex items-center justify-center">
        <Text className="text-gray-800 text-6xl font-extrabold pt-60">
          Examify
        </Text>
        <Text className="text-gray-600 text-xl font-extrabold ">
          Prepare. Practice. Perform.
        </Text>
      </View>

      <View className="bg-white rounded-t-3xl py-10 pb-16 w-full p-8 lg:w-full absolute bottom-0">
        <View className="flex flex-row gap-2 text-center">
          <Entypo name="open-book" size={24} color="black" />
          <Text className="text-lg font-semibold text-gray-500">Examify</Text>
        </View>
        <View>
          <Text className="text-2xl mt-8 font-semibold">
            Login to your account
          </Text>
          <Text className="text-gray-400 mt-2 gap-1">
            Don't have an account?
            <Link href="/SignUp">
              <Text className="text-blue-600 font-medium ">Signup</Text>
            </Link>
          </Text>
        </View>
        <View className="border border-gray-300 rounded-xl mt-12 p-5 w-full">
          {activeState ? (
            <View className="border-b-2 border-gray-300 flex flex-row pt-2 pb-2 pl-1">
              <TouchableOpacity>
                <Text className="text-2xl mt-3">
                  <MaterialIcons name="email" size={24} color="black" />
                </Text>
              </TouchableOpacity>

              <TextInput
                placeholder="Enter Your Email"
                value={value}
                onChangeText={setValue}
                inputMode="email"
                className="outline-none pl-2 w-44 text-lg ml-1 border-l border-gray-100"
              ></TextInput>
            </View>
          ) : (
            <View className="border-b-2 border-gray-300 flex-row items-center">
              <TouchableOpacity>
                <Text className="text-2xl pr-1">
                  🇮🇳 <FontAwesome name="angle-down" size={24} color="black" />
                </Text>
              </TouchableOpacity>

              <TextInput
                placeholder="Enter Mobile Number"
                value={value}
                onChangeText={setValue}
                keyboardType="phone-pad"
                className="flex-auto outline-none mb-2 pl-2 text-lg  border-l border-gray-100"
              />
            </View>
          )}

          <View>
            <TouchableOpacity
              className="bg-black text-white p-2.5 w-full mt-4 lg:mt-4 rounded-full"
              onPress={handleNavigation}
            >
              <Text className="text-lg text-white font-semibold text-center">
                Continue
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <View className="flex items-center justify-center">
                <Text
                  onPress={handleLogintype}
                  className="text-gray-400 font-medium item mt-5 hover:underline"
                >
                  {activeState ? "Login with number" : "Login with email"}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
    // </KeyboardAvoidingView>
  );
};

export default Login;
