import React, { ReactNode } from 'react'

interface CardElementsProps {
    children: ReactNode;
    title: string
}

const CardElement = (params: CardElementsProps) => {
  return (
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '18rem',
        backgroundColor: '#FFFFFF',
        borderRadius: '0.5rem',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)', 
    }}>
        <p style={{
            fontWeight: '500',
            padding: '0.6rem 1rem 0.45rem 1rem',
            margin: '0',
            fontSize: '1.15rem'
        }}>
            {params.title}
        </p>
        <hr style={{
            border: '0',
            width: '100%',
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