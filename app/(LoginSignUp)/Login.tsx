import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Alert,
} from "react-native";
import PhoneInput from "react-native-phone-number-input";
import React, { useRef, useState } from "react";
import Entypo from "@expo/vector-icons/Entypo";
import { Link, useNavigation, useRouter } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";

// const Navigation = useNavigation();
const router = useRouter();
const Login = () => {
  const [value, setValue] = useState("");
  const user = "9759972969";
  const handleNavigation = () => {
    if (value === user) {
      router.push("/TestList");
    } else {
      Alert.alert("User not found");
    }
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
        <View>
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
            <View className="border-b-2 border-gray-300 flex flex-row pt-2 pb-2 ">
              <TouchableOpacity>
                <Text className="text-2xl mt-3">
                  🇮🇳 <FontAwesome name="angle-down" size={24} color="black" />{" "}
                </Text>
              </TouchableOpacity>

              <TextInput
                placeholder=""
                maxLength={14}
                value={value}
                onChangeText={setValue}
                keyboardType="numeric"
                defaultValue="+91 "
                className=" outline-none mb-2 pl-2 w-44 text-lg ml-1 border-l border-gray-100"
              ></TextInput>
            </View>

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
                  <Text className="text-gray-400 font-medium item mt-5 hover:underline">
                    Signup with email
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Login;
