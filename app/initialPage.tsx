import { Btn } from "./components/button/btn";

type Prop = {
    saibaMais: () => void;
    formulario: () => void;
}

export const InitialPage = ({ saibaMais, formulario }: Prop) => {
    return (
        <div className='flex flex-col justify-center gap-10'>
            <div className='flex flex-col gap-4'>
                <h1 className='text-5xl md:text-7xl font-bold font-mono'>EMPRESA</h1>
                <h3 className='text-xl md:text-2xl text-gray-300'>Conhecimento e Capacitação</h3>
            </div>
            <p className='h-2/5 text-justify'>Empresa voltada a capacitar seus clientes na era DIGITAL, com diversos cursos de IA(Inteligencia Artificial) para adapta-los aos tempos modernos</p>
            <div className='flex justify-around gap-2 w-full'>
                <Btn onClick={saibaMais} name="Saiba mais"/>
                <Btn onClick={formulario} name="Registrar"/>
           </div>
        </div>
    );
}