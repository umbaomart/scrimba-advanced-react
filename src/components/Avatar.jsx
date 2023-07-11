import classNames from 'classnames';
import { IoPersonSharp } from 'react-icons/io5'

function Avatar(props) {
    const colors = ["navy","pink","red","blue","green",]
    let pickedColor = colors[Math.floor(Math.random() * colors.length)]

    function MyAvatar() {
        if (props.src) {
            return (
                <div className={'avatar'}>
                    <img src={props.src} alt={props.alt} />
                </div>
            )
        } else if (props.children) {
            return (
                <div className={'avatar avatar-letters ' + pickedColor}>
                    {props.children}
                </div>
            )
        } else {
            return (
                <div className={'avatar avatar-icon'}>
                    <IoPersonSharp />
                </div>
            )
        }
    }


    return (
        <MyAvatar />
    )
}

export default Avatar