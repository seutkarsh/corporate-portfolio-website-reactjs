import React from 'react'
import './rectButton.css'

interface IProps {
    filled: boolean
    text: string
    onClick?: () => void
    size: string
    customClasses?: string
    type?: 'submit' | 'reset' | 'button' | undefined
}
const RectButton = ({
    filled,
    text,
    onClick,
    size,
    customClasses,
    type,
}: IProps): React.ReactElement => {
    return (
        <button
            type={type ? type : undefined}
            className={`rect-button ${filled ? 'rect-button--filled' : ''} ${size} ${customClasses}`}
            onClick={onClick}
        >
            {text}
        </button>
    )
}

export default RectButton
