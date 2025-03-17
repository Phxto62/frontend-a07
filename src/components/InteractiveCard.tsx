'use client'
import { ReactNode } from 'react';

export default function InteractiveCard ({children, contentName} : {children:React.ReactNode, contentName:string}) {
    function onCardMouseAction(event:React.SyntheticEvent){
        if(event.type=='mouseover'){
            event.currentTarget.classList.remove('shadow-lg')
            event.currentTarget.classList.add('shadow-2xl')

            event.currentTarget.classList.remove('bg-white')
            event.currentTarget.classList.add('bg-neutral-200')
        }
        else {
            event.currentTarget.classList.remove('shadow-2xl')
            event.currentTarget.classList.add('shadow-lg')

            event.currentTarget.classList.remove('bg-neutral-200')
            event.currentTarget.classList.add('bg-white')
        }
    }

    function onHallSelected(){
        alert("You selected " + contentName)
    }

    return (
        <div className='w-full h-[300px] shadow-lg rounded-lg bg-white'
        onClick={()=>onHallSelected()}
        onMouseOver={(e)=>onCardMouseAction(e)}
        onMouseOut={(e)=>onCardMouseAction(e)}>
            {children}
        </div>
    );
}