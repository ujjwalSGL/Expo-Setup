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
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Link, useNavigation } from "expo-router";
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
  const subject: Subject = "Data Structure";
  const questions = subjectQuestions[subject];

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
    Alert.alert("Test Submitted");
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 bg-white">
        <ScrollView scrollEnabled={true}>
          <View className="flex font-semibold md:mt-8 md:mx-5 lg:mt-10 lg:mx-14 p-3 bg-white ">
            <View className="flex justify-center items-center border-b-2 p-3 border-gray-200 mb-10">
              <Image
                source={require("@/assets/images/Exam.png")}
                className="w-full"
              />
              {/* <Text className="mt-4 text-lg font-bold">{testName}</Text> */}
              {/* <Text className="mt-2 text-md text-gray-600">{subject}</Text> */}
            </View>
            <View className="border-gray-300 shadow-md border-2 text-lg  rounded-md my-8 pb-12 p-4 bg-slate-100 ">
              <Text className="font-semibold text-xl w-full">
                Question {currentQuestionIndex + 1}: {currentQuestion.question}
              </Text>
              <View className="gap-5 mt-8 font-bold lg:grid lg:grid-cols-2">
                {currentQuestion.options.map((option, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() => setSelectedOption(index)}
                    className={`flex-row items-center p-2
                  ${
                    selectedOption === index
                      ? "bg-orange-100 border border-orange-300"
                      : ""
                  }
                   rounded-md`}
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
              </View>
            </View>
            <View className="mt-8">
              <Text className="text-lg font-medium">Selected Option :- </Text>
              <Text className="font-semibold text-md border border-gray-300 bg-slate-100 rounded-md p-5 mt-1 shadow-md">
                <Text className="font font-extrabold text-orange-400 pl-2 ">
                  {selectedOption !== null
                    ? currentQuestion.options[selectedOption]
                    : "Not Selected"}
                </Text>
              </Text>
            </View>
            <View className="flex-row justify-between items-center my-10">
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
                  <View className="bg-green-500 rounded-full ">
                    <Text
                      className="text-white p-4 font-semibold"
                      onPress={handleSubmit}
                    >
                      <Link href="/explore" className="text-white">
                        Submit
                      </Link>
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
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
