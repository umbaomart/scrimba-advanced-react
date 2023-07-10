function Button({ children, size, ...props }) {

    const styles = {
        sm: 'button-small',
        md: 'button-medium',
        lg: 'button-large',
    };
    var btn_size;

   for (const [key, value] of Object.entries(styles)) {
       if (key === size) {
        btn_size = value;
       }
    }

    return (
        <button className={btn_size} {...props}>{children}</button>
    );
}

export default Button;