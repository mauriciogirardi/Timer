import * as S from './styles'

interface CounterDownProps {
  minutes: string
  secondes: string
}

export const CounterDown = ({ minutes, secondes }: CounterDownProps) => {
  return (
    <S.CounterDownContainer>
      <span>{minutes[0]}</span>
      <span>{minutes[1]}</span>
      <S.Separator>:</S.Separator>
      <span>{secondes[0]}</span>
      <span>{secondes[1]}</span>
    </S.CounterDownContainer>
  )
}
