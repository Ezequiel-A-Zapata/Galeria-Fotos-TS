import imagenIphone16Pro from "../assets/imagenes-galeriaDeFotos/iphone-16-pro-vertical.png";
import imagenIphone16 from "../assets/imagenes-galeriaDeFotos/iphone-16.jpg";
import imagenIpadAir from "../assets/imagenes-galeriaDeFotos/ipad-air.png";
import imagenAppleWatch from "../assets/imagenes-galeriaDeFotos/apple-watch.png";
import imagenAirPods from "../assets/imagenes-galeriaDeFotos/airpods.jpg";
import imagenAirPods2 from "../assets/imagenes-galeriaDeFotos/airpods2.jpg";



const Inicio = () => {
    return (
        <section className="w-screen">
            <div className="w-full h-12  bg-black"></div>
            <section className=" gap-3 flex flex-col bg-white">
                <div className="bg-black">
                <img src={imagenIphone16Pro} alt="Iphone 16 Pro" className="size-auto" />
                </div>
                <div className="bg-zinc-800">
                <img src={imagenIphone16} alt="Iphone 16" className=" size-auto" />
                </div>
                <div className="bg-gradient-to-b from-green-200 to-slate-50">
                <img src={imagenIpadAir} alt="Ipad Air" className="size-auto" />
                </div>
                <div className=" bg-gradient-to-b from-zinc-950 to-zinc-800 ">
                <img src={imagenAppleWatch} alt="Apple Watch" className="size-auto" />
                </div>
                <div className="bg-black">
                <img src={imagenAirPods} alt="AirPods" className="size-auto" />
                <img src={imagenAirPods2} alt="AirPods" className="size-auto" />
                </div>
            </section>
        </section>
    )
}

export default Inicio