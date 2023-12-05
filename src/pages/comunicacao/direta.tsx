import Avo from "@/components/comunicacoes/direta/avo";

export default function Direta() {
    return(
        <div className="flex flex-col justify-center items-center h-screen bg-black">
            <h1 className="text-5xl text-white mb-10 font-black"> Comunicação direta </h1>
            <Avo nome="Antônio" sobrenome="Oliveira"/>
        </div>
    )
}