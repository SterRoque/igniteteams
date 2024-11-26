import { TextInput, TextInputProps } from "react-native";
import * as S from "./styles";
import { useTheme } from "styled-components/native";
import React from "react";

type Props = TextInputProps & {
  inputRef?: React.RefObject<TextInput>;
};

export function Input({ inputRef, ...rest }: Props) {
  const { COLORS } = useTheme();

  return (
    <S.Container
      placeholderTextColor={COLORS.GRAY_300}
      {...rest}
      ref={inputRef}
    />
  );
}
