import { ITarefa } from "../../types/tarefa";
import Item from "./Item";

function Lista({ tarefas }: { tarefas: ITarefa[] }) {

    return (
        <aside>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map((item, index) => (
                    <Item
                        key={index}
                        {...item}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default Lista;