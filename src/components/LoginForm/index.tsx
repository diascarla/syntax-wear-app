export const LoginForm = () => {
    return (
        <form className="flex flex-col gap-3.5 ">
            <input type="email" placeholder="E-mail" className="border rounded-[1px] w-full text-black p-3"/>
            <button className="bg-[#212A2F] w-full p-3.5 rounded-[1px] text-white cursor-pointer">Continuar</button>
        </form>
    )
}