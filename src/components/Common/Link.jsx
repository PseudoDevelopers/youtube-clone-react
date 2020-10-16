import React from 'react'


class Link extends React.Component {
    state = {
        href: this.props.href,
        text: this.props.text,
        className: this.props.className,
        children: this.props.children
    }

    render() {
        const {
            href,
            text,
            className,
            children
        } = this.state

        return (
            <a
                style={href === '' ? { cursor: 'default' } : {}}
                href={href}
                className={className}
                onClick={href === '' ? e => e.preventDefault() : undefined}
            >
                {children}
                {text}
            </a>
        )
    }
}

export default Link


Link.defaultProps = {
    href: '',
    text: '',
    className: '',
    children: ''
}
