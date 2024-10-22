import { TouchableOpacityProps } from "react-native";
import * as S from "./styles";
import { MaterialIcons } from "@expo/vector-icons";

type ButtonIconProps = TouchableOpacityProps & {
  icon: keyof typeof MaterialIcons.glyphMap;
  type?: S.TButtonIconStyleProps;
};

export function ButtonIcon({ icon, type = "PRIMARY" }: ButtonIconProps) {
  return (
    <S.Container>
      <S.Icon name={icon} type={type} />
    </S.Container>
  );
}
