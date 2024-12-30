import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Pressable,
  Modal,
  TextInput,
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
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React, { useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { Button } from "@/components/ui/button";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { Link } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AddTest = () => {
  const [active, setActive] = useState(false);
  const [examName, setExamName] = useState<string>("");
  const [examDate, setExamDate] = useState<string>("");
  const [duration, setDuration] = useState<string>("");
  const [attempts, setAttempts] = useState<string>("");
  const [tests, setTests] = useState<any[]>([]);
  const handleAddTest = () => {
    setActive(!active);
  };
  const next = () => {
    const newTest = {
      examName,
      examDate,
      duration,
      attempts,
    };
    setTests([...tests, newTest]);
    setExamName("");
    setExamDate("");
    setDuration("");
    setAttempts("");
  };
  const handleAddQuestion = async () => {
    // const newQuestion = {
    //   question: question,
    //   type: questionType,
    //   options: questionType === "mcq" ? mcqOption : [],
    //   ans: questionType === "mcq" ? mcqCorrectAnswer : answer,
    //   label: questionLable,
    //   Subject,
    // };
    const newTest = {
      examName: examName,
      examDate: examDate,
      duration: duration,
      attempts: attempts,
    };

    try {
      const currentTest = await AsyncStorage.getItem("Test");
      const Tests = currentTest ? JSON.parse(currentTest) : [];
      tests.push(newTest);
      await AsyncStorage.setItem("Tests", JSON.stringify(Tests));
      console.log("Test added successfully");
      setExamName("");
      setExamDate("");
      setDuration("");
      setAttempts("");
    } catch (error) {
      console.error("Error adding Test:", error);
    }
  };
  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1">
        {/* Header> */}
        <View className="gap-40 p-3 lg:pt-3 px-6 border-b-2 border-gray-300 flex-row justify-between items-center">
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
                        <FontAwesome5 name="user-alt" size={20} color="black" />
                      </Text>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-64 native:w-72 bg-slate-50">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                      <DropdownMenuItem>
                        <Text>Test</Text>
                      </DropdownMenuItem>
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

        <ScrollView>
          <View>
            <View className="flex-row items-center justify-between mx-2 my-4">
              <View className="flex-row items-center justify-end">
                <Text className="text-xl font-bold mb-1"> Test List</Text>
              </View>
              <View>
                <TouchableOpacity className="flex-row items-center justify-end">
                  <Text
                    className="text-sm bg-blue-900 rounded-md text-white p-2"
                    onPress={handleAddTest}
                  >
                    + Add Test
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            {/* TestList */}
            {/* <View className=" h-screen">
              <View className="mt-5">
                <View className="mx-2  rounded-md py-3 border border-gray-300 flex-row grid grid-cols-5 items-center bg-slate-200 justify-around gap-2 mt-1">
                  <Text className="text-center pl-1 font-medium">
                    Test Name
                  </Text>
                  <Text className="text-center font-medium">Test Date</Text>
                  <Text className="text-center font-medium">Attempts</Text>
                  <Text className="text-center font-medium">Marks</Text>
                  <Text className="text-center font-medium">Edit</Text>
                </View>
              </View>
              <View className="mx-2  rounded-md py-3 border border-gray-300 flex-row grid grid-cols-5 items-center justify-around gap-2 mt-1">
                <TouchableOpacity>
                  <Text className="text-base text-center px-2">FA1</Text>
                </TouchableOpacity>
                <Text className="text-center">12/01/2025</Text>
                <Text className="text-center">3</Text>
                <Text className="text-center">50</Text>
                <Text className="text-center">
                  <TouchableOpacity>
                    <FontAwesome name="edit" size={24} color="black" />
                  </TouchableOpacity>
                </Text>
              </View>
              <View className="mx-2 rounded-md py-3 border border-gray-300 flex-row grid grid-cols-5 items-center justify-around gap-2 mt-1">
                <TouchableOpacity>
                  <Text className="text-base text-center px-2">FA1</Text>
                </TouchableOpacity>
                <Text className="text-center ">12/01/2025</Text>
                <Text className="text-center">3</Text>
                <Text className="text-center">50</Text>
                <Text className="text-center">
                  <TouchableOpacity>
                    <FontAwesome name="edit" size={24} color="black" />
                  </TouchableOpacity>
                </Text>
              </View>
              <View className="mx-2  rounded-md py-3 border border-gray-300 flex-row grid grid-cols-5 items-center justify-around gap-2 mt-1">
                <TouchableOpacity>
                  <Text className="text-base text-center px-2">FA1</Text>
                </TouchableOpacity>
                <Text className="text-center">12/01/2025</Text>
                <Text className="text-center">3</Text>
                <Text className="text-center">50</Text>
                <Text className="text-center">
                  <TouchableOpacity>
                    <FontAwesome name="edit" size={24} color="black" />
                  </TouchableOpacity>
                </Text>
              </View>
            </View> */}
            <View className="flex-1 bg-gray-100 p-4 mt-4">
              <View className="mt-5">
                <View className="mx-2  rounded-md py-3 border border-gray-300 flex-row grid grid-cols-5 items-center bg-slate-200 justify-around gap-2 mt-1">
                  <Text className="text-center pl-1 font-medium">
                    Test Name
                  </Text>
                  <Text className="text-center font-medium">Test Date</Text>
                  <Text className="text-center font-medium">Attempts</Text>
                  <Text className="text-center font-medium">Marks</Text>
                  <Text className="text-center font-medium">Edit</Text>
                </View>
              </View>

              {tests.length > 0 ? (
                tests.map((test, index) => (
                  <View
                    key={index}
                    className="mx-2 rounded-md py-3 border border-gray-300 flex-row grid grid-cols-5 items-center justify-around gap-2 mt-2"
                  >
                    <Text className="text-base text-center px-2">
                      {test.examName}
                    </Text>
                    <Text className="text-center">{test.examDate}</Text>
                    <Text className="text-center">{test.duration}</Text>
                    <Text className="text-center">{test.attempts}</Text>
                    <Text className="text-center">
                      <TouchableOpacity>
                        <FontAwesome name="edit" size={24} color="black" />
                      </TouchableOpacity>
                    </Text>
                  </View>
                ))
              ) : (
                <Text className="text-center text-gray-500 mt-5">
                  No tests added
                </Text>
              )}
            </View>
            <View>
              {active && (
                <Modal transparent animationType="fade" visible={active}>
                  <Pressable
                    className="flex-1 bg-black/50"
                    onPress={() => handleAddTest()}
                  />
                  <View className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white shadow-lg rounded-lg min-w-96 lg:w-full p-2">
                    <View className="flex-row justify-between items-center">
                      <Text className="font-bold text-gray-700 text-xl px-2">
                        Exam Instruction
                      </Text>
                      <TouchableOpacity
                        className=" px-4 py-2 rounded-lg"
                        onPress={() => handleAddTest()}
                      >
                        <Text className="font-bold">X</Text>
                      </TouchableOpacity>
                    </View>
                    <View className="">
                      <View className="p-3">
                        <View className="grid grid-cols-2 gap-3">
                          <View>
                            <Text className="mt-3 text-base font-medium">
                              Exam Name <Text className="text-red-500">*</Text>
                            </Text>
                            <TextInput
                              className="mt-1 border border-gray-400 rounded-md p-2 px-3"
                              placeholder="Final Exam"
                              placeholderTextColor={"gray"}
                              value={examName}
                              onChangeText={setExamName}
                            />
                          </View>

                          <View>
                            <Text className="mt-3 text-base font-medium">
                              Exam Date <Text className="text-red-500">*</Text>
                            </Text>
                            <TextInput
                              className="mt-1 border border-gray-400 rounded-md p-2 px-3 "
                              placeholder="4/12/2024"
                              placeholderTextColor={"gray"}
                              value={examDate}
                              onChangeText={setExamDate}
                            />
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
                              onChangeText={setDuration}
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
                              onChangeText={setAttempts}
                            />
                          </View>
                        </View>
                        <TouchableOpacity className="flex-row justify-end items-center gap-2 mt-5">
                          <Text
                            className="font-medium text-lg text-white bg-blue-700 py-1.5 px-5 rounded-lg "
                            onPress={() => next()}
                            // href="/Question"
                          >
                            Next
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </Modal>
              )}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default AddTest;
