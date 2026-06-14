import React from 'react'
import { Handle } from 'reactflow'
import '../styles/node.css'

export const BaseNode = (
    {
        id,
        title,
        children,
        handles = [],
        description
    }
) => {
    const wrapperStyle = {
    width: 260,
    minHeight: 140,
    background: '#111827',
    border: '1px solid #374151',
    borderRadius: '16px',
    padding: '16px',
    color: '#fff',
    boxShadow: '0 8px 24px rgba(0,0,0,0.25)',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    transition: 'all 0.2s ease'
    };
  return (
    <div className='node-container'>
        {
            handles.map((handle, index) => (
                <Handle
                key={index}
                type={handle.type}
                position={handle.position}
                id={`${id}-${handle.id}`}
                style={{
                        width: 12,
                        height: 12,
                        background: '#6366F1',
                        border: '2px solid white',
                        ...handle.style
                    }}
                />
            ))
        }
      {
        title && (
        <div className='node-title'>
            {title}
            </div>
        )
      }
      {
        description && (
            <div className='node-description'>
            {description}
            </div>
        )
      }

      {
        children && (
            <div className='node-content' >
            {children}
            </div>
        )
      }
    </div>
  )
}

