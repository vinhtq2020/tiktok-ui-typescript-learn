import { HeaderOnly } from "components/Layout"
import Following from "pages/Following"
import Home from "pages/Home"
import Profile from "pages/Profile"
import Upload from "pages/Upload"
import React from "react"
type Props = {
    children?:React.ReactNode;
}
export interface route {
    path: string,
    layout?:((props:Props) => JSX.Element) | null,
    component: () => JSX.Element
}
const publicRoutes: Array<route> = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
    { path: '/upload', component: Upload, layout:HeaderOnly },
]

const privateRoutes: Array<route> = [

]

export { publicRoutes, privateRoutes }