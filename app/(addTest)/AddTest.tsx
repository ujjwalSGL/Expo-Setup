import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  TextInput,
} from "react-native";
import React, { useState } from "react";
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
import RNPickerSelect from "react-native-picker-select";
import { Link, useNavigation } from "expo-router";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Button } from "@/components/ui/button";
import { SafeAreaProvider } from "react-native-safe-area-context";

const AddTest = () => {
  const Navigation = useNavigation();
  const [questionType, setQuestionType] = useState("");
  const [answer, setAnswer] = useState("");
  const [Subject, setSubject] = useState("");
  const [question, setQuestion] = useState("");
  const [mcqOption, setMcqOption] = useState([""]);
  const [mcqCorrectAnswer, setMcqCorrectAnswer] = useState("");
  const [questionLable, setquestionLable] = useState("");

  const handleAddOption = () => {
    if (mcqOption.length < 10) {
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
      const response = await axios.post(
        "https://f587-203-122-19-18.ngrok-free.app/addquestions",
        newQuestion
      );
      console.log("Response from backend:", response.data);
      // const currentQuestion = await AsyncStorage.getItem("questions");
      // const questions = currentQuestion ? JSON.parse(currentQuestion) : [];
      // questions.push(newQuestion);
      // await AsyncStorage.setItem("questions", JSON.stringify(questions));
      // console.log("Question added successfully");
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
        <ScrollView scrollEnabled={true} className="mx-4 my-4">
          <Text className="font-bold text-gray-500 mt-5 text-lg">Subject</Text>
          <View className="mx-1 my-4 border-2 rounded-lg text-md -p-2">
            <RNPickerSelect
              onValueChange={(value) => setSubject(value)}
              items={[
                { label: "Hindi", value: "Hindi" },
                { label: "Science", value: "Science" },
                { label: "Social Science", value: "Social Science" },
                { label: "Electronics", value: "Electronics" },
                { label: "Math", value: "Math" },
              ]}
            />
          </View>
          <Text className="font-bold text-gray-500 text-lg">
            Type Question Here
          </Text>
          <TextInput
            multiline={true}
            numberOfLines={4}
            value={question}
            onChangeText={setQuestion}
            className="mx-1 my-4 pb-10 border-2 rounded-lg py-4 text-lg font-medium px-4"
            placeholder="Type ......."
            placeholderTextColor={"gray"}
          />
          <Text className="font-bold text-gray-500 mt-5 text-lg">
            Select Answer Type
          </Text>
          <View className="mx-1 my-4 border-2 rounded-lg text-md ">
            <RNPickerSelect
              onValueChange={(value) => setQuestionType(value)}
              items={[
                { label: "MCQ", value: "mcq" },
                { label: "Short Answer", value: "shortAnswer" },
                { label: "Long Answer", value: "longAnswer" },
              ]}
            />
          </View>
          <View>
            {questionType === "mcq" && (
              <View className="mt-4">
                <Text className="font-bold text-gray-500 text-lg">
                  Add MCQ Options
                </Text>
                {mcqOption.map((option, index) => {
                  console.log(index);
                  return (
                    <View key={index} className="gap-3 mt-2">
                      <TextInput
                        // id={`option${index}`}
                        className="flex-1 border-2 rounded-lg py-2 px-4 text-lg mx-1"
                        placeholder="Enter Options . . . ."
                        value={option}
                        onChangeText={(text) => {
                          handleOptionChange(text, index);
                        }}
                      />
                    </View>
                  );
                })}
                <View className="flex-row justify-between mx-2 my-2">
                  <TouchableOpacity>
                    <Text
                      onPress={handleAddOption}
                      className="bg-blue-600 text-white font-bold text-xl p-2 rounded-lg"
                    >
                      Add
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Text
                      onPress={handleDeleteOption}
                      className="bg-red-600 text-white font-bold text-xl p-2 rounded-lg"
                    >
                      Delete
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
            {questionType === "mcq" && (
              <View className="gap-3 mt-2">
                <Text className="font-bold text-gray-500 mt-5 text-lg">
                  Correct Answer
                </Text>
                <TextInput
                  className="flex-1 border-2 rounded-lg py-2 px-4 text-lg mx-1"
                  placeholder="Enter Correct Answer"
                  value={mcqCorrectAnswer}
                  onChangeText={setMcqCorrectAnswer}
                />
                <TouchableOpacity className="bg-blue-600 rounded-lg flex items-center justify-center p-3">
                  <Text className="text-lg font-bold text-white">Save</Text>
                </TouchableOpacity>
              </View>
            )}
            {questionType !== "mcq" && (
              <View className="mt-4">
                <Text className="font-bold text-gray-500 mt-5 text-lg">
                  Answer
                </Text>
                <TextInput
                  className="flex-1 border-2 rounded-lg py-2 px-4 text-lg mx-1"
                  placeholder="Enter Answer"
                  value={answer}
                  onChangeText={setAnswer}
                />
              </View>
            )}
          </View>
          <Text className="font-bold text-gray-500 mt-5 text-lg">
            Select Question Label
          </Text>
          <View className="mx-1 my-4 border-2 rounded-lg text-md -p-2">
            <RNPickerSelect
              onValueChange={(value) => setquestionLable(value)}
              items={[
                { label: "Easy", value: "easy" },
                { label: "Medium", value: "medium" },
                { label: "Hard", value: "hard" },
              ]}
            />
          </View>
          <TouchableOpacity
            onPress={handleAddQuestion}
            className="bg-green-600 rounded-lg flex items-center justify-center mt-10 p-3"
          >
            <Text className="text-lg font-bold text-white">Add Question</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={viewSavedQuestions}
            className="bg-blue-600 rounded-lg flex items-center justify-center mt-5 p-3"
          >
            <Text className="text-lg font-bold text-white">
              View Saved Questions
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default AddTest;
