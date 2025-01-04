import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Question = () => {
  const [subject, setSubject] = useState<string>("");
  const [questions, setQuestions] = useState<any[]>([]);

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
    loadQuestions();
  }, [subject]);
  return (
    <GestureHandlerRootView>
      <SafeAreaProvider>
        <SafeAreaView className="flex-1 mt-5">
          <ScrollView scrollEnabled={true} className="mx-2">
            <View>
              <Text>
               
              </Text>
            </View>
          </ScrollView>
        </SafeAreaView>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default Question;
