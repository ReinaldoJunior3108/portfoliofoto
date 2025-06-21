
export default function Hero(){
    return(
        <div className="h-dvh">
            <div className="w-dvw m-auto min-h-[80dvh] bg-[url(/IMG_0243-7.jpg)] bg-cover bg-center relative">
                <h1 className="font-[family-name:signature] text-white absolute bottom-2 right-2 text-[30px]">Pagno Fotografia</h1>
                <h1 className="font-[Montserrat] font-bold text-shadow-[2px_2px_8px_rgba(0,0,0,0.6)] text-white absolute top-1/4 left-1/2 transform -translate-x-1/2  text-[34px]">Criatividade e Emoção em cada clique.</h1>
                <button className="font-[Montserrat] text-white absolute top-1/2 left-1/2 transform -translate-x-1/2  text-[24px] bg-[#B49A6C] p-[0.8rem_1.5rem] rounded-[25px] hover:bg-[#917c61] transition">Veja meus projetos</button>
                <ul className="flex justify-evenly items-center text-[14px] text-white">
                    <li><a className="nav__link" href="">INICIO</a></li>
                    <li><a className="nav__link" href="">SOBRE</a></li>
                    <li><a className="nav__link" href=""><img src="/logo2.png" alt="" width="100px"/></a></li>
                    <li><a className="nav__link" href="">FOTOS</a></li>
                    <li><a className="nav__link" href="">CONTATO</a></li>
                </ul>
            </div>
        </div>
    )
}