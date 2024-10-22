import { Header } from "@components/Header";
import * as S from "./styles";
import { Highlight } from "@components/Highlight";

export function Players() {
  return (
    <S.Container>
      <Header showBackButton />
      <Highlight
        title="Nome da turma"
        subtitle="adicione a galera e separe os times"
      />
    </S.Container>
  );
}
