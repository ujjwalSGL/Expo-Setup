import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Platform,
} from "react-native";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Link, useNavigation } from "expo-router";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { DrawerActions } from "@react-navigation/native";

const TestList = () => {
  const Navigation = useNavigation();

  const [enter, setEnter] = useState<boolean>(false);
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
  const handleProceed = () => {
    console.log("Enrter");
    Navigation.navigate("Test", { subject: test.subject });
    setEnter(true);
  };

  const insets = useSafeAreaInsets();
  const contentInsets = {
    top: insets.top,
    bottom: insets.bottom,
    left: 12,
    right: 12,
  };
  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1">
        <View className="flex flex-row justify-between gap-10 p-3 lg:pt-3 pt-8 px-6 items-center border-b-2 border-gray-300">
          <TouchableOpacity
            className="border flex flex-row border-gray-400 p-2 gap-2 rounded-md"
            onPress={() => {
              console.log("Hello");

              Navigation.dispatch(DrawerActions.openDrawer());
            }}
          >
            <MaterialIcons name="menu" size={24} color="black" />
          </TouchableOpacity>
          <View className="flex flex-row">
            <TouchableOpacity>
              <View className="border flex flex-row border-gray-400 p-2 gap-2 justify-center items-center rounded-md mr-3">
                <FontAwesome5 name="book" size={24} color="black" />
                <Text className="text-gray-400 font-medium">Topics</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="outline"
                      className="border border-gray-400"
                    >
                      <Text>
                        <FontAwesome5 name="user-alt" size={20} color="black" />
                      </Text>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    insets={contentInsets}
                    className="w-64 native:w-72 bg-slate-50"
                  >
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                      <DropdownMenuItem>
                        <Text>Test</Text>
                      </DropdownMenuItem>
                      {/* <DropdownMenuSub>
                        <DropdownMenuSubTrigger>
                          <Text>Invite users</Text>
                        </DropdownMenuSubTrigger>
                        <DropdownMenuSubContent className="bg-slate-50">
                          <Animated.View entering={FadeIn.duration(200)}>
                            <DropdownMenuItem>
                              <Text>Email</Text>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Text>Message</Text>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                              <Text>More...</Text>
                            </DropdownMenuItem>
                          </Animated.View>
                        </DropdownMenuSubContent>
                      </DropdownMenuSub> */}
                      <DropdownMenuItem>
                        <Text>New Test</Text>
                        <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <Link
                        href={"https://github.com/ujjwalSGL/Expo-Setup"}
                        target="_blank"
                      >
                        GitHub
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Text>Support</Text>
                    </DropdownMenuItem>
                    {/* <DropdownMenuItem disabled>
                      <Text>API</Text>
                    </DropdownMenuItem> */}
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <Text>
                        <Link href="/(LoginSignUp)">Log out</Link>
                      </Text>
                      <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </View>
              {/* <View>
                <Link href="/(profile)">
                  <FontAwesome5 name="user-alt" size={20} color="black" />
                </Link>
              </View> */}
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView scrollEnabled={true}>
          <View className="flex justify-center items-center p-3 border-gray-200 mt-2 mb-2">
            <Image
              source={require("@/assets/images/TestPageHeader.png")}
              height={12}
              width={10}
              className="h-16 w-16"
            />
            <Text className="text-xl font-bold">Your Test is ready!</Text>
            <Text className="text-md font-bold text-center px-5 text-gray-400">
              Your customized test has been sucessfully generated.
            </Text>
          </View>
          <View className="mb-4 mt-2 gap-10">
            {tests.map((test) => (
              <View
                key={test.id}
                className="border border-gray-300 rounded-lg p-4 shadow-md lg:mx-5 mx-3 bg-gray-200 flex lg:justify-between justify-center"
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
                    className="bg-blue-700 hover:bg-blue-600 flex-row items-center justify-center lg:p-3 p-3 w-full mt-4 lg:mt-3 rounded-full"
                    onPress={() => {
                      Navigation.navigate("Test", { subject: test.subject });
                      setEnter(true);
                    }}
                  >
                    {/* {enter ? ( */}
                    {/* <View className="flex-row items-center bg-green-600 hover:bg-green-500">
                        <Text className="text-lg text-white font-semibold">
                          Done
                        </Text>
                        <View className="pl-2">
                          <AntDesign
                            name="arrowright"
                            size={16}
                            color="white"
                          />
                        </View>
                      </View>
                    ) : ( */}
                    <View className="flex-row items-center">
                      <Text className="text-lg text-white font-semibold">
                        Proceed
                      </Text>
                      <View className="pl-2">
                        <AntDesign name="arrowright" size={16} color="white" />
                      </View>
                    </View>
                    {/* )
                    } */}
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
