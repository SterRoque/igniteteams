import { Header } from "@components/Header";
import * as S from "./styles";
import { Highlight } from "@components/Highlight";

export function Groups() {
  return (
    <S.Container>
      <Header />
      <Highlight title="Turmas" subtitle="jogue com sua turma" />
    </S.Container>
  );
}
