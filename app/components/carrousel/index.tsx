import { useEffect, useState } from 'react';
import chatGPT from '../../../public/images/chagpt.jpg'
import IA from '../../../public/images/IA.jpg'
import IA2 from '../../../public/images/IAar.jpg'

export const Carroussel = () => {
    const [imagesCenter, setImagesCenter] = useState<number>(1);

    const handleLeftClick = () => {
        if (imagesCenter === 1) {
            setImagesCenter(3);
        }
        else {
            setImagesCenter(imagesCenter - 1);
        }
    };

    const handleRightClick = () => {
        if (imagesCenter === 3) {
            setImagesCenter(1);
        }
        else {
            setImagesCenter(imagesCenter + 1);
        }
    };

    useEffect(()=>{
        const interval = setInterval(() => {
            if(imagesCenter === 3){
                setImagesCenter(1);
            }
            else{
                setImagesCenter(imagesCenter +1);
            }
          }, 5000)
          return () => {
            clearInterval(interval);
          };
    },[imagesCenter]);

    return (
        <div className='flex items-center justify-around flex-no-wrap select-none'>
            <span onClick={handleLeftClick} className='absolute z-50 top-2/4 left-0 cursor-pointer text-white opacity-25'>◀</span>
            <span onClick={handleRightClick} className='absolute z-50 top-2/4 right-0 cursor-pointer text-white opacity-25'>▶</span>
            <div onClick={() => setImagesCenter(1)} className={`flex bg-[#404c58] border-4 rounded-lg p-2 items-center flex-col transition duration-1000 ease-out shadow-xl shadow-white/40 ${imagesCenter === 1 ? `flex w-8/12 min-h-[500px] z-10 text-white` : `w-4/12 opacity-30 absolute text-gray-500 max-h-[400px] text-xs`} ${imagesCenter === 3 ? `right-0` : `left-0`}`}>
                <img src={chatGPT.src} alt='' className='' />
                <div className='w-full p-2'>
                    ChatGPT é um modelo de linguagem desenvolvido pela OpenAI, baseado na arquitetura GPT-3.5. Ele é uma versão avançada de modelos de linguagem alimentados por inteligência artificial e é projetado para entender e gerar texto de maneira coerente e contextualmente relevante.
                </div>
            </div>
            <div onClick={() => setImagesCenter(2)} className={`flex bg-[#404c58] border-4 rounded-lg p-2 items-center flex-col transition duration-1000 ease-out shadow-xl shadow-white/40 ${imagesCenter === 2 ? `flex w-8/12 min-h-[500px] z-10 text-white `:`w-4/12 opacity-30 absolute text-gray-500 max-h-[400px] text-xs`} ${imagesCenter === 3 ? `left-0` : `right-0`}`}>
            <img src={IA.src} alt=''  />
                <div className='w-full p-2'>
                Bard é um chatbot de inteligência artificial desenvolvido pelo Google. Ele é baseado no modelo de linguagem LaMDA, que foi treinado em um enorme conjunto de dados de texto e código.                </div>
            </div>
            <div onClick={() => setImagesCenter(3)} className={`flex bg-[#404c58] border-4 rounded-lg p-2 items-center flex-col transition duration-1000 ease-out shadow-xl shadow-white/40 ${imagesCenter === 3 ? `flex w-8/12 min-h-[500px] z-10 text-white `:`w-4/12 opacity-30 absolute text-gray-500 max-h-[400px] text-xs`} ${imagesCenter === 1 ? `left-0` : `right-0`}`}>
                <img src={IA2.src} alt='' className='' />
                <div className='w-full p-2'>
                Hackers são indivíduos que utilizam suas habilidades em computação e conhecimentos avançados em segurança cibernética para realizar atividades ilegais e prejudiciais. Suas intenções são geralmente egoístas e visam benefício pessoal, financeiro ou causar danos a terceiros.                </div>
            </div>
        </div>
    );
}