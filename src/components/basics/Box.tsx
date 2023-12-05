export default function Box(props: any) {
    return (
        <div className={`
        flex justify-center items-center
        bg-purple-500 p-6 w-64 h-64 rounded-md 
        text-5xl font-thin text-white
       `}>
        {props.children}
        </div>
    )
}