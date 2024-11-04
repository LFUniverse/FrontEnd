import {createContext, useState} from "react";

const TarefaContext = createContext ();

function TarefaProvider (props){
    const [tarefas, setTarefas] = useState ([]);
    return (
        <>
        setTarefas([...tarefas, tarefa]);
        </>
    )
}

function Remover () {
    setTarefas(tarefas.filter(item => item !== tarefa));
}

return <TarevaContext.Provider value={}></TarevaContext.Provider>