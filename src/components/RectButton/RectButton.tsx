import React from 'react'
import './rectButton.css'

interface IProps {
    filled: boolean
    text: string
    onClick?: () => void
    size: string
    customClasses?: string
}
const RectButton = ({
    filled,
    text,
    onClick,
    size,
    customClasses,
}: IProps): React.ReactElement => {
    return (
        <button
            className={`rect-button ${filled ? 'rect-button--filled' : ''} ${size} ${customClasses}`}
            onClick={onClick}
        >
            {text}
        </button>
    )
}

export default RectButton
