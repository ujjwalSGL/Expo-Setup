import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Alert,
  Image,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Link, useNavigation } from "expo-router";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
// import { RouteProp, useRoute } from "@react-navigation/native";

type Subject =
  | "Data Structure"
  | "Operating System"
  | "Computer Networks"
  | "DBMS";

interface subjectQuestionType {
  "Data Structure": {
    question: string;
    options: string[];
  }[];
  "Operating System": {
    question: string;
    options: string[];
  }[];
  "Computer Networks": {
    question: string;
    options: string[];
  }[];
  DBMS: {
    question: string;
    options: string[];
  }[];
}

export default function () {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const Navigation = useNavigation();

  const subjectQuestions: subjectQuestionType = {
    "Data Structure": [
      {
        question: "Which data structure uses LIFO?",
        options: ["Queue", "Stack", "Linked List", "Tree"],
      },
      {
        question: "What is the time complexity of binary search?",
        options: ["O(n)", "O(log n)", "O(n^2)", "O(1)"],
      },
      {
        question: "Which of the following is not a linear data structure?",
        options: ["Array", "Queue", "Stack", "Tree"],
      },
      {
        question: "What is the worst-case time complexity of quicksort?",
        options: ["O(n log n)", "O(n^2)", "O(n)", "O(log n)"],
      },
      {
        question: "Which data structure is used for implementing recursion?",
        options: ["Queue", "Stack", "Array", "Linked List"],
      },
    ],
    "Operating System": [
      {
        question: "What is a deadlock in an operating system?",
        options: [
          "CPU overload",
          "Memory leak",
          "Permanent blocking of processes",
          "System crash",
        ],
      },
      {
        question: "Which scheduling algorithm is non-preemptive?",
        options: [
          "Round Robin",
          "Shortest Job First",
          "Priority Scheduling",
          "First Come First Served",
        ],
      },
      {
        question: "What is virtual memory?",
        options: [
          "Physical RAM",
          "CPU cache",
          "Hard disk space used as RAM",
          "GPU memory",
        ],
      },
      {
        question: "Which of the following is not an operating system?",
        options: ["Windows", "Linux", "macOS", "Oracle"],
      },
      {
        question: "What is the purpose of a semaphore in OS?",
        options: [
          "Memory management",
          "CPU scheduling",
          "Process synchronization",
          "File management",
        ],
      },
    ],
    "Computer Networks": [
      {
        question: "What does HTTP stand for?",
        options: [
          "Hyper Text Transfer Protocol",
          "High Tech Transfer Protocol",
          "Hyper Transfer Text Protocol",
          "Hyper Text Transmission Protocol",
        ],
      },
      {
        question: "Which layer of the OSI model is responsible for routing?",
        options: [
          "Data Link Layer",
          "Network Layer",
          "Transport Layer",
          "Application Layer",
        ],
      },
      {
        question:
          "What is the maximum number of IP addresses possible in IPv4?",
        options: ["2^32", "2^64", "2^128", "2^16"],
      },
      {
        question: "Which protocol is used for sending email?",
        options: ["SMTP", "FTP", "HTTP", "TCP"],
      },
      {
        question: "What is the purpose of DNS?",
        options: [
          "Data encryption",
          "IP address allocation",
          "Domain name resolution",
          "Network security",
        ],
      },
    ],
    DBMS: [
      {
        question: "What does ACID stand for in database systems?",
        options: [
          "Atomicity, Consistency, Isolation, Durability",
          "Aggregation, Concurrency, Integrity, Dependency",
          "Association, Constraint, Indexing, Denormalization",
          "Authentication, Caching, Indexing, Distribution",
        ],
      },
      {
        question:
          "Which normal form deals with removing transitive dependencies?",
        options: ["1NF", "2NF", "3NF", "BCNF"],
      },
      {
        question: "What is a primary key?",
        options: [
          "Foreign key in another table",
          "Unique identifier for a record",
          "First column in a table",
          "Composite of all columns",
        ],
      },
      {
        question: "Which SQL command is used to retrieve data from a database?",
        options: ["INSERT", "UPDATE", "SELECT", "DELETE"],
      },
      {
        question: "What is the purpose of an index in a database?",
        options: [
          "To store data",
          "To improve query performance",
          "To enforce constraints",
          "To create relationships",
        ],
      },
    ],
  };
  // const subject: Subject = "DBMS";
  const questions = subjectQuestions["DBMS"];

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

  const handleSubmit = () => {
    // Alert.alert("Test Submitted");
    <Link href="/(LoginSignUp)/LeaderBoard"></Link>;
  };
  const handlePageChange = (index: number) => {
    setCurrentQuestionIndex(index);
    setSelectedOption(null);
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1">
        <View className="flex flex-row justify-between gap-10 p-3 lg:pt-3 pt-8 px-6 items-center border-b-2 border-gray-300">
          <TouchableOpacity>
            <FontAwesome5 name="chevron-left" size={20} color="black" />
          </TouchableOpacity>
          <View className="flex flex-row gap-2 items-center">
            <MaterialIcons name="access-alarm" size={24} color="red" />
            <Text className="text-sm font-medium text-gray-400">30 Min</Text>
          </View>
        </View>
        <ScrollView scrollEnabled={true}>
          {/* //NavBar */}
          <View>
            {/* //QuestionCard */}
            <View className="flex justify-center items-center p-3 border-gray-200 mb-2">
              <Text className="mt-4 text-2xl font-bold">Practice test 1</Text>
              <Text className="mt-2 text-md text-gray-600">Data Structure</Text>
            </View>
            {/* Page Navigate  */}
            <View className="flex-row justify-center flex-wrap gap-2 mb-3 mt-3">
              <View>
                <TouchableOpacity onPress={handlePrev}>
                  {/* {currentQuestionIndex !== 0 && ( */}
                  <MaterialIcons
                    name="chevron-left"
                    size={20}
                    color="black"
                    className={`rounded-full border ${
                      currentQuestionIndex === 0 ? "opacity-10" : ""
                    } border-gray-500 backdrop:blur-sm p-3 mr-2 -mt-1`}
                  />
                </TouchableOpacity>
              </View>

              {questions.map((_, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => handlePageChange(index)}
                  className={`w-10 h-10 flex items-center justify-center rounded-full ${
                    currentQuestionIndex === index
                      ? "bg-blue-700"
                      : "bg-gray-200"
                  }`}
                >
                  <Text
                    className={`text-lg font-bold ${
                      currentQuestionIndex === index
                        ? "text-white"
                        : "text-black"
                    }`}
                  >
                    {index + 1}
                  </Text>
                </TouchableOpacity>
              ))}

              <View>
                <TouchableOpacity onPress={handleNext}>
                  {/* {currentQuestionIndex !== 0 && ( */}
                  <MaterialIcons
                    name="chevron-right"
                    size={20}
                    color="black"
                    className={`rounded-full border ${
                      currentQuestionIndex === questions.length - 1
                        ? "opacity-10"
                        : ""
                    } border-gray-500 backdrop:blur-sm p-3 ml-2 -mt-1.5`}
                  />
                </TouchableOpacity>
              </View>
            </View>
            {/* <View className="flex flex-col items-center justify-center"></View> */}
            <View className="border-gray-300 bg-gray-100 shadow-md border-2 text-lg rounded-2xl mx-4 my-5 pb-12 p-6">
              <Text className="text-sm font-semibold text-gray-400">
                QUESTION {currentQuestionIndex + 1} OF {questions.length}
              </Text>
              <Text className="font-medium text-xl w-full mt-2">
                {currentQuestion.question}
              </Text>
              <View className="gap-4 mt-8  font-bold lg:grid lg:grid-cols-2">
                {currentQuestion.options.map((option, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() => setSelectedOption(index)}
                    className={`flex-row items-center p-2
                  ${
                    selectedOption === index
                      ? "bg-blue-100 border border-blue-300"
                      : ""
                  }
                   rounded-xl bg-white`}
                  >
                    <View
                      className={`h-5 w-5 rounded-full border-2  ${
                        selectedOption === index
                          ? "bg-blue-500"
                          : "border-black"
                      }`}
                    />
                    <Text className="pl-8 font-medium text-lg">{option}</Text>
                  </TouchableOpacity>
                ))}
                {/* <Text className="flex-row items-center mt-4">
              <Ionicons name="flag" size={20} color="red" className="mt-2" />
              <Text className="pl-2 font-semibold text-sm hover:cursor-pointer">
                Mark as Flag
              </Text>
              </Text> */}

                {selectedOption !== null && (
                  <View className="mt-8">
                    <Text className="text-lg font-medium">
                      Selected Option :-{" "}
                    </Text>
                    <Text className="font-semibold text-md border border-gray-300 bg-white rounded-md p-5 mt-1 shadow-md">
                      <Text className="font font-extrabold text-blue-700 pl-2 ">
                        {selectedOption !== null
                          ? currentQuestion.options[selectedOption]
                          : ""}
                      </Text>
                    </Text>
                  </View>
                )}
              </View>
            </View>
            {/* //Question Navigate */}
            <View className="mx-5">
              <TouchableOpacity>
                {currentQuestionIndex === questions.length - 1 && (
                  <View className="bg-blue-700 rounded-xl flex items-center justify-center  mb-5">
                    <Text
                      className="text-white p-5 font-semibold"
                      // onPress={handleSubmit}
                    >
                      <Link href={"/"}></Link>
                      Submit
                    </Text>
                  </View>
                )}
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
