import classNames from "classnames";

function Button({ children, size, className, ...props }) {

    let sizeClass = size ? `button-${size}` : '';

    const allClasses = classNames(sizeClass, className);

    return (
        <button className={allClasses} {...props}>{children}</button>
    );
}

export default Button;