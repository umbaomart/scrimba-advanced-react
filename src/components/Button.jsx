import React from 'react'
import { ThemeContext } from '../App'

export default function Button() {
    const {theme} = React.useContext(ThemeContext)

    return (
        <button className={`${theme}-theme`}>
            Switch Theme
        </button>
    )
}

// import classnames from "classnames"

// export default function Button({ children, className, size, variant, ...rest }) {
//     let sizeClass = size && `button-${size}`
//     let variantClass = variant && `button-${variant}`
//     const allClasses = classnames(sizeClass, variantClass, className)

//     return (
//         <button className={allClasses} {...rest}>
//             {children}
//         </button>
//     )
// }