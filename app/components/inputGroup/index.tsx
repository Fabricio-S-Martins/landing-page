import { ChangeEvent } from 'react';
import './style.css';

type Prop = {
    name: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const InputGroup = ({name, value, onChange}: Prop) => {
    return (
        <div className="inputGroup w-5/6 md:w-3/4">
            <input value={value} onChange={onChange} type="text" required autoComplete="off"/>
            <label htmlFor="name">{name}</label>
        </div>
    );
}