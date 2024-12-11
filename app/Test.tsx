import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AsyncStorage from "@react-native-async-storage/async-storage";

type Subject =
  | "Data Structure"
  | "Operating System"
  | "Computer Networks"
  | "DBMS";

interface SubjectQuestionType {
  [key: string]: {
    question: string;
    options: string[];
  }[];
}

export default function Test() {
  const [selectedOption, setSelectedOption] = useState<(number | null)[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const navigation = useNavigation();
  const route = useRoute();
  const { subject } = route.params as { subject: Subject };

  const subjectQuestions: SubjectQuestionType = {
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

  const questions = subjectQuestions[subject];

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      // setSelectedOption(null);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex >= 1) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      // setSelectedOption(null);
    }
  };

  const handlePageChange = (index: number) => {
    setCurrentQuestionIndex(index);
    // setSelectedOption(null);
  };

  const currentQuestion = questions[currentQuestionIndex];

  useEffect(() => {
    loadAnswer();
  }, []);

  const loadAnswer = async () => {
    try {
      const savedAnswer = await AsyncStorage.getItem(`@answers_${subject}`);
      if (savedAnswer !== null) {
        setSelectedOption(JSON.parse(savedAnswer));
      } else {
        setSelectedOption(new Array(questions.length).fill(null));
      }
    } catch (e) {
      console.log("Encounter : ", e);
    }
  };

  const storeAnswers = async (newAnswer: (number | null)[]) => {
    try {
      await AsyncStorage.setItem(
        `@answers_${subject}`,
        JSON.stringify(newAnswer)
      );
    } catch (e) {
      console.log("Encountered : ", e);
    }
  };

  const handleSubmit = () => {
    navigation.navigate("LeaderBoard" as never);
  };
  const handleSelectOption = (optionIndex: number) => {
    const newSelectedOptions = [...selectedOption];
    newSelectedOptions[currentQuestionIndex] = optionIndex;
    setSelectedOption(newSelectedOptions);
    storeAnswers(newSelectedOptions);
  };
  // helper method to log all Storage in a single object
  function logCurrentStorage() {
    AsyncStorage.getAllKeys().then((keyArray) => {
      AsyncStorage.multiGet(keyArray).then((keyValArray) => {
        let myStorage: any = {};
        for (let keyVal of keyValArray) {
          myStorage[keyVal[0]] = keyVal[1];
        }

        console.log("CURRENT STORAGE: ", myStorage);
      });
    });
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1">
        <View className="flex flex-row justify-between gap-10 p-3 lg:pt-3 pt-8 px-6 items-center border-b-2 border-gray-300">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <FontAwesome5 name="chevron-left" size={20} color="black" />
          </TouchableOpacity>
          <View className="flex flex-row gap-2 items-center">
            <MaterialIcons name="access-alarm" size={24} color="red" />
            <Text className="text-sm font-medium text-gray-400">30 Min</Text>
          </View>
        </View>
        <ScrollView scrollEnabled={true}>
          <View>
            <View className="flex justify-center items-center p-3 border-gray-200 mb-2">
              <Text className="mt-4 text-2xl font-bold">Practice test 1</Text>
              <Text className="mt-2 text-md text-gray-600">{subject}</Text>
            </View>
            <View className="flex-row justify-center flex-wrap gap-2 mb-3 mt-3">
              <View>
                <TouchableOpacity onPress={handlePrev}>
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
                    onPress={() => handleSelectOption(index)}
                    className={`flex-row items-center p-2
                    ${
                      selectedOption[currentQuestionIndex] === index
                        ? "bg-blue-100 border border-blue-300"
                        : ""
                    }
                     rounded-xl bg-white`}
                  >
                    <View
                      className={`h-5 w-5 rounded-full border-2  ${
                        selectedOption[currentQuestionIndex] === index
                          ? "bg-blue-500"
                          : "border-black"
                      }`}
                    />
                    <Text className="pl-8 font-medium text-lg">{option}</Text>
                  </TouchableOpacity>
                ))}

                {selectedOption !== null && (
                  <View className="mt-8">
                    <Text className="text-lg font-medium">
                      Selected Option:
                    </Text>
                    <Text className="font-semibold text-md border border-gray-300 bg-white rounded-md p-5 mt-1 shadow-md">
                      <Text className="font font-extrabold text-blue-700 pl-2 ">
                        {
                          currentQuestion.options[
                            selectedOption[currentQuestionIndex] as number
                          ]
                        }
                      </Text>
                    </Text>
                  </View>
                )}
              </View>
            </View>
            <View className="mx-5">
              <TouchableOpacity>
                {currentQuestionIndex === questions.length - 1 && (
                  <View className="bg-blue-700 rounded-xl flex items-center justify-center  mb-5">
                    <Text
                      className="text-white p-5 font-semibold"
                      onPress={handleSubmit}
                    >
                      Submit
                    </Text>
                  </View>
                )}
              </TouchableOpacity>
              <TouchableOpacity>
                {currentQuestionIndex === questions.length - 1 && (
                  <View className="bg-blue-700 rounded-xl flex items-center justify-center  mb-5">
                    <Text
                      className="text-white p-5 font-semibold"
                      onPress={logCurrentStorage}
                    >
                      Check Answer
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
