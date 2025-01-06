
import imagen from  "../assets/imagenes-galeriaDeFotos/apple-logo.png"


const Header = () => {
    return (
        <section className="w-full flex justify-between p-0 m-0 bg-stone-900 bg-opacity-90 h-12 fixed">
            <div className=" w-12  justify-center items-center flex flex-col" > 
                <img src={imagen} alt="imagen" className="size-5 " />
            </div>
            <button className="text-slate-300 w-12 items-center justify-center flex "><i className="bi bi-list" style={{fontSize: "1.2rem"}}></i></button>
        </section>
    )
}

export default Header