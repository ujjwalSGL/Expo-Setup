import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Pressable,
  Modal,
  TextInput,
  Alert,
  BackHandler,
  PanResponder,
} from "react-native";
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
  GestureHandlerRootView,
  Swipeable,
} from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

import DateTimePicker from "react-native-ui-datepicker";
import dayjs, { Dayjs } from "dayjs";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React, { useEffect, useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Button } from "@/components/ui/button";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { Link } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusBar } from "expo-status-bar";

const AddTest = () => {
  const [active, setActive] = useState(false);
  const [examName, setExamName] = useState<string>("");
  const [examDate, setExamDate] = useState<Dayjs | string>(dayjs());
  const [duration, setDuration] = useState<string>("");
  const [attempts, setAttempts] = useState<string>("");
  const [tests, setTests] = useState<any[]>([]);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [activeTab, setActiveTab] = useState("All Tests");
  const handleAddTest = () => {
    setActive(!active);
  };

  // Load Previous Data
  useEffect(() => {
    const loadTests = async () => {
      try {
        const storeTests = await AsyncStorage.getItem("Tests");
        if (storeTests) {
          setTests(JSON.parse(storeTests));
        }
      } catch (error) {
        console.error("Error loading Tests:", error);
      }
    };
    loadTests();
  }, []);

  const next = async () => {
    const newTest = {
      examName,
      id: new Date().getTime().toString(),
      examDate: new Date(examDate.toISOString()).toDateString(),
      duration,
      attempts,
    };

    const updatedTests = [...tests, newTest];
    setTests(updatedTests);
    setExamName("");
    setExamDate(dayjs());
    setDuration("");
    setAttempts("");
    setActive(false);
    try {
      await AsyncStorage.setItem("Tests", JSON.stringify(updatedTests));
      console.log("Test added successfully");
    } catch (error) {
      console.log("Error adding test:", error);
    }
  };
  // Delete Test
  const deleteTest = async (id: string) => {
    Alert.alert("Delete Test", "Are you sure you want to delete this test?", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: "Delete",
        onPress: async () => {
          const updatedTests = tests.filter((test) => test.id !== id);
          setTests(updatedTests);
          try {
            await AsyncStorage.setItem("Tests", JSON.stringify(updatedTests));
          } catch (err) {
            console.error("Error deleting Test:", err);
          }
        },
      },
    ]);
  };

  const renderRightAction = (id: string) => {
    return (
      <TouchableOpacity
        className="bg-red-500 justify-center items-center w-20 my-5 rounded-l-md rounded-r-md"
        onPress={() => deleteTest(id)}
      >
        <Text className="text-white font-bold">Delete</Text>
      </TouchableOpacity>
    );
  };
  const renderLeftAction = (id: string) => {
    return (
      <TouchableOpacity
        className="bg-green-500 justify-center items-center w-20 my-5 rounded-l-md rounded-r-md"
        onPress={() => deleteTest(id)}
      >
        <Text className="text-white font-bold">Archive</Text>
      </TouchableOpacity>
    );
  };
  // Gesture Navigation
  const navigation = useNavigation();
  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: (_, gestureState) =>
      Math.abs(gestureState.dx) > Math.abs(gestureState.dy) &&
      Math.abs(gestureState.dx) > 20,
    onPanResponderRelease: (_, gestureState) => {
      if (gestureState.dx > 50) {
        navigation.goBack();
      } else if (gestureState.dx < -50) {
        navigation.navigate("Question");
      }
    },
  });

  const tabs = ["All Tests", "Ongoing", "Upcoming"];
  console.log("examdata", examDate);
  return (
    <GestureHandlerRootView>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <SafeAreaProvider {...panResponder.panHandlers}>
        <SafeAreaView className="flex-1 mt-7">
          {/* Header> */}
          <View className="gap-40 p-3 lg:pt-3 px-4 border-b-2 border-gray-300 flex-row justify-between items-center">
            <TouchableOpacity className="border flex flex-row border-gray-400 p-2 gap-2 rounded-md">
              <MaterialIcons name="menu" size={24} color="black" />
            </TouchableOpacity>
            <View className="">
              <TouchableOpacity>
                <View>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="outline"
                        className="border border-gray-400"
                      >
                        <Text>
                          <FontAwesome5
                            name="user-alt"
                            size={20}
                            color="black"
                          />
                        </Text>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-64 native:w-72 bg-slate-50">
                      <DropdownMenuLabel>My Account</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuGroup>
                        <DropdownMenuItem>
                          <Link href="/TestList" target="_blank">
                            Test
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Link href="/AddTests" target="_blank">
                            New Test
                          </Link>
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
              </TouchableOpacity>
            </View>
          </View>

          <View className="flex-row items-center justify-end mx-4 my-4 ">
            <TouchableOpacity
              className="flex-row items-center justify-end"
              onPress={() => handleAddTest()}
            >
              <Text className="text-md bg-blue-900 rounded-md font-medium text-white p-2 ">
                + Add Test
              </Text>
            </TouchableOpacity>
          </View>
          <View className="mt-8">
            <View className="flex-row justify-between items-center px-4 pb-5 border-b-2 border-gray-300">
              {tabs.map((tab) => (
                <TouchableOpacity
                  key={tab}
                  onPress={() => setActiveTab(tab)}
                  className={`border-b-2 font-medium ${
                    activeTab === tab ? "border-blue-900" : "border-transparent"
                  }`}
                >
                  <Text
                    className={`text-lg font-medium ${
                      activeTab === tab ? "text-black" : "text-gray-500"
                    }`}
                  >
                    {tab}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          <ScrollView scrollEnabled={true}>
            {/* TestList */}
            <View className="flex-1 bg-gray-100 p-1">
              <View className="mt-4">
                {tests.length > 0 ? (
                  tests.map((test) => (
                    <Swipeable
                      key={test.id}
                      renderRightActions={() => renderRightAction(test.id)}
                      renderLeftActions={() => renderLeftAction(test.id)}
                    >
                      <View
                        key={test.id}
                        className="border border-gray-300 mb-4 rounded-lg p-4 shadow-md lg:mx-5 mx-3 bg-gray-200 flex lg:justify-between justify-center mt-4"
                      >
                        <View>
                          <Text className="text-xl text-black font-semibold">
                            {test.examName}
                          </Text>
                          <Text className="text-xs text-gray-400 font-medium mt-1">
                            {test.examDate}
                          </Text>
                        </View>
                        <View className="bg-white rounded-md mt-4 flex-row justify-start items-center">
                          <View className="p-4 justify-start">
                            <View className="flex-row justify-start items-center gap-2">
                              <Text className="text-md font-semibold text-gray-400">
                                Duration :
                              </Text>
                              <Text className="text-sm font-medium">
                                {test.duration} hr
                              </Text>
                            </View>
                          </View>
                          <View className="p-4 justify-start">
                            <View className="flex-row justify-start items-center gap-2">
                              <Text className="text-md font-semibold  text-gray-400">
                                Attempts :
                              </Text>
                              <Text className="text-sm font-medium">
                                {test.attempts}
                              </Text>
                            </View>
                          </View>
                          <View className="p-4 justify-start">
                            <View className="flex-row justify-start items-center gap-2">
                              <Text className="text-md font-semibold  text-gray-400">
                                Marks :
                              </Text>
                              <Text className="text-sm font-medium">100</Text>
                            </View>
                          </View>
                        </View>
                      </View>
                    </Swipeable>
                  ))
                ) : (
                  <Text className="text-center text-gray-500 mt-5">
                    No tests added
                  </Text>
                )}
              </View>
            </View>
            {/* Add Test Modal */}
            <View>
              {active && (
                <Modal transparent animationType="fade" visible={active}>
                  <Pressable
                    className="flex-1 bg-black/50"
                    onPress={() => handleAddTest()}
                  />
                  <View className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white shadow-lg rounded-lg w-96 min-h-96 lg:w-full p-2">
                    <View className="flex-row justify-center mt-4 items-center">
                      <Text className="font-bold text-gray-700 text-2xl px-2">
                        Exam Instruction
                      </Text>
                    </View>
                    <View className="">
                      <View className="p-3">
                        <View className="gap-3">
                          <View>
                            <Text className="mt-3 text-base font-medium">
                              Exam Name
                              <Text className="text-red-500">*</Text>
                            </Text>
                            <TextInput
                              className="mt-1 border border-gray-400 rounded-md p-2 px-3"
                              placeholder="Enter here ..."
                              placeholderTextColor={"gray"}
                              value={examName}
                              inputMode="text"
                              onChangeText={setExamName}
                            />
                          </View>

                          <View>
                            <Text className="mt-3 text-base font-medium">
                              Exam Date
                              <Text className="text-red-500">*</Text>
                            </Text>

                            <TextInput
                              className="mt-1 border border-gray-400 rounded-md p-2 px-3"
                              placeholder="YYYY-MM-DD"
                              placeholderTextColor={"gray"}
                              value={
                                typeof examDate === "string"
                                  ? examDate
                                  : examDate.format("YYYY-MM-DD")
                              }
                              onChangeText={setExamDate}
                              onPress={() => setShowDatePicker(true)}
                            />
                            {showDatePicker && (
                              <Modal
                                transparent
                                animationType="fade"
                                visible={showDatePicker}
                              >
                                <View className="absolute top-1/2 left-1/2 -translate-x-36 -translate-y-8 bg-white shadow-lg rounded-lg w-72 lg:w-96  p-2">
                                  <DateTimePicker
                                    mode="single"
                                    date={examDate}
                                    onChange={(params) => {
                                      console.log("params", params);
                                      setExamDate(params.date);
                                      setShowDatePicker(false);
                                    }}
                                    height={200}
                                  />
                                </View>
                              </Modal>
                            )}
                          </View>
                          <View>
                            <Text className="mt-3 text-base font-medium">
                              Duration <Text className="text-red-500">*</Text>
                            </Text>
                            <TextInput
                              className="mt-1 border border-gray-400 rounded-md p-2 px-3 "
                              placeholder="1 hour 30 minutes"
                              placeholderTextColor={"gray"}
                              value={duration}
                              inputMode="numeric"
                              onChangeText={setDuration}
                              maxLength={3}
                            />
                          </View>
                          <View>
                            <Text className="mt-3 text-base font-medium">
                              Attempts <Text className="text-red-500">*</Text>
                            </Text>
                            <TextInput
                              className="mt-1 border border-gray-400 rounded-md p-2 px-3"
                              placeholder="3"
                              placeholderTextColor={"gray"}
                              value={attempts}
                              inputMode="numeric"
                              onChangeText={setAttempts}
                              maxLength={2}
                            />
                          </View>
                        </View>
                        <TouchableOpacity className="flex-row justify-end items-center gap-2 mt-16">
                          <Link
                            className="font-medium text-lg text-white bg-blue-700 py-1.5 px-5 rounded-lg "
                            onPress={() => next()}
                            href="/Question"
                          >
                            Next
                          </Link>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </Modal>
              )}
            </View>
          </ScrollView>
        </SafeAreaView>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default AddTest;
