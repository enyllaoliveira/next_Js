import Filho from "./filho"

interface PaiProps {
    nome: string
    sobrenome: string
}

export default function Pai(props: PaiProps) {
    return(
        <div className="flex flex-col gap-5 p-5 bg-blue-500
         text-white border border-white rounded-mg">
                <div className="flex justify-center gap-2 text-2xl">
                <span className="font-black"> Pai </span>
                <span> {props.nome}</span>
                <span> {props.sobrenome}</span>
            </div>
            <div className="flex gap-5">
               <Filho nome="Gael" sobrenome={props.sobrenome}/>
               <Filho nome="Felipe" sobrenome={props.sobrenome}/>
            </div>
        </div>
         
        
    )
}