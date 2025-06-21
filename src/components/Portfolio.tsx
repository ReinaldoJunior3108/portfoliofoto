export default function Portfolio(){
    return(
        <div className="h-dvh">
            <div className="flex flex-col justify-evenly h-full">
                <h1 className="font-[Montserrat] text-center font-bold text-white text-[32px]">PORTFOLIO</h1>
                <div className="font-[Montserrat] flex justify-evenly items-center text-white h-[60dvh]">
                    <div className="bg-[url(/IMG_9446.jpg)] relative bg-cover w-[25%] h-full flex items-center justify-center rounded-[30px] shadow-[3px_6px_15px_rgba(255,255,255,0.2),inset_6px_4px_6px_0px_rgba(255,_255,_255,_0.1)] ">
                        <div className="opacity-0 rounded-[30px] bg-black hover:opacity-70 h-full  w-full transition-opacity absolute"><h1 className="flex justify-center items-center h-full font-bold text-[24px]">ENSAIOS</h1></div>

                    </div>
                    <div className="bg-[url(/IMG_0382-1.jpg)] relative bg-cover w-[25%] h-full flex items-center justify-center rounded-[30px] shadow-[3px_6px_15px_rgba(255,255,255,0.2),inset_6px_4px_6px_0px_rgba(255,_255,_255,_0.1)] ">
                        <div className="opacity-0 rounded-[30px] bg-black hover:opacity-70 h-full  w-full transition-opacity absolute"><h1 className="flex justify-center items-center h-full font-bold text-[24px]">CARROS</h1></div>

                    </div>
                    <div className="bg-[url(/IMG_0018-6.jpg)] relative bg-cover w-[25%] h-full flex items-center justify-center rounded-[30px] shadow-[3px_6px_15px_rgba(255,255,255,0.2),inset_6px_4px_6px_0px_rgba(255,_255,_255,_0.1)] ">
                        <div className="opacity-0 rounded-[30px] bg-black hover:opacity-70 h-full  w-full transition-opacity absolute"><h1 className="flex justify-center items-center h-full font-bold text-[24px]">EVENTOS</h1></div>

                    </div>
                </div>
            </div>
        </div>
    )
}