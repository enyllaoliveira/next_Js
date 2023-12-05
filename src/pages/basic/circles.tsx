import Circle from "@/components/basics/Circle";

export default function CirclesPage() {
 
return(
    <div className="flex h-screen items-center justify-between">
        <Circle texto="Cicle 1"/>
        <Circle texto="Cicle 1"/>
        <Circle texto="Cicle 1" quasePerfeito/>
    </div>
)
}