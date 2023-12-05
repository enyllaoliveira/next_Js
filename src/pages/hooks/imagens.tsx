import ImgAleatoria from "@/components/hooks/ImgAleatoria"

export default function PicturePage() {
    return (
        <div className={`
        flex justify-center items-center h-screen gap-5
        `}>
            <ImgAleatoria/>
            <ImgAleatoria/>
            <ImgAleatoria/>
        </div>
    )
}