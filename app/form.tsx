import { ChangeEvent, useRef, useState } from "react";
import { InputGroup } from "./components/inputGroup";
import { Btn } from "./components/button/btn";
import { Api } from "./data/api/api";

type Prop = {
    initial: () => void;
}

export const Form = ({initial}: Prop) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [CPF, setCPF] = useState('');
    const [phone, setPhone] = useState('');

    const [fillCorretly, setFillCorretly] = useState(0);

    const changeNome = (e: ChangeEvent<HTMLInputElement>) =>{
        const nomeChanged = e.target.value;
        setName(nomeChanged);

    }
    const changeEmail = (e: ChangeEvent<HTMLInputElement>) =>{
        const emailChanged = e.target.value;
        setEmail(emailChanged);
    }
    const changeCPF = (e: ChangeEvent<HTMLInputElement>) =>{
        const CPFChanged = e.target.value;
        setCPF(CPFChanged);
    }
    const changeTelefone = (e: ChangeEvent<HTMLInputElement>) =>{
        const telefoneChanged = e.target.value;
        setPhone(telefoneChanged);
    }

    const formRef = useRef<HTMLFormElement | null>(null);

    const clearFields = () => {
        setName('');
        setEmail('');
        setCPF('');
        setPhone('');
    }

    
    const Cadastrar = async () => {
        if (
            name.length >= 3 &&
            email.length >= 13 &&
            CPF.length >= 11 &&
            phone.length >= 8
         ){
            try {
                let response = await Api.CreatePerson(
                    name,
                    email,
                    CPF,
                    phone
                );
                console.log(response)
                if (response === 200) {
                    setFillCorretly(1);
                } else if (response === 409){
                    setFillCorretly(3);
                }
                clearFields();
            }
            catch(error){
                console.log('Erro na solicitação:', error);
            }
        }
        else{
            setFillCorretly(2);
        }
    }

    return(
        <form ref={formRef} className="flex flex-col pb-4 justify-around items-center w-full lg:w-3/4 rounded-lg bg-white/20">
            <h1 className="text-4xl md:text-4xl text-center font-semibold md:px-2">Preencha o Formulário</h1>
            <InputGroup name="Nome" value={name} onChange={changeNome}/>
            <InputGroup name="E-mail" value={email} onChange={changeEmail}/>
            <InputGroup name="CPF" value={CPF} onChange={changeCPF}/>
            <InputGroup name="Telefone" value={phone} onChange={changeTelefone}/>
            {fillCorretly === 1 &&
                <h3 className="text-xl w-full text-center text-green-300">Cadastro efetuado com sucesso!</h3>            
            }
            {fillCorretly === 2 &&
                <h3 className="text-xl w-full text-center text-red-300">Preencha todos os campos do formulário!</h3>            
            }
            {fillCorretly === 3 &&
                <h3 className="text-xl w-full text-center text-red-300">CPF ja cadastrado!</h3>            
            }
            <div className="flex justify-around  w-full">
                <Btn onClick={initial} name="Retornar"/>
                <Btn onClick={Cadastrar} name="Cadastrar"/>
            </div>
        </form>
    );
}