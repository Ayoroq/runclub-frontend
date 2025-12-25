import styles from './Button.module.css'

export default function Button({
    type = 'button',
    onClick,
    className,
    text,
    ...props
}) {

    return (
        <button 
            type={type}
            className={`${styles.button} ${className || ''}`}
            onClick={onClick} 
            {...props}
        >
            {text}
        </button>
    )
}