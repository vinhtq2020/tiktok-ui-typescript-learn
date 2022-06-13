import Header from "../components/Header";

type Props = {
    children?: React.ReactNode;
}
export const HeaderOnly = ({ children }:Props) => {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="content">{children}</div>
            </div>
        </div>
    )
}

export default HeaderOnly;