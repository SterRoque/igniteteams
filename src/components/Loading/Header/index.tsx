import * as S from "./styles";
import logoImg from "@assets/logo.png";

type THeader = {
  showBackButton: boolean;
};

export function Header({ showBackButton = false }: THeader) {
  return (
    <S.Container>
      {showBackButton && (
        <S.BackButton>
          <S.BackIcon />
        </S.BackButton>
      )}

      <S.Logo source={logoImg} />
    </S.Container>
  );
}
