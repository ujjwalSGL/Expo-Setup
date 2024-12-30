import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import FontAwesome from "@expo/vector-icons/FontAwesome";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Link, useNavigation } from "expo-router";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Button } from "@/components/ui/button";
import { SafeAreaProvider } from "react-native-safe-area-context";

const index = () => {
  const Navigation = useNavigation();
  const [question, setQuestion] = useState("");
  const [mcqOption, setMcqOption] = useState([""]);
  const [mcqCorrectAnswer, setMcqCorrectAnswer] = useState("");
  const [value, setValue] = React.useState("account");
  const handleAddOption = () => {
    if (mcqOption.length < 4) {
      setMcqOption([...mcqOption, ""]);
    }
  };

  const handleDeleteOption = () => {
    if (mcqOption.length > 1) {
      setMcqOption(mcqOption.slice(0, -1));
    }
  };

  const handleOptionChange = (text: string, index: number) => {
    const updatedOptions = [...mcqOption];
    updatedOptions[index] = text;
    setMcqOption(updatedOptions);
  };

  const [isOpen, setIsOpen] = useState(false);
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1">
        <View className="gap-40 p-3 lg:pt-3 pt-8 px-6 border-b-2 border-gray-300 flex-row justify-between items-center">
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
        <ScrollView scrollEnabled={true} className="mx-2">
          {/*Accordion*/}

          <View className="border border-gray-300 rounded-sm mx-3 mt-10">
            <TouchableOpacity
              onPress={toggleAccordion}
              className="flex-row justify-between items-center p-3 border-b border-gray-300 bg-gray-200"
            >
              <Text className="font-normal text-gray-700 text-base">
                Exam Instruction
              </Text>
              <FontAwesome
                name={isOpen ? "chevron-up" : "chevron-down"}
                size={14}
                color="gray"
              />
            </TouchableOpacity>
            {isOpen && (
              <View className="p-3">
                <View className="grid grid-cols-2 gap-3">
                  <View>
                    <Text className="mt-3 text-sm font-medium">
                      Exam Name <Text className="text-red-500">*</Text>
                    </Text>
                    <TextInput
                      className="mt-1 border border-gray-400 rounded-md p-2 px-3"
                      placeholder="Final Exam"
                      placeholderTextColor={"gray"}
                    />
                  </View>

                  <View>
                    <Text className="mt-3 text-sm font-medium">
                      Exam Date <Text className="text-red-500">*</Text>
                    </Text>
                    <TextInput
                      className="mt-1 border border-gray-400 rounded-md p-2 px-3 "
                      placeholder="4/12/2024"
                      placeholderTextColor={"gray"}
                    />
                  </View>
                  <View>
                    <Text className="mt-3 text-sm font-medium">
                      Duration <Text className="text-red-500">*</Text>
                    </Text>
                    <TextInput
                      className="mt-1 border border-gray-400 rounded-md p-2 px-3 "
                      placeholder="1 hour 30 minutes"
                      placeholderTextColor={"gray"}
                    />
                  </View>
                  <View>
                    <Text className="mt-3 text-sm font-medium">
                      Attempts <Text className="text-red-500">*</Text>
                    </Text>
                    <TextInput
                      className="mt-1 border border-gray-400 rounded-md p-2 px-3"
                      placeholder="3"
                      placeholderTextColor={"gray"}
                    />
                  </View>
                </View>

                <Text className="text-base font-medium mt-5">Questions</Text>
                <TouchableOpacity className="flex-row justify-center items-center gap-2 mt-4 bg-blue-600 p-3 rounded-full">
                  <FontAwesome6 name="add" size={14} color="white" />
                  <Text className="font-medium text-sm text-white">
                    Add Question
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </View>

          {/*2nd Accoirdion*/}

          <View className="border border-gray-300 rounded-sm mx-3 mt-0.5">
            <TouchableOpacity
              onPress={toggleAccordion}
              className="flex-row justify-between items-center p-3 border-b border-gray-300 bg-gray-200"
            >
              <Text className="font-normal text-gray-700 text-base">
                Questions
              </Text>
              <FontAwesome
                name={isOpen ? "chevron-up" : "chevron-down"}
                size={14}
                color="gray"
              />
            </TouchableOpacity>
            {isOpen && (
              <View className="flex-1 justify-center p-6">
                <Tabs
                  value={value}
                  onValueChange={setValue}
                  className=" flex-col gap-1.5"
                >
                  <TabsList className="flex-row w-full">
                    <TabsTrigger value="MCQ" className="flex-1">
                      <Text>MCQ</Text>
                    </TabsTrigger>
                    <TabsTrigger value="T/F" className="flex-1">
                      <Text>T/F</Text>
                    </TabsTrigger>
                    <TabsTrigger value="Long" className="flex-1">
                      <Text>Long</Text>
                    </TabsTrigger>
                  </TabsList>
                  {/* MCQ TAB */}

                  <TabsContent value="MCQ">
                    <View className="mt-4">
                      <Text className=" text-gray-700 text-sm font-medium ">
                        Question
                      </Text>
                      <View className="flex-row gap-2 justify-start items-center">
                        <TextInput
                          value={question}
                          onChangeText={setQuestion}
                          className="mt-1 border border-gray-400 rounded-md p-2.5 px-3 w-full"
                          placeholder="Enter Question"
                          placeholderTextColor={"gray"}
                        />
                      </View>
                      <View>
                        <View className="mt-4">
                          <Text className="font-medium">Options</Text>
                          {mcqOption.map((option, index) => {
                            console.log(index);
                            return (
                              <View key={index} className="gap-3 mt-2">
                                <TextInput
                                  value={question}
                                  onChangeText={setQuestion}
                                  className="mt-0.5 border border-gray-400 rounded-md p-2.5 px-3 "
                                  placeholder=""
                                  value={option}
                                  placeholderTextColor={"gray"}
                                  onChangeText={(text) => {
                                    handleOptionChange(text, index);
                                  }}
                                />
                              </View>
                            );
                          })}
                          <View className="flex-row justify-between my-4">
                            <TouchableOpacity>
                              <Text
                                onPress={handleAddOption}
                                className="bg-blue-600 font-medium text-sm text-white p-2 rounded-lg"
                              >
                                Add
                              </Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                              <Text
                                onPress={handleDeleteOption}
                                className="bg-red-600 font-medium text-sm text-white p-2 rounded-lg"
                              >
                                Delete
                              </Text>
                            </TouchableOpacity>
                          </View>
                        </View>
                        <View className="gap-3 mt-2">
                          <Text className="font-medium">Answer</Text>
                          <TextInput
                            className="mt-0.5 border border-gray-400 rounded-md p-2.5 px-3 "
                            placeholder="Enter Correct Answer . . . ."
                            value={mcqCorrectAnswer}
                            onChangeText={setMcqCorrectAnswer}
                          />
                        </View>
                      </View>
                    </View>
                    <TouchableOpacity className="flex-row justify-center items-center gap-2 mt-4 bg-blue-600 p-3 rounded-full">
                      <Text className="font-medium text-sm text-white">
                        Submit
                      </Text>
                    </TouchableOpacity>
                  </TabsContent>

                  {/* T/F TAB */}
                  <TabsContent value="T/F">
                    <View className="mt-4">
                      <Text className=" text-gray-700 text-lg font-medium ">
                        Question
                      </Text>
                      <View className="flex-row gap-2 justify-start items-center">
                        <TextInput
                          value={question}
                          onChangeText={setQuestion}
                          className="mt-1 border border-gray-400 rounded-md p-2.5 px-3 w-full"
                          placeholder="Enter Question"
                          placeholderTextColor={"gray"}
                        />
                      </View>
                    </View>
                    <Text className="font-medium mb-1 mt-4">Options</Text>
                    <TouchableOpacity className="text-sm font-medium mt-2 border p-2.5 px-3 rounded-lg border-gray-400">
                      <Text className="text-sm font-medium">True</Text>{" "}
                    </TouchableOpacity>
                    <TouchableOpacity className="mt-2 border p-2.5 px-3 rounded-lg border-gray-400">
                      <Text className="text-sm font-medium">False</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="flex-row justify-center items-center gap-2 mt-4 bg-blue-600 p-3 rounded-full">
                      <Text className="font-medium text-sm text-white">
                        Submit
                      </Text>
                    </TouchableOpacity>
                  </TabsContent>

                  {/* Long TAB */}

                  <TabsContent value="Long">
                    <View className="mt-4">
                      <Text className=" text-gray-700 text-lg font-medium ">
                        Question
                      </Text>
                      <View className="flex-row gap-2 justify-start items-center">
                        <TextInput
                          value={question}
                          onChangeText={setQuestion}
                          className="mt-1 border border-gray-400 rounded-md p-2.5 px-3 w-full"
                          placeholder="Enter Question"
                          placeholderTextColor={"gray"}
                        />
                      </View>
                    </View>
                    <TouchableOpacity className="flex-row justify-center items-center gap-2 mt-4 bg-blue-600 p-3 rounded-full">
                      <Text className="font-medium text-sm text-white">
                        Submit
                      </Text>
                    </TouchableOpacity>
                  </TabsContent>
                </Tabs>
              </View>
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default index;
