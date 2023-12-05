interface CircleProps {
    texto: string
    quasePerfeito?: boolean
}

export default function Circle(props:CircleProps) {
    console.log(props)
    return(
        <div className={`
        flex justify-center items-center
        h-64 w-64 bg-cyan-500 text-3xl 
       ${props.quasePerfeito ? 'rounded-md' : 'rounded-full'}
        
        `}>
        {props.texto}
        </div>
    )

}