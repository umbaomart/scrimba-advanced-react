import classNames from "classnames";

function Button({ children, className, size, variant, ...props }) {

    let sizeClass = size ? `button-${size}` : '';
    let variantClass = variant ? `button-${variant}` : '';

    const allClasses = classNames(sizeClass, className, variantClass);

    return (
        <button className={allClasses} {...props}>{children}</button>
    );
}

export default Button;