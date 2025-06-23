import {useState} from "react";
export default function Hero(){
    const [menuHamburguer, setMenuHamburguer] = useState(false)

    function abrirmenu(){
        setMenuHamburguer(!menuHamburguer)
    }
    return(
        <div className="h-dvh" id="inicio">
            <div className="w-dvw m-auto min-h-[80dvh] bg-[url(https://ik.imagekit.io/pagnofotografia/IMG_0243-7.jpg)] bg-cover bg-center relative">
                <div>
                    <h1 className="font-[family-name:signature] text-white absolute bottom-2 right-2 text-[30px]">Pagno Fotografia</h1>
                    <h1 className="font-[Montserrat] font-bold text-shadow-[2px_2px_8px_rgba(0,0,0,0.6)] text-white absolute top-1/4 left-1/2 transform -translate-x-1/2 text-[26px] md:text-[34px]">Criatividade e Emoção em cada clique.</h1>
                    <button className="font-[Montserrat] text-white absolute top-1/2 left-1/2 transform -translate-x-1/2  text-[24px] bg-[#B49A6C] p-[0.8rem_1.5rem] rounded-[25px] hover:bg-[#917c61] transition">Veja meus projetos</button>
                    <div className={`bg-[#B49A6C] md:bg-transparent w-fit md:w-full fixed md:relative`}>
                        <button className={` fixed md:hidden top-3 left-3 bg-[#B49A6C] p-1.5 fill-white rounded-[8px]`}
                        onClick={abrirmenu}
                        ><svg viewBox="0 0 100 80" width="20" height="20" className={`transition-all duration-300 ${!menuHamburguer ? "rotate-0" : "rotate-90"}`}>
                            <rect width="100" height="20"></rect>
                            <rect y="30" width="100" height="20"></rect>
                            <rect y="60" width="100" height="20"></rect>
                        </svg></button>
                        <div className={`overflow-hidden md:overflow-visible transition-all duration-300 ${!menuHamburguer ? "w-0" : "w-[50dvw]"}`}>
                            <ul className={`flex md:w-dvw mt-10 md:mt-0 p-4 md:p-0 justify-evenly h-[40dvh] md:h-fit flex-col items-center md:flex-row text-[14px] text-white`}>

                                <li><a className="nav__link" href="#inicio">INICIO</a></li>
                                <li><a className="nav__link" href="#sobre">SOBRE</a></li>
                                <li><a className="nav__link" href="#"><img src="/logo2.png" alt="" width="100px"/></a></li>
                                <li><a className="nav__link" href="#galeria">FOTOS</a></li>
                                <li><a className="nav__link" href="#contato">CONTATO</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}