type Prop = {
    name: string;
    onClick: () => void;
}

export const Btn = ({name, onClick}: Prop) => {
    return(
        <>
            <span onClick={onClick} className='px-1 min-w-[100px] text-center md:px-4 md:py-1 bg-blue-950/30 rounded-lg border-2 hover:bg-white/10 cursor-pointer'>
                {name}
            </span>
        </>
    );
}