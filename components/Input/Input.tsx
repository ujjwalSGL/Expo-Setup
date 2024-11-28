import React, { useState } from "react";
import { TextInput } from "react-native";

interface InputProps {
  value?: string;
  onChange?: () => void;
  placeholder?: string;
  defaultValue?: any;
  secureTextEntry?: boolean;
  keyboardType?: any;
  placeholderTextColor?: string;
  underlineColorAndroid?: string;
  style?: object;
  className?: string;
}

const Input = ({
  value,
  onChange,
  secureTextEntry,
  keyboardType,
  placeholder,
  defaultValue,
  placeholderTextColor,
  underlineColorAndroid,
  style,
  className,
}: InputProps) => {
  return (
    <TextInput
      className={className}
      style={style}
      underlineColorAndroid={underlineColorAndroid}
      defaultValue={defaultValue}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
      placeholderTextColor={placeholderTextColor}
    />
  );
};

export default Input;
