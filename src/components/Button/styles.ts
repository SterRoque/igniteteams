import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export type TButtonStyleProps = "PRIMARY" | "SECONDARY";

type ButtonContainerProps = {
  type: TButtonStyleProps;
};

export const Container = styled(TouchableOpacity)<ButtonContainerProps>`
  flex: 1;
  min-height: 56px;
  max-height: 56px;
  background-color: ${({ theme, type }) =>
    type === "PRIMARY" ? theme.COLORS.GREEN_700 : theme.COLORS.RED_DARK};

  border-radius: 6px;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.WHITE};
`;
