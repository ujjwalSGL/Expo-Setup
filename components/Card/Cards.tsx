import { View, Text, Linking } from "react-native";
import React from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";

export default function Cards() {
  return (
    <>
      <View className="flex justify-center items-center">
        <View className="text-black bg-red-900 mx-2 border rounded-lg shadow-slate-100 p-6">
          <View>
            <Text className="text-2xl font-bold text-white">Login</Text>
            <Text className="text-xl mt-2 text-white">
              Lets Start Shipping ...
            </Text>
          </View>
          <View className="flex justify-center items-center text-sm px-3">
            <Input
              className="bg-gray-600 border-black border rounded-lg px-3 mt-8 w-full placeholder:text-white"
              keyboardType="url"
              placeholder="Enter Email . . . . "
            />
            <Input
              className="bg-gray-600 border-black border rounded-lg px-3 mt-6 w-full placeholder:text-white"
              placeholder="Enter Password  . . . . "
              secureTextEntry={true}
            />
            <Text
              className="mt-2 text-blue-700 underline text-sm font-medium pl-0.5"
              onPress={() => Linking.openURL("http://google.com")}
            >
              Forgot Password
            </Text>

            <Button
              title="Submit"
              className="w-full items-center justify-center bg-blue-700 rounded-xl mt-4 p-3"
            />
            <Text className="text-white mt-2">
              <Text>or</Text>
            </Text>
            <Text
              className="mt-1 text-white font-medium pl-0.5 text-md touch-pinch-zoom"
              onPress={() => Linking.openURL("http://google.com")}
            >
              SignUP
            </Text>
          </View>
        </View>

        <View className="mt-5">
          <View className="text-black bg-slate-100 mx-2 border rounded-lg shadow-slate-100 p-6">
            <View>
              <Text className="text-2xl font-bold">Login</Text>
              <Text className="text-xl mt-2 font-medium">
                Lets Start Shipping ...
              </Text>
            </View>
            <View className="flex justify-center items-center text-sm px-3">
              <Input
                className="bg-blue-50 border-black border rounded-lg px-3 mt-8 w-full placeholder:text-black"
                keyboardType="url"
                placeholder="Enter Email . . . . "
              />
              <Input
                className="bg-blue-50 border-black border rounded-lg px-3 mt-6 w-full placeholder:text-black"
                placeholder="Enter Password  . . . . "
                secureTextEntry={true}
              />
              <Text
                className="mt-2 text-blue-700 underline text-sm font-medium pl-0.5"
                onPress={() => Linking.openURL("http://google.com")}
              >
                Forgot Password
              </Text>

              <Button
                title="Submit"
                className="w-full items-center justify-center bg-blue-700 rounded-xl mt-4 p-3"
              />
              <Text className="mt-2">
                <Text>or</Text>
              </Text>
              <Text
                className="mt-1 font-medium pl-0.5 text-md touch-pinch-zoom"
                onPress={() => Linking.openURL("http://google.com")}
              >
                SignUP
              </Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}
