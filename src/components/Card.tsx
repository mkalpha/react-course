import {  PropsWithChildren } from 'react'

interface Props {
    bg?: string
}

const Card =  ({ children, bg = 'bg-gray-100' }: PropsWithChildren<Props>) =>{
    return (
        <div className= {`${bg} p-6 rounded-lg shadow-md`}>
            { children }
        </div>
    )
}

export default Card