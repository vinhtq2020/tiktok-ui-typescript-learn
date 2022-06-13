import Header from "../components/Header";
import Sidebar from "./Sidebar";
type Props = {
    children: JSX.Element;
}
export const DefaultLayout = ({ children }: Props) => {
    return (
        <div>
            <Header />
            <div className="container">
                <Sidebar />
                <div className="content">{children}</div>
            </div>
        </div>
    )
}

export default DefaultLayout;