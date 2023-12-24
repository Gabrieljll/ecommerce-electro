



export const FormularioMail = () => {


    return (
        <main>

            <div className="container mx-auto flex flex-wrap items-start mt-8">
                <div className="w-full pl-2 pr-2 mb-4 mt-4">
                    <h1 className="text-3xl font-extrabold text-center">Envianos tu consulta</h1>
                </div>
            </div>

            <div className="container mx-auto flex items-center justify-center">
                <div className="w-full md:w-2/3 lg:w-1/2">

            {/* Formulario  */}
            <form className="bg-white px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <div className="grid grid-flow-row sm:grid-flow-col gap-3">
                        <div className="sm:col-span-4 justify-center">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nya"> Nombres y Apellidos </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-solid" id="nya" type="text" placeholder="Carlos Torres" required />
                        </div>
                        <div className="sm:col-span-4 justify-center">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email"> Email </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-solid" id="email" type="email" placeholder="ctorres@mail.com" required />
                        </div>
                    </div>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="asunto"> Asunto </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-solid" id="asunto" type="text" placeholder="Venta de Productos" required />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mensaje"> Mensaje </label>
                    <textarea className="shadow appearance-none border-0 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="mensaje" rows="5" placeholder="El mensaje" required></textarea>
                </div>
                <div className="flex items-center justify-between">
                    <div className="shadow-slate-300 text-base button shadow-md py-3">
                        <h6>Enviar</h6>
                    </div>
                </div>
            </form>              
            
            </div>

            </div> 
        </main>
    )
}