const Button = ({title, className, url, icon}) => {
    return (
        <a className={className} href={url} target="__blank"> <i className={icon}></i> {title}</a>
    )
}

export default Button
