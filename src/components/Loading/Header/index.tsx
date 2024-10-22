import * as S from "./styles";
import logoImg from "@assets/logo.png";

export function Header() {
  return (
    <S.Container>
      <S.Logo source={logoImg} />
    </S.Container>
  );
}
