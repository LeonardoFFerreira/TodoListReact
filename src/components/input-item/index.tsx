import { useState } from 'react';
import * as C from './styles';
import { Item } from '../../types/Item'

type Props = {
    item: Item
}

export const InputItem = ({ item }: Props) => {
    const [isChecked, setIsChecked] = useState(item.executada);

    return (
        <C.Container executada={isChecked}>
            <input type="checkbox" checked={isChecked} onChange={e => setIsChecked(e.target.checked)} />
            <label>{item.tarefa}</label>
        </C.Container>

    );
}