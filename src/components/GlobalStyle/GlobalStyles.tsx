import './GlobalStyles.scss'
type Props = {
    children?: JSX.Element;
}

function GlobalStyles({ children }: Props) {
    if (children)
        return (children)
    else {
        return <></>
    }
}

export default GlobalStyles;