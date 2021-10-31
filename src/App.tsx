import { useState } from 'react';
import * as C from './App.styles';
import { Item } from './types/Item';
import { InputItem } from './components/input-item';
import { AddArea } from './components/add-area';

const App = () => {
  const [list, setList] = useState<Item[]>([
    { id: 1, tarefa: 'teste', executada: false }
  ]);

  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      tarefa: taskName,
      executada: false
    });
    setList(newList);
  }

  return (
    <C.Container>
      <C.Area>
        <C.Header>LISTA DE TAREFAS</C.Header>
        <AddArea onEnter={handleAddTask}></AddArea>
        {list.map((item, index) => (
          <InputItem key={index} item={item} />
        ))}
      </C.Area>
    </C.Container>
  );
}

export default App;