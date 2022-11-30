import { HistoryContainer, HistoryList, Status } from './styles'

export function History() {
  return (
    <HistoryContainer>
      <h1>Meu histórico</h1>
      <div>
        <HistoryList>
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
              <tr>
                <td>Tarefa</td>
                <td>20 minutos</td>
                <td>há 2 meses</td>
                <td>
                  <Status statusColor="green">concluido</Status>
                </td>
              </tr>
              <tr>
                <td>Tarefa</td>
                <td>20 minutos</td>
                <td>há 2 meses</td>
                <td>
                  <Status statusColor="green">concluido</Status>
                </td>
              </tr>
              <tr>
                <td>Tarefa</td>
                <td>20 minutos</td>
                <td>há 2 meses</td>
                <td>
                  <Status statusColor="green">concluido</Status>
                </td>
              </tr>
              <tr>
                <td>Tarefa</td>
                <td>20 minutos</td>
                <td>há 2 meses</td>
                <td>
                  <Status statusColor="green">concluido</Status>
                </td>
              </tr>
              <tr>
                <td>Tarefa</td>
                <td>20 minutos</td>
                <td>há 2 meses</td>
                <td>
                  <Status statusColor="green">concluido</Status>
                </td>
              </tr>
            </tbody>
          </table>
        </HistoryList>
      </div>
    </HistoryContainer>
  )
}
