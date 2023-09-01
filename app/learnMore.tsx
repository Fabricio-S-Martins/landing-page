import { Btn } from "./components/button/btn";

type Prop = {
    initial: () => void;
}

export const LearnMore = ({initial}: Prop) => {
    return (
        <div className="flex flex-col justify-around">
            <h1 className="text-3xl md:text-7xl font-bold">EMPRESA</h1>
            <h2 className="text-lg md:text-2xl text-gray-200 text-justify">
                Empresa com 10 anos de mercado Nacional e desde 2017 no mercado internacional com paises como Inglaterra e Canadá, 100 filiais pelo Mundo e mais de 10.000 alunos ativos no ano de 2022.
            </h2>

            <div className="mb-4">
                <h2 className="text-xl md:text-4xl mb-4">Alguns dos nosso principais cursos</h2>
                <ul className="list-disc pl-8">
                    <li>Inovação com IA(ChatGPT)</li>
                    <li>Design Gráfico</li>
                    <li>Integração De algo</li>
                    <li>Abordagem intuitiva</li>
                </ul>
            </div>
            <Btn onClick={initial} name="Retornar"/>
        </div>
    );
}