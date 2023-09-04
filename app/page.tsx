'use client'

import { useState } from 'react'
import perfil from '../public/images/perfil.png'
import { InitialPage } from './initialPage'
import { Form } from './form';
import { LearnMore } from './learnMore';
import { Carroussel } from './components/carrousel';

export default function Home() {
  const [initial, setInitial] = useState(true);
  const [saibaMais, setSaibaMais] = useState(false);
  const [formulario, setFormulario] = useState(false);

  const handleInitial = () => {
    setInitial(true);
    setSaibaMais(false);
    setFormulario(false);
  }

  const handleSaibaMais = () => {
    setSaibaMais(true);
    setInitial(false);
    setFormulario(false);
  }

  const handleFormulario = () => {
    setFormulario(true);
    setSaibaMais(false);
    setInitial(false);
  }

  return (
    <div className='flex flex-col md:flex-row justify-around gap-10 w-full p-20'>
      <main className="flex justify-center p-5 md:p-10 h-[600px] min-w-[270px] md:min-w-[300px] md:w-3/6 bg-white/20 text-white border-move">
        {initial &&
          <InitialPage saibaMais={handleSaibaMais} formulario={handleFormulario} />
        }
        {formulario &&
          <Form initial={handleInitial}/>
        }
        {saibaMais &&
          <LearnMore initial={handleInitial}/>
        }
      </main>
      <aside className="flex justify-center relative overflow-hidden md:w-2/4">
        <Carroussel/>
      </aside>
    </div>
  )
}
