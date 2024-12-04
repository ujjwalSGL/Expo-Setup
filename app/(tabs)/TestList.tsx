import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Link, router, useNavigation } from "expo-router";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { CircleCheck } from "lucide-react";
import { title } from "process";

const TestList = () => {
  const Navigation = useNavigation();

  const tests = [
    {
      id: 1,
      name: "Data Structure",
      topic: "LinkedList, Stack, Queue",
      date: "Thursday, 5 December, 6:00 PM",
      difficulty: "Hard",
      subject: "Data Structure",
    },
    {
      id: 2,
      name: "Operating System",
      topic: "LinkedList, Stack, Queue",
      date: "Thursday, 8 December, 6:00 PM",
      difficulty: "Medium",
      subject: "Operating System",
    },
    {
      id: 3,
      name: "Computer Networks",
      topic: "LinkedList, Stack, Queue",
      date: "Thursday, 9 December, 6:00 PM",
      difficulty: "Hard",
      subject: "Computer Networks",
    },
    {
      id: 4,
      name: "DBMS",
      topic: "LinkedList, Stack, Queue",
      date: "Thursday, 7 December, 6:00 PM",
      difficulty: "Easy",
      subject: "DBMS",
    },
  ];

  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 bg-gradient-to-b from-teal-100">
        <View className="flex flex-row justify-between gap-10 p-4 mt-4 px-10 items-center">
          <TouchableOpacity>
            <FontAwesome name="user-circle-o" size={32} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Feather name="settings" size={32} color="black" />
          </TouchableOpacity>
        </View>
        <ScrollView scrollEnabled={true}>
          <View className="flex justify-center items-center border-b-2 p-3 border-gray-200">
            <Image
              source={require("@/assets/images/Testheader.png")}
              className="h-44 w-full opacity-60"
            />
            <Text className="text-lg font-bold">Test Pending</Text>
          </View>
          <View className="mb-4 mt-2 gap-10 lg:grid lg:grid-cols-2">
            {tests.map((test) => (
              <View
                key={test.id}
                className="border border-gray-300 rounded-lg p-4 shadow-md mx-2 bg-gray-200 flex lg:justify-between justify-center"
              >
                {/* <View>
                  <Text className="font-semibold text-lg">{test.name}</Text>
                  <View className="flex-row mt-2 relative">
                    <AntDesign
                      name="clockcircleo"
                      size={16}
                      color="black"
                      className="pr-2 mt-0.5"
                    />
                    <Text className="text-gray-800 font-medium text-sm absolute ml-6 hover:underline cursor-pointer">
                      {test.date}
                    </Text>
                  </View>
                </View> */}

                <View className="flex-row relative">
                  <View>
                    <Text className="text-xl text-black font-semibold">
                      {test.name}
                    </Text>
                    <Text className="text-md text-gray-400 font-medium mt-1">
                      {test.topic}
                    </Text>
                  </View>
                  <View className="absolute right-3">
                    <Text
                      className={`text-md font-extrabold ${
                        test.difficulty === "Hard"
                          ? "text-red-600 bg-red-100 rounded-md p-1 border border-red-400"
                          : test.difficulty === "Medium"
                          ? "text-yellow-600 bg-yellow-100 rounded-md p-1 border border-yellow-400"
                          : "text-green-600 bg-green-100 rounded-md p-1 border border-green-400"
                      } `}
                    >
                      {test.difficulty}
                    </Text>
                  </View>
                </View>

                <View className="bg-white rounded-md mt-4">
                  <View className="  p-4 flex flex-row gap-5 border-b border-gray-300">
                    <View className="pl-2 w-11 justify-center">
                      <MaterialCommunityIcons
                        name="clock"
                        size={24}
                        color="black"
                      />
                    </View>
                    <View>
                      <Text className="text-md font-semibold text-gray-400">
                        Time Allowed
                      </Text>
                      <Text className="text-lg font-semibold">30 Min</Text>
                    </View>
                  </View>
                  <View className=" p-4 flex flex-row gap-5 border-b border-gray-300">
                    <View className="pl-2 pt-2 rounded-md w-11 ">
                      <MaterialCommunityIcons
                        name="message-processing"
                        size={24}
                        color="black"
                      />
                    </View>
                    <View>
                      <Text className="text-md font-semibold text-gray-400">
                        No. of Question
                      </Text>
                      <Text className="text-lg font-semibold">25</Text>
                    </View>
                  </View>
                  <View className="  p-4 flex flex-row gap-5 border-b border-gray-300">
                    <View className="pl-2 pt-2 rounded-md w-11">
                      <AntDesign name="checkcircle" size={24} color="black" />
                    </View>
                    <View>
                      <Text className="text-md font-semibold text-gray-400">
                        Total Marks
                      </Text>
                      <Text className="text-lg font-semibold">100</Text>
                    </View>
                  </View>
                </View>

                <View className="items-center">
                  <TouchableOpacity
                    className="bg-blue-600 hover:bg-blue-500 text-white lg:p-3 p-3 w-full mt-4 lg:mt-0 rounded-md"
                    onPress={() =>

                      // {
                      //   router.push("/explore");
                      // }
                      {
                        console.log("Hello");
                      }
                    }
                  >
                    <Link
                      href="/explore"
                      className="text-white text-center font-bold"
                    >
                      <Text className="text-lg">Proceed</Text>
                      <View className="pl-2 mt-3">
                        <AntDesign name="arrowright" size={16} color="white" />
                      </View>
                    </Link>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default TestList;
