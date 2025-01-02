import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TextInput,
  Pressable,
  Alert,
  Touchable,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Button from "@/components/Button/Button";
import axios from "axios";
import { Link } from "expo-router";
import Feather from "@expo/vector-icons/Feather";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import {
  GestureHandlerRootView,
  Swipeable,
} from "react-native-gesture-handler";
const Question = () => {
  const [questions, setQuestions] = useState<any[]>([]);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [editQuestion, setEditQuestion] = useState<string>("");
  const [editAnswer, setEditAnswer] = useState<string>("");
  const [editOptions, setEditOptions] = useState<string[]>([]);
  const [subject, setSubject] = useState<string>("");

  useEffect(() => {
    const loadQuestions = async () => {
      try {
        const data = await AsyncStorage.getItem("questions");
        if (data) {
          setQuestions(JSON.parse(data));
        }
      } catch (err) {
        console.error("Error loading questions:", err);
      }
    };

    // const loadQuestions = async () => {
    //   const subject = "science";
    //   try {
    //     const response = await axios.post(
    //       "https://3dc5-203-122-19-18.ngrok-free.app/questions",
    //       {
    //         Subject: subject,
    //       },
    //       {
    //         headers: {
    //           Accept: "application/json",
    //           "Content-Type": "application/json",
    //         },
    //       }
    //     );
    //     console.log(response.data);

    //     if (response.data) {
    //       setQuestions(response.data);
    //       console.log("HURRAY");
    //     }
    //   } catch (err) {
    //     console.error("Error loading questions:", err);
    //   }
    // };
    loadQuestions();
  }, [subject]);

  const deleteQuestion = async (id: string) => {
    Alert.alert("Delete Test", "Are you sure you want to delete this test?", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: "Delete",
        onPress: async () => {
          // const updatedTests = tests.filter((_, i) => i !== index);
          const updatedQuestions = questions.filter((test) => test.id !== id);
          setQuestions(updatedQuestions);
          try {
            await AsyncStorage.setItem(
              "questions",
              JSON.stringify(updatedQuestions)
            );
          } catch (err) {
            console.error("Error deleting Question:", err);
          }
        },
      },
    ]);

    // const updatedQuestions = questions.filter((_, i) => i !== index);
    // setQuestions(updatedQuestions);
    // try {
    //   await AsyncStorage.setItem("questions", JSON.stringify(updatedQuestions));
    // } catch (err) {
    //   console.error("Error deleting question:", err);
    // }
  };
  // const deleteQuestion = async (index: number) => {
  //   const questionToDelete = questions[index];
  //   try {
  //     await axios.post(
  //       "https://3dc5-203-122-19-18.ngrok-free.app/deletequestions",
  //       {
  //         data: { id: questionToDelete.id, subject: questionToDelete.subject },
  //         headers: {
  //           Accept: "application/json",
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );
  //     const updatedQuestions = questions.filter((_, i) => i !== index);
  //     setQuestions(updatedQuestions);
  //     await AsyncStorage.setItem("questions", JSON.stringify(updatedQuestions));
  //   } catch (err) {
  //     console.error("Error deleting question:", err);
  //   }
  // };

  const startEditing = (index: number) => {
    setEditIndex(index);
    setEditQuestion(questions[index].question);
    setEditAnswer(questions[index].ans);
    setEditOptions(questions[index].options);
  };

  const saveEdit = async () => {
    if (editIndex !== null) {
      const updatedQuestions = [...questions];
      updatedQuestions[editIndex].question = editQuestion;
      updatedQuestions[editIndex].ans = editAnswer;
      updatedQuestions[editIndex].options = editOptions;
      setQuestions(updatedQuestions);
      setEditIndex(null);
      setEditQuestion("");
      setEditAnswer("");
      setEditOptions([]);
      try {
        await AsyncStorage.setItem(
          "questions",
          JSON.stringify(updatedQuestions)
        );
      } catch (err) {
        console.error("Error saving edited question:", err);
      }
    }
  };

  const handleOptionChange = (text: string, optionIndex: number) => {
    const updatedOptions = [...editOptions];
    updatedOptions[optionIndex] = text;
    setEditOptions(updatedOptions);
  };
  const renderLefttAction = (id: string) => {
    return (
      <TouchableOpacity
        className="bg-red-500 justify-center items-center w-20 mb-4 rounded-l-md"
        onPress={() => deleteQuestion(id)}
      >
        <Text className="text-white font-bold">Delete</Text>
      </TouchableOpacity>
    );
  };

  return (
    <GestureHandlerRootView>
      <SafeAreaProvider>
        <SafeAreaView className="flex-1">
          <ScrollView scrollEnabled={true} className="mx-2">
            <View className="flex-1 bg-gray-100 p-1 mt-2">
              <View className="flex-row items-center justify-between gap-3 mx-2">
                <TextInput
                  value={subject}
                  onChangeText={setSubject}
                  placeholder="Search here ..."
                  className="bg-gray-100 p-3 w-full rounded-lg border border-gray-300 mb-4 mt-5"
                />
                <View className="bg-blue-900 text-white p-2 rounded-lg px-4 py-3">
                  <Link href="/AddTests">
                    <Text className="text-white">+ Add</Text>
                  </Link>
                </View>
              </View>
              {questions.length > 0 ? (
                questions.map((question: any, index) => (
                  <Swipeable
                    key={question.id}
                    renderLeftActions={() => renderLefttAction(question.id)}
                    // renderLeftActions={() => renderLeftAction(test.id)}
                  >
                    <View
                      key={index}
                      className="bg-white rounded-lg shadow-lg p-4 mb-4 border border-gray-200"
                    >
                      <View className="flex-row items-center justify-between">
                        {editIndex === index ? (
                          <TextInput
                            value={editQuestion}
                            onChangeText={setEditQuestion}
                            className="bg-gray-100 p-2 rounded-lg border border-gray-300 flex-1 mr-2"
                          />
                        ) : (
                          <Text className="text-lg font-semibold text-gray-800 mb-2">
                            Q: {question.question}
                          </Text>
                        )}
                        <Text
                          className={`flex-row text-center justify-center ${
                            question.label === "easy"
                              ? "bg-green-100 text-green-800 text-xs font-medium rounded-md px-1 py-0.5 dark:bg-green-600 dark:text-green-300"
                              : question.label === "medium"
                              ? "bg-yellow-100 text-yellow-800 text-xs font-medium rounded-xl px-1 py-0.5 dark:bg-yellow-600 dark:text-yellow-300 pt-0.5"
                              : question.label === "hard"
                              ? "bg-red-100 text-red-800 text-xs font-medium rounded-md px-1 py-0.5 dark:bg-red-600 dark:text-red-300 pt-0.5"
                              : ""
                          }`}
                        >
                          {question.label}
                        </Text>
                      </View>
                      <Text className="text-md text-gray-600">
                        <Text className="font-bold">Answer:</Text>{" "}
                        {editIndex === index ? (
                          <TextInput
                            value={editAnswer}
                            onChangeText={setEditAnswer}
                            className="bg-gray-100 p-2 mt-3 rounded-lg border border-gray-300 flex-1"
                          />
                        ) : (
                          question.ans
                        )}
                      </Text>
                      {question.type === "mcq" && (
                        <View className="mt-2">
                          <Text className="text-md font-bold text-gray-700 mb-1">
                            Options:
                          </Text>
                          {question.options.map(
                            (option: string, id: number) => (
                              <View key={id}>
                                {editIndex === index ? (
                                  <TextInput
                                    value={editOptions[id]}
                                    onChangeText={(text) =>
                                      handleOptionChange(text, id)
                                    }
                                    className="bg-gray-100 p-2 rounded-lg border border-gray-300 flex-1 mb-2"
                                  />
                                ) : (
                                  <Text className="text-gray-500">{`${
                                    id + 1
                                  })  ${option}`}</Text>
                                )}
                              </View>
                            )
                          )}
                        </View>
                      )}
                      <View className="flex-row items-center justify-start mt-5 gap-2">
                        {editIndex === index ? (
                          <Pressable onPress={saveEdit}>
                            <MaterialIcons
                              name="done"
                              size={24}
                              color="black"
                            />
                          </Pressable>
                        ) : (
                          <Pressable onPress={() => startEditing(index)}>
                            <FontAwesome6 name="edit" size={24} color="black" />
                          </Pressable>
                        )}
                      </View>
                    </View>
                  </Swipeable>
                ))
              ) : (
                <Text className="text-center h-screen flex justify-center items-center text-gray-500">
                  No questions saved
                </Text>
              )}
            </View>
          </ScrollView>
        </SafeAreaView>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default Question;
