import {useState} from "react";
export default function Galeria() {
    const [galeria, setGaleria] = useState(false)

    function abrirGaleria(){
        setGaleria(!galeria);
    }
    return (
        <div className="w-[80dvw] mt-20 m-auto flex flex-col items-center justify-center gap-10 text-white">
            <h1 className="font-[Montserrat] font-bold text-[32px]">GALERIA</h1>
            <button
                className="relative bg-[#B49A6C] hover:bg-[#917c61] min-h-[3.5rem] w-[15rem] text-white font-[Poppins] font-bold text-[18px] p-[0.8rem_3rem] rounded-full overflow-hidden"
                onClick={abrirGaleria}
            >
                <p
                    className={`absolute text-nowrap top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 transition-transform duration-300 ${
                        !galeria ? "scale-100" : "scale-0"
                    }`}
                >
                    Expandir Galeria
                </p>
                <p
                    className={`absolute text-nowrap top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 transition-transform duration-300 ${
                        galeria ? "scale-100" : "scale-0"
                    }`}
                >
                    Fechar Galeria
                </p>
            </button>
            <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 overflow-hidden transition-all ease-in-out duration-700 ${
                galeria ? "max-h-full" : "max-h-0"}`}>
                <div><img className="h-auto max-w-full rounded-lg object-cover object-center" src="/IMG_0008-1.jpg" alt="gallery-photo" /></div>
                <div><img className="h-auto max-w-full rounded-lg object-cover object-center" src="/IMG_0009-2.jpg" alt="gallery-photo" /></div>
                <div><img className="h-auto max-w-full rounded-lg object-cover object-center" src="/IMG_0013-3.jpg" alt="gallery-photo" /></div>
                <div><img className="h-auto max-w-full rounded-lg object-cover object-center" src="/IMG_0015-4.jpg" alt="gallery-photo" /></div>
                <div><img className="h-auto max-w-full rounded-lg object-cover object-center" src="/IMG_0017-5.jpg" alt="gallery-photo" /></div>
                <div><img className="h-auto max-w-full rounded-lg object-cover object-center" src="/IMG_0018-6.jpg" alt="gallery-photo" /></div>
                <div><img className="h-auto max-w-full rounded-lg object-cover object-center" src="/IMG_0024-7.jpg" alt="gallery-photo" /></div>
                <div><img className="h-auto max-w-full rounded-lg object-cover object-center" src="/IMG_0027-8.jpg" alt="gallery-photo" /></div>
                <div><img className="h-auto max-w-full rounded-lg object-cover object-center" src="/IMG_0071-9.jpg" alt="gallery-photo" /></div>
                <div><img className="h-auto max-w-full rounded-lg object-cover object-center" src="/IMG_0243-7.jpg" alt="gallery-photo" /></div>
                <div><img className="h-auto max-w-full rounded-lg object-cover object-center" src="/IMG_0382-1.jpg" alt="gallery-photo" /></div>
                <div><img className="h-auto max-w-full rounded-lg object-cover object-center" src="/IMG_0492-53.jpg" alt="gallery-photo" /></div>
                <div><img className="h-auto max-w-full rounded-lg object-cover object-center" src="/IMG_0495-52.jpg" alt="gallery-photo" /></div>
                <div><img className="h-auto max-w-full rounded-lg object-cover object-center" src="/IMG_0495-52.jpg" alt="gallery-photo" /></div>
                <div><img className="h-auto max-w-full rounded-lg object-cover object-center" src="/IMG_0496-51.jpg" alt="gallery-photo" /></div>
                <div><img className="h-auto max-w-full rounded-lg object-cover object-center" src="/IMG_0497-50.jpg" alt="gallery-photo" /></div>
                <div><img className="h-auto max-w-full rounded-lg object-cover object-center" src="/IMG_0498-49.jpg" alt="gallery-photo" /></div>
                <div><img className="h-auto max-w-full rounded-lg object-cover object-center" src="/IMG_0499-48.jpg" alt="gallery-photo" /></div>
                <div><img className="h-auto max-w-full rounded-lg object-cover object-center" src="/IMG_0500-47.jpg" alt="gallery-photo" /></div>
                <div><img className="h-auto max-w-full rounded-lg object-cover object-center" src="/IMG_0501-46.jpg" alt="gallery-photo" /></div>
                <div><img className="h-auto max-w-full rounded-lg object-cover object-center" src="/IMG_0504-45.jpg" alt="gallery-photo" /></div>
                <div><img className="h-auto max-w-full rounded-lg object-cover object-center" src="/IMG_0505-44.jpg" alt="gallery-photo" /></div>
                <div><img className="h-auto max-w-full rounded-lg object-cover object-center" src="/IMG_0508-43.jpg" alt="gallery-photo" /></div>
                <div><img className="h-auto max-w-full rounded-lg object-cover object-center" src="/IMG_0552-40.jpg" alt="gallery-photo" /></div>
                <div><img className="h-auto max-w-full rounded-lg object-cover object-center" src="/IMG_0558-39.jpg" alt="gallery-photo" /></div>
                <div><img className="h-auto max-w-full rounded-lg object-cover object-center" src="/IMG_0561-38.jpg" alt="gallery-photo" /></div>
                <div><img className="h-auto max-w-full rounded-lg object-cover object-center" src="/IMG_0562-37.jpg" alt="gallery-photo" /></div>
                <div><img className="h-auto max-w-full rounded-lg object-cover object-center" src="/IMG_0564-36.jpg" alt="gallery-photo" /></div>
                <div><img className="h-auto max-w-full rounded-lg object-cover object-center" src="/IMG_0565-35.jpg" alt="gallery-photo" /></div>
                <div><img className="h-auto max-w-full rounded-lg object-cover object-center" src="/IMG_0566-34.jpg" alt="gallery-photo" /></div>
                <div><img className="h-auto max-w-full rounded-lg object-cover object-center" src="/IMG_0568-33.jpg" alt="gallery-photo" /></div>
                <div><img className="h-auto max-w-full rounded-lg object-cover object-center" src="/IMG_0573-32.jpg" alt="gallery-photo" /></div>
                <div><img className="h-auto max-w-full rounded-lg object-cover object-center" src="/IMG_0578-31.jpg" alt="gallery-photo" /></div>
                <div><img className="h-auto max-w-full rounded-lg object-cover object-center" src="/IMG_0589-30.jpg" alt="gallery-photo" /></div>
                <div><img className="h-auto max-w-full rounded-lg object-cover object-center" src="/IMG_0592-29.jpg" alt="gallery-photo" /></div>
                <div><img className="h-auto max-w-full rounded-lg object-cover object-center" src="/IMG_0593-28.jpg" alt="gallery-photo" /></div>
                <div><img className="h-auto max-w-full rounded-lg object-cover object-center" src="/IMG_0594-27.jpg" alt="gallery-photo" /></div>
                <div><img className="h-auto max-w-full rounded-lg object-cover object-center" src="/IMG_0595-26.jpg" alt="gallery-photo" /></div>
                <div><img className="h-auto max-w-full rounded-lg object-cover object-center" src="/IMG_0596-25.jpg" alt="gallery-photo" /></div>
                <div><img className="h-auto max-w-full rounded-lg object-cover object-center" src="/IMG_0597-24.jpg" alt="gallery-photo" /></div>
                <div><img className="h-auto max-w-full rounded-lg object-cover object-center" src="/IMG_0612-23.jpg" alt="gallery-photo" /></div>
                <div><img className="h-auto max-w-full rounded-lg object-cover object-center" src="/IMG_0614-22.jpg" alt="gallery-photo" /></div>
                <div><img className="h-auto max-w-full rounded-lg object-cover object-center" src="/IMG_0615-21.jpg" alt="gallery-photo" /></div>
                <div><img className="h-auto max-w-full rounded-lg object-cover object-center" src="/IMG_0618-20.jpg" alt="gallery-photo" /></div>
                <div><img className="h-auto max-w-full rounded-lg object-cover object-center" src="/IMG_0620-19.jpg" alt="gallery-photo" /></div>
                <div><img className="h-auto max-w-full rounded-lg object-cover object-center" src="/IMG_0621-18.jpg" alt="gallery-photo" /></div>
                <div><img className="h-auto max-w-full rounded-lg object-cover object-center" src="/IMG_0623-17.jpg" alt="gallery-photo" /></div>
                <div><img className="h-auto max-w-full rounded-lg object-cover object-center" src="/IMG_0625-16.jpg" alt="gallery-photo" /></div>
                <div><img className="h-auto max-w-full rounded-lg object-cover object-center" src="/IMG_0627-15.jpg" alt="gallery-photo" /></div>
                <div><img className="h-auto max-w-full rounded-lg object-cover object-center" src="/IMG_0629-14.jpg" alt="gallery-photo" /></div>
                <div><img className="h-auto max-w-full rounded-lg object-cover object-center" src="/IMG_0634-13.jpg" alt="gallery-photo" /></div>
                <div><img className="h-auto max-w-full rounded-lg object-cover object-center" src="/IMG_0638-12.jpg" alt="gallery-photo" /></div>
                <div><img className="h-auto max-w-full rounded-lg object-cover object-center" src="/IMG_0640-11.jpg" alt="gallery-photo" /></div>
                <div><img className="h-auto max-w-full rounded-lg object-cover object-center" src="/IMG_0643-10.jpg" alt="gallery-photo" /></div>
                <div><img className="h-auto max-w-full rounded-lg object-cover object-center" src="/IMG_0648-9.jpg" alt="gallery-photo" /></div>
                <div><img className="h-auto max-w-full rounded-lg object-cover object-center" src="/IMG_0649-8.jpg" alt="gallery-photo" /></div>
                <div><img className="h-auto max-w-full rounded-lg object-cover object-center" src="/IMG_0650-7.jpg" alt="gallery-photo" /></div>
                <div><img className="h-auto max-w-full rounded-lg object-cover object-center" src="/IMG_0651-6.jpg" alt="gallery-photo" /></div>
                <div><img className="h-auto max-w-full rounded-lg object-cover object-center" src="/IMG_0653-5.jpg" alt="gallery-photo" /></div>
                <div><img className="h-auto max-w-full rounded-lg object-cover object-center" src="/IMG_0655-4.jpg" alt="gallery-photo" /></div>
                <div><img className="h-auto max-w-full rounded-lg object-cover object-center" src="/IMG_0657-3.jpg" alt="gallery-photo" /></div>
                <div><img className="h-auto max-w-full rounded-lg object-cover object-center" src="/IMG_0662-2.jpg" alt="gallery-photo" /></div>
                <div><img className="h-auto max-w-full rounded-lg object-cover object-center" src="/IMG_0670-1.jpg" alt="gallery-photo" /></div>
                <div><img className="h-auto max-w-full rounded-lg object-cover object-center" src="/IMG_9446.jpg" alt="gallery-photo" /></div>
                <div><img className="h-auto max-w-full rounded-lg object-cover object-center" src="/IMG_9571.jpg" alt="gallery-photo" /></div>
                <div><img className="h-auto max-w-full rounded-lg object-cover object-center" src="/IMG_9579.jpg" alt="gallery-photo" /></div>
                <div><img className="h-auto max-w-full rounded-lg object-cover object-center" src="/IMG_9581.jpg" alt="gallery-photo" /></div>
                <div><img className="h-auto max-w-full rounded-lg object-cover object-center" src="/IMG_9584.jpg" alt="gallery-photo" /></div>
                <div><img className="h-auto max-w-full rounded-lg object-cover object-center" src="/IMG_9587.jpg" alt="gallery-photo" /></div>
                <div><img className="h-auto max-w-full rounded-lg object-cover object-center" src="/IMG_9590.jpg" alt="gallery-photo" /></div>
                <div><img className="h-auto max-w-full rounded-lg object-cover object-center" src="/IMG_9594.jpg" alt="gallery-photo" /></div>
                <div><img className="h-auto max-w-full rounded-lg object-cover object-center" src="/IMG_9608.jpg" alt="gallery-photo" /></div>
                <div><img className="h-auto max-w-full rounded-lg object-cover object-center" src="/IMG_9612.jpg" alt="gallery-photo" /></div>
                <div><img className="h-auto max-w-full rounded-lg object-cover object-center" src="/IMG_9614.jpg" alt="gallery-photo" /></div>
                <div><img className="h-auto max-w-full rounded-lg object-cover object-center" src="/IMG_9615.jpg" alt="gallery-photo" /></div>
                <div><img className="h-auto max-w-full rounded-lg object-cover object-center" src="/IMG_9619.jpg" alt="gallery-photo" /></div>
                <div><img className="h-auto max-w-full rounded-lg object-cover object-center" src="/IMG_9620.jpg" alt="gallery-photo" /></div>
                <div><img className="h-auto max-w-full rounded-lg object-cover object-center" src="/IMG_9621.jpg" alt="gallery-photo" /></div>
                <div><img className="h-auto max-w-full rounded-lg object-cover object-center" src="/IMG_9622.jpg" alt="gallery-photo" /></div>
                <div><img className="h-auto max-w-full rounded-lg object-cover object-center" src="/IMG_9623.jpg" alt="gallery-photo" /></div>
                <div><img className="h-auto max-w-full rounded-lg object-cover object-center" src="/IMG_9625.jpg" alt="gallery-photo" /></div>
                <div><img className="h-auto max-w-full rounded-lg object-cover object-center" src="/IMG_9628.jpg" alt="gallery-photo" /></div>
                <div><img className="h-auto max-w-full rounded-lg object-cover object-center" src="/IMG_9632.jpg" alt="gallery-photo" /></div>
                <div><img className="h-auto max-w-full rounded-lg object-cover object-center" src="/IMG_9635.jpg" alt="gallery-photo" /></div>
                <div><img className="h-auto max-w-full rounded-lg object-cover object-center" src="/IMG_9638.jpg" alt="gallery-photo" /></div>
                <div><img className="h-auto max-w-full rounded-lg object-cover object-center" src="/IMG_9644.jpg" alt="gallery-photo" /></div>
                <div><img className="h-auto max-w-full rounded-lg object-cover object-center" src="/IMG_9646.jpg" alt="gallery-photo" /></div>
                <div><img className="h-auto max-w-full rounded-lg object-cover object-center" src="/IMG_9648.jpg" alt="gallery-photo" /></div>
                <div><img className="h-auto max-w-full rounded-lg object-cover object-center" src="/IMG_9650.jpg" alt="gallery-photo" /></div>
                <div><img className="h-auto max-w-full rounded-lg object-cover object-center" src="/IMG_9653.jpg" alt="gallery-photo" /></div>
                <div><img className="h-auto max-w-full rounded-lg object-cover object-center" src="/IMG_9656.jpg" alt="gallery-photo" /></div>
                <div><img className="h-auto max-w-full rounded-lg object-cover object-center" src="/IMG_9658.jpg" alt="gallery-photo" /></div>
                <div><img className="h-auto max-w-full rounded-lg object-cover object-center" src="/IMG_9660.jpg" alt="gallery-photo" /></div>
                <div><img className="h-auto max-w-full rounded-lg object-cover object-center" src="/IMG_9668.jpg" alt="gallery-photo" /></div>
                <div><img className="h-auto max-w-full rounded-lg object-cover object-center" src="/IMG_9671.jpg" alt="gallery-photo" /></div>
                <div><img className="h-auto max-w-full rounded-lg object-cover object-center" src="/IMG_9673.jpg" alt="gallery-photo" /></div>
                <div><img className="h-auto max-w-full rounded-lg object-cover object-center" src="/IMG_9676.jpg" alt="gallery-photo" /></div>
                <div><img className="h-auto max-w-full rounded-lg object-cover object-center" src="/IMG_9677.jpg" alt="gallery-photo" /></div>
                <div><img className="h-auto max-w-full rounded-lg object-cover object-center" src="/IMG_9681.jpg" alt="gallery-photo" /></div>
                <div><img className="h-auto max-w-full rounded-lg object-cover object-center" src="/IMG_9684.jpg" alt="gallery-photo" /></div>
                <div><img className="h-auto max-w-full rounded-lg object-cover object-center" src="/IMG_9685.jpg" alt="gallery-photo" /></div>
                <div><img className="h-auto max-w-full rounded-lg object-cover object-center" src="/IMG_9686.jpg" alt="gallery-photo" /></div>
                <div><img className="h-auto max-w-full rounded-lg object-cover object-center" src="/IMG_9691.jpg" alt="gallery-photo" /></div>
                <div><img className="h-auto max-w-full rounded-lg object-cover object-center" src="/IMG_9694.jpg" alt="gallery-photo" /></div>
                <div><img className="h-auto max-w-full rounded-lg object-cover object-center" src="/IMG_9701.jpg" alt="gallery-photo" /></div>
                <div><img className="h-auto max-w-full rounded-lg object-cover object-center" src="/IMG_9706.jpg" alt="gallery-photo" /></div>
                <div><img className="h-auto max-w-full rounded-lg object-cover object-center" src="/IMG_9709.jpg" alt="gallery-photo" /></div>
                <div><img className="h-auto max-w-full rounded-lg object-cover object-center" src="/IMG_9711.jpg" alt="gallery-photo" /></div>
                <div><img className="h-auto max-w-full rounded-lg object-cover object-center" src="/IMG_9714.jpg" alt="gallery-photo" /></div>
                <div><img className="h-auto max-w-full rounded-lg object-cover object-center" src="/IMG_9716.jpg" alt="gallery-photo" /></div>
                <div><img className="h-auto max-w-full rounded-lg object-cover object-center" src="/IMG_9719.jpg" alt="gallery-photo" /></div>
                <div><img className="h-auto max-w-full rounded-lg object-cover object-center" src="/IMG_9722.jpg" alt="gallery-photo" /></div>
                <div><img className="h-auto max-w-full rounded-lg object-cover object-center" src="/IMG_9724.jpg" alt="gallery-photo" /></div>
                <div><img className="h-auto max-w-full rounded-lg object-cover object-center" src="/IMG_9729.jpg" alt="gallery-photo" /></div>
                <div><img className="h-auto max-w-full rounded-lg object-cover object-center" src="/IMG_9729_1.jpg" alt="gallery-photo" /></div>
                <div><img className="h-auto max-w-full rounded-lg object-cover object-center" src="/IMG_9730.jpg" alt="gallery-photo" /></div>
                <div><img className="h-auto max-w-full rounded-lg object-cover object-center" src="/IMG_9731.jpg" alt="gallery-photo" /></div>
                <div><img className="h-auto max-w-full rounded-lg object-cover object-center" src="/IMG_9732.jpg" alt="gallery-photo" /></div>
                <div><img className="h-auto max-w-full rounded-lg object-cover object-center" src="/IMG_9736.jpg" alt="gallery-photo" /></div>
                <div><img className="h-auto max-w-full rounded-lg object-cover object-center" src="/IMG_9740.jpg" alt="gallery-photo" /></div>
                <div><img className="h-auto max-w-full rounded-lg object-cover object-center" src="/IMG_9741.jpg" alt="gallery-photo" /></div>
            </div>
        </div>
    );
}