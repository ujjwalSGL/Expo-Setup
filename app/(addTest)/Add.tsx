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
import AsyncStorage from "@react-native-async-storage/async-storage";
import RNPickerSelect from "react-native-picker-select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import AntDesign from "@expo/vector-icons/AntDesign";
import axios from "axios";
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
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Link, useNavigation } from "expo-router";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Button } from "@/components/ui/button";
import { SafeAreaProvider } from "react-native-safe-area-context";

const index = () => {
  const Navigation = useNavigation();
  const [questionType, setQuestionType] = useState("");
  const [answer, setAnswer] = useState("");
  const [Subject, setSubject] = useState("");
  const [question, setQuestion] = useState("");
  const [mcqOption, setMcqOption] = useState([""]);
  const [mcqCorrectAnswer, setMcqCorrectAnswer] = useState("");
  const [questionLable, setquestionLable] = useState("");
  const [value, setValue] = React.useState("account");
  const [selectedOption, setSelectedOption] = useState(null);
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

  const handleAddQuestion = async () => {
    const newQuestion = {
      question: question,
      type: questionType,
      options: questionType === "mcq" ? mcqOption : [],
      ans: questionType === "mcq" ? mcqCorrectAnswer : answer,
      label: questionLable,
      Subject,
    };

    try {
      // const response = await axios.post(
      //   "https://f342-203-122-19-18.ngrok-free.app/addquestions",
      //   newQuestion
      // );
      // console.log("Response from backend:", response.data);
      const currentQuestion = await AsyncStorage.getItem("questions");
      const questions = currentQuestion ? JSON.parse(currentQuestion) : [];
      questions.push(newQuestion);
      await AsyncStorage.setItem("questions", JSON.stringify(questions));
      console.log("Question added successfully");
      setQuestion("");
      setAnswer("");
      setMcqOption([""]);
      setMcqCorrectAnswer("");
      setQuestionType("");
      setSubject("");
      setquestionLable("");
    } catch (error) {
      console.error("Error adding question:", error);
    }
  };
  const viewSavedQuestions = async () => {
    try {
      const savedQuestions = await AsyncStorage.getItem("questions");
      const parsedQuestions = savedQuestions ? JSON.parse(savedQuestions) : [];
      console.log("Saved Questions:", parsedQuestions);
    } catch (error) {
      console.error("Error retrieving questions:", error);
    }
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
          {/* <Text className="ml-2 text-lg font-medium text-gray-700 mt-4">
            Hey,
          </Text>
          <Text className="ml-4 text-3xl font-semibold text-gray-900">
            Ujjwal
          </Text>
          <Text className="ml-2 text-lg font-medium flex justify-center items-center text-gray-700 mt-4">
            Create Test
          </Text> */}

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

          {/*Third Accordion*/}

          <View className="border border-gray-300 rounded-sm mx-3 mt-0.5">
            <TouchableOpacity
              onPress={toggleAccordion}
              className="flex-row justify-between items-center p-3 border-b border-gray-300 bg-gray-200"
            >
              <Text className="font-normal text-gray-700 text-base">Tests</Text>
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
                  className="w-full max-w-[400px] mx-auto flex-col gap-1.5"
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
                  <TabsContent value="MCQ">
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
                      <View>
                        {value === "MCQ" && (
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
                        )}
                        {value === "MCQ" && (
                          <View className="gap-3 mt-2">
                            <Text className="font-medium">Answer</Text>
                            <TextInput
                              className="mt-0.5 border border-gray-400 rounded-md p-2.5 px-3 "
                              placeholder="Enter Correct Answer . . . ."
                              value={mcqCorrectAnswer}
                              onChangeText={setMcqCorrectAnswer}
                            />
                          </View>
                        )}
                        {questionType == "trueFalse" && (
                          <View className="mt-4">
                            <Text className="font-bold text-gray-500 mt-5 text-lg">
                              Answer
                            </Text>
                            <View className="mx-1 my-4 border-2 rounded-lg text-md -p-2">
                              <RNPickerSelect
                                onValueChange={(value) =>
                                  setquestionLable(value)
                                }
                                items={[
                                  { label: "True", value: "easy" },
                                  { label: "False", value: "medium" },
                                ]}
                              />
                            </View>
                          </View>
                        )}
                      </View>
                    </View>
                  </TabsContent>
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
                    <Text className="font-medium mb-4 mt-4">Options</Text>
                    <TouchableOpacity className="text-sm font-medium">
                      True
                    </TouchableOpacity>
                    <TouchableOpacity className="text-sm font-medium mt-2">
                      False
                    </TouchableOpacity>
                  </TabsContent>
                  <TabsContent value="Long">
                    <Card>
                      <CardHeader>
                        <CardTitle>Account</CardTitle>
                        <CardDescription>
                          Make changes to your account here. Click save when
                          you're done.
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="gap-4 native:gap-2">
                        <View className="gap-1">
                          <Label nativeID="name">Name</Label>
                          <Input
                            aria-aria-labelledby="name"
                            defaultValue="Pedro Duarte"
                          />
                        </View>
                        <View className="gap-1">
                          <Label nativeID="username">Username</Label>
                          <Input id="username" defaultValue="@peduarte" />
                        </View>
                      </CardContent>
                      <CardFooter>
                        <Button>
                          <Text>Save changes</Text>
                        </Button>
                      </CardFooter>
                    </Card>
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
