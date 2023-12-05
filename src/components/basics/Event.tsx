export default function Event(){
    let contador = 0

    function incrementar() {
        console.log(contador++)
    }

    return(
        <button className={`
        flex justify-center items-center
        h-100 w-100 p-10  bg-green-600 text-4xl
        `} onClick={incrementar}> 
            Evento
        </button>
    )
}