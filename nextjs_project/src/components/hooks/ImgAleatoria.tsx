export default function ImgAleatoria() {
    let search: string = ''
    const url = 'https://source.unsplash.com/featured/300x300?'

function UrlImg() {
    return `${url}${search}`
}

function BtnRender(value: string) {
    return (
        <button onClick={() => search = value}
         className=" bg-blue-500 text-white px-4 py-2 rounded-md">
            {value}
        </button>
    )
} 
    
    return(
        <div className="flex flex-col gap-3 border border-zinc-500 p-7 rounded-md">
          <img src={UrlImg()} height={300} width={300} alt="imagem"/>
          <div className="flex justify-evenly gap-5">
            {BtnRender('abstract')}
            {BtnRender('city')}
            {BtnRender('person')}
          </div>  
        </div>
    )
}