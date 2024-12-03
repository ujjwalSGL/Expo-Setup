import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function () {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const questions = [
    {
      question: "Which of the following is NOT a programming language?",
      options: ["Python", "HTML", "Java", "C++"],
    },
    {
      question: "Which of the following is used for styling web pages?",
      options: ["HTML", "CSS", "Python", "JavaScript"],
    },
    {
      question: "Which programming language is used for Android development?",
      options: ["Swift", "Kotlin", "C", "PHP"],
    },
    {
      question: "Which of the following is a database?",
      options: ["MongoDB", "Node.js", "React", "Express"],
    },
    {
      question: "What does HTML stand for?",
      options: [
        "Hyper Trainer Marking Language",
        "HyperText Markup Language",
        "HyperText Marketing Language",
        "Hyper Transfer Markup Language",
      ],
    },
  ];

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
      // console.log("Next");
    }
  };
  const handlePrev = () => {
    if (currentQuestionIndex >= 1) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setSelectedOption(null);
      // console.log("Previous");
    }
  };
  const currentQuestion = questions[currentQuestionIndex];

  return (
    <SafeAreaView>
      <ScrollView className="mt-5 flex font-semibold text-sm md:mt-8 md:mx-5 lg:mt-10 lg:mx-14 p-8">
        {/* <Image
        source={require("@/assets/images/online-test.png")}
        height={2}
        width={2}
      ></Image> */}
        {/* <View className="border-gray-300 border-2 rounded-md my-8 pb-12 p-4 bg-slate-200">
          <Text className="font-semibold text-sm w-full">
            Q1: Which of the following is NOT a programming language?
          </Text>
          <View className="gap-5 mt-8">
            <View className="border h-5 w-5 rounded-full flex-row">
              <Text className="pl-8 font-semibold text-sm">Python</Text>
            </View>
            <View className="border h-5 w-5 rounded-full flex-row">
              <Text className="pl-8 font-semibold text-sm">HTML</Text>
            </View>
            <View className="border h-5 w-5 rounded-full flex-row">
              <Text className="pl-8 font-semibold text-sm">Java</Text>
            </View>
            <View className="border h-5 w-5 rounded-full flex-row">
              <Text className="pl-8 font-semibold text-sm">C++</Text>
            </View>
            <Text className="flex-row">
              <Ionicons name="flag" size={20} color="red" className="mt-2" />
              <Text className="pl-2 font-semibold text-sm hover:cursor-pointer mb-4">
                Mark as Flag
              </Text>
            </Text>
          </View>
        </View> */}
        <View className="border-gray-300 border-2 rounded-md my-8 pb-12 p-4 bg-slate-100">
          <Text className="font-semibold text-sm w-full">
            Question {currentQuestionIndex + 1}: {currentQuestion.question}
          </Text>
          <View className="gap-5 mt-8 font-bold lg:grid lg:grid-cols-2">
            {currentQuestion.options.map((option, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => setSelectedOption(index)}
                className={`flex-row items-center p-2 rounded-md`}
              >
                <View
                  className={`h-4 w-4 rounded-full border-2 ${
                    selectedOption === index ? "bg-blue-600" : "border-black"
                  }`}
                />
                <Text className="pl-8 font-semibold text-sm">{option}</Text>
              </TouchableOpacity>
            ))}
            {/* <Text className="flex-row items-center mt-4">
              <Ionicons name="flag" size={20} color="red" className="mt-2" />
              <Text className="pl-2 font-semibold text-sm hover:cursor-pointer">
                Mark as Flag
              </Text>
            </Text> */}
          </View>
        </View>
        <View className="mt-10">
          <Text className="font-semibold text-lg">
            You Choose:
            <View className="font font-extrabold pl-2 ">
              {selectedOption !== null
                ? currentQuestion.options[selectedOption]
                : "Not Selected"}
            </View>
          </Text>
        </View>
        <View className="flex-row justify-between items-center my-44 ">
          <TouchableOpacity onPress={handlePrev}>
            {currentQuestionIndex !== 0 && (
              <MaterialIcons
                name="chevron-left"
                size={24}
                color="black"
                className="rounded-full bg-gray-300 p-3"
              />
            )}
          </TouchableOpacity>
          <TouchableOpacity onPress={handleNext}>
            {currentQuestionIndex === questions.length - 1 ? (
              <View className="bg-orange-500 rounded-full ">
                <Text
                  className="text-white p-4 font-semibold"
                  onPress={() => Alert.alert("Sumbitted")}
                >
                  Submit
                </Text>
              </View>
            ) : (
              <MaterialIcons
                name="chevron-right"
                size={24}
                color="black"
                className="rounded-full bg-gray-300 p-3"
              />
            )}
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
