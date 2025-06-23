import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
export default function Contato(){
    return(
        <div className="h-dvh flex flex-col justify-evenly items-center bg-[url(https://ik.imagekit.io/pagnofotografia/IMG_9719.jpg)] bg-cover bg-center" id="contato">
            <h1 className="font-[Montserrat] font-bold text-white text-center text-[32px]">Gostou do que viu? Vamos conversar.</h1>
            <div className="flex justify-evenly items-center w-dvw">
                <div className="relative">
                    <a
                        href="https://wa.me/5545998502850?text=Ol%C3%A1,+vim+pelo+seu+portfolio+de+fotografia+e+queria+mais+informa%C3%A7%C3%B5es" // Adicione seu link do WhatsApp aqui
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center p-3 bg-[#B49A6C] rounded-full cursor-pointer group transition-all duration-500 ease-in-out hover:pl-4 hover:pr-6 hover:bg-green-500"
                    >
                        <FaWhatsapp className="fill-white text-[40px] md:text-[50px]"/>
                        <div className="overflow-hidden max-w-0 group-hover:max-w-sm transition-all duration-500 ease-in-out">
                            <p className='ml-2 font-[Poppins] font-bold text-white text-lg whitespace-nowrap'>
                                Chamar no Whats
                            </p>
                        </div>
                    </a>
                    <p className="text-white font-[Poppins] font-semibold absolute top-full left-1/2 transform -translate-x-1/2">Whatsapp</p>
                </div>
                <div className="relative">
                <a
                    href="https://instagram.com/pagnofotografia" // Adicione seu link do WhatsApp aqui
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-3 bg-[#B49A6C] rounded-full cursor-pointer group transition-all duration-500 ease-in-out hover:pl-4 hover:pr-6 instagram"
                >
                    <FaInstagram className="fill-white text-[40px] md:text-[50px]"/>
                    <div className="overflow-hidden max-w-0 group-hover:max-w-sm transition-all duration-500 ease-in-out">
                        <p className='ml-2 font-[Poppins] font-bold text-white text-lg whitespace-nowrap'>
                            Instagram
                        </p>
                    </div>
                    <p className="text-white font-[Poppins] font-semibold absolute top-full left-1/2 transform -translate-x-1/2">Instagram</p>
                </a> </div>
                    <div className="relative">
                    <a
                    href="mailto:pagnofotografia@gmail.com" // Adicione seu link do WhatsApp aqui
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-3 bg-[#B49A6C] rounded-full cursor-pointer group transition-all duration-500 ease-in-out hover:pl-4 hover:pr-6 hover:bg-blue-500"
                >
                    <CiMail className="fill-white text-[40px] md:text-[50px]"/>
                    <div className="overflow-hidden max-w-0 group-hover:max-w-sm transition-all duration-500 ease-in-out">
                        <p className='ml-2 font-[Poppins] font-bold text-white text-lg whitespace-nowrap'>
                            Email
                        </p>
                    </div>
                        <p className="text-white font-[Poppins] font-semibold absolute top-full left-1/2 transform -translate-x-1/2">Email</p>
                </a>
                    </div>
            </div>
        </div>
    )
}