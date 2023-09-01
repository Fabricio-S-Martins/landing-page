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
        console.log(name);

    }
    const changeEmail = (e: ChangeEvent<HTMLInputElement>) =>{
        const emailChanged = e.target.value;
        setEmail(emailChanged);
        console.log(email);
    }
    const changeCPF = (e: ChangeEvent<HTMLInputElement>) =>{
        const CPFChanged = e.target.value;
        setCPF(CPFChanged);
        console.log(CPF);
    }
    const changeTelefone = (e: ChangeEvent<HTMLInputElement>) =>{
        const telefoneChanged = e.target.value;
        setPhone(telefoneChanged);
        console.log(phone);
    }

    const formRef = useRef<HTMLFormElement | null>(null);

    const clearFields = () => {
        setName('');
    }

    
    const Cadastrar = async () => {
        if (
            name.length > 0 &&
            email.length > 0 &&
            CPF.length > 0 &&
            phone.length > 0
         ){
            try {
                let json = await Api.CreatePerson(
                    name,
                    email,
                    CPF,
                    phone
                );
                setFillCorretly(1);
                console.log(json);
                
                formRef.current?.reset();
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
        <form ref={formRef} className="flex flex-col pb-4 justify-around items-center w-full md:w-3/4 rounded-lg bg-white/20">
            <h1 className="text-xl md:text-3xl font-semibold">Preencha o Formulário</h1>
            <InputGroup name="Nome" value={name} onChange={changeNome}/>
            <InputGroup name="E-mail" value={email} onChange={changeEmail}/>
            <InputGroup name="CPF" value={CPF} onChange={changeCPF}/>
            <InputGroup name="Telefone" value={phone} onChange={changeTelefone}/>
            {fillCorretly === 1 &&
                <h3 className="text-xl text-green-300">Cadastro efetuado com sucesso!</h3>            
            }
            {fillCorretly === 2 &&
                <h3 className="text-xl text-red-300">Preencha todos os campos do formulário!</h3>            
            }
            <div className="flex justify-center gap-16 w-full">
                <Btn onClick={initial} name="Retornar"/>
                <Btn onClick={Cadastrar} name="Cadastrar"/>
            </div>
        </form>
    );
}