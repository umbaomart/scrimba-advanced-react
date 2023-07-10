function Button({ children, onClick, onDoubleClick }) {
    return (
        <button onDoubleClick={onDoubleClick} onClick={onClick} className="button">{children}</button>
    );
}

export default Button;