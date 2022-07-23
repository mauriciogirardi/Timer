import { useCycle } from '../../context/CycleContext'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import PtBr from 'date-fns/locale/pt-BR'
import * as S from './styles'

interface StatusCycle {
  finishedDate?: Date
  interruptedDate?: Date
}

export const History = () => {
  const { cycles } = useCycle()

  const renderStatusOfCycle = ({
    finishedDate,
    interruptedDate,
  }: StatusCycle) => {
    if (finishedDate) {
      return <S.Status statusColor="green">Concluído</S.Status>
    }

    if (interruptedDate) {
      return <S.Status statusColor="red">Interrompido</S.Status>
    }

    return <S.Status statusColor="yellow">Em andamento</S.Status>
  }

  return (
    <S.HistoryContainer>
      <h1>Meu histórico</h1>

      <S.HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {cycles.map((cycle) => (
              <tr key={cycle.id}>
                <td>{cycle.task}</td>
                <td>{cycle.minutesAmount} mínutos</td>
                <td>
                  {formatDistanceToNow(new Date(cycle.startDate), {
                    addSuffix: true,
                    locale: PtBr,
                  })}
                </td>
                <td>
                  {renderStatusOfCycle({
                    finishedDate: cycle.finishedDate,
                    interruptedDate: cycle.interruptedDate,
                  })}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </S.HistoryList>
    </S.HistoryContainer>
  )
}
