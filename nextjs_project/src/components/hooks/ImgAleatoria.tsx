import { useState } from "react"

export default function ImgAleatoria() {
    const [search, changeSearch] = useState<string>('abstract')
    const [size, changeSize] = useState<number>(300)
    const url = 'https://source.unsplash.com/featured/'

function BtnRender(value: string) {
    return (
        <button onClick={() => { changeSearch(value)} }
         className=" bg-blue-500 text-white px-4 py-2 rounded-md">
            {value}
        </button>
    )
} 
    
    return(
        <div className="flex flex-col gap-3 border border-zinc-500 p-7 rounded-md">
          <img src={`${url}${size}x${size}?${search}`} height={300} width={300} alt="imagem"/>
          <div className="flex justify-evenly gap-5">
            {BtnRender('abstract')}
            {BtnRender('city')}
            {BtnRender('person')}
          </div>  
        </div>
    )
}