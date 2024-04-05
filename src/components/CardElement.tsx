import { ReactNode } from 'react'

interface CardElementsProps {
    children: ReactNode;
    title: string
}

const CardElement = (params: CardElementsProps) => {
  return (
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        height: '18rem',
    }} className='card-element'>
        <p style={{
            fontWeight: '600',
            padding: '0.6rem 1rem 0.45rem 1rem',
            margin: '0',
            fontSize: '1rem'
        }}>
            {params.title}
        </p>
        <hr style={{
            border: '0',
            height: '1px',
            padding: '0',
            margin: '0',
            backgroundColor: '#E2E2E5'
        }}/>
            {params.children}
    </div>
  )
}

export default CardElement