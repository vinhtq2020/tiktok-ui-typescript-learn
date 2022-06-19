import { Header } from "../components";

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
