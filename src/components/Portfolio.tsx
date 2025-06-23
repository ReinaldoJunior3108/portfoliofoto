export default function Portfolio() {
    return (
        <div className="h-auto md:h-dvh" id="portfolio">
            <div className="flex flex-col justify-evenly h-auto md:h-full">
                <h1 className="font-[Montserrat] text-center font-bold text-white text-[32px] py-8 md:py-0">PORTFOLIO</h1>

                {/* Adicionado 'gap-8' para espaçamento no mobile */}
                <div className="font-[Montserrat] flex justify-center md:justify-evenly items-center flex-col w-[90dvw] md:w-full md:flex-row text-white h-auto md:h-[60dvh] gap-8 md:gap-0 m-auto">

                    {/* --- CARD 1 CORRIGIDO --- */}
                    {/* Adicionado: h-auto md:h-full aspect-video md:aspect-auto */}
                    <div className="bg-[url(https://ik.imagekit.io/pagnofotografia/IMG_9446.jpg)] relative bg-cover bg-center w-full md:w-[25%] h-[60dvh] md:h-full aspect-video md:aspect-auto flex items-center justify-center rounded-[30px] shadow-[3px_6px_15px_rgba(255,255,255,0.2),inset_6px_4px_6px_0px_rgba(255,_255,_255,_0.1)]">
                        <div className="opacity-60 md:opacity-0 rounded-[30px] bg-black md:hover:opacity-70 h-full w-full transition-opacity absolute">
                            <a href="https://instagram.com/pagnofotografia"><h1 className="flex justify-center items-center h-full font-bold text-[24px]">ENSAIOS</h1></a>
                        </div>
                    </div>

                    {/* --- CARD 2 CORRIGIDO --- */}
                    {/* Adicionado: h-auto md:h-full aspect-video md:aspect-auto */}
                    <div className="bg-[url(https://ik.imagekit.io/pagnofotografia/IMG_0382-1.jpg)] relative bg-cover bg-center w-full md:w-[25%] h-[60dvh] md:h-full aspect-video md:aspect-auto flex items-center justify-center rounded-[30px] shadow-[3px_6px_15px_rgba(255,255,255,0.2),inset_6px_4px_6px_0px_rgba(255,_255,_255,_0.1)]">
                        <div className=" opacity-60 md:opacity-0 rounded-[30px] bg-black md:hover:opacity-70 h-full w-full transition-opacity absolute">
                            <a href="https://instagram.com/pagnofotografia"><h1 className="flex justify-center items-center h-full font-bold text-[24px]">CARROS</h1></a>
                        </div>
                    </div>

                    {/* --- CARD 3 CORRIGIDO --- */}
                    {/* Adicionado: h-auto md:h-full aspect-video md:aspect-auto */}
                    <div className="bg-[url(https://ik.imagekit.io/pagnofotografia/IMG_0018-6.jpg)] relative bg-cover bg-center w-full md:w-[25%] h-[60dvh] md:h-full aspect-video md:aspect-auto flex items-center justify-center rounded-[30px] shadow-[3px_6px_15px_rgba(255,255,255,0.2),inset_6px_4px_6px_0px_rgba(255,_255,_255,_0.1)]">
                        <div className="opacity-60 md:opacity-0 rounded-[30px] bg-black md:hover:opacity-70 h-full w-full transition-opacity absolute">
                            <a href="https://instagram.com/pagnofotografia"><h1 className="flex justify-center items-center h-full font-bold text-[24px]">EVENTOS</h1></a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}