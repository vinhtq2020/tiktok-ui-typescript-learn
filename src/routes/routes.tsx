
import React from "react"
import { HeaderOnly } from "../layout/HeaderOnly";
import { Search } from "../layout/components/Search";
import Following from "../pages/Following";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Upload from "../pages/Upload";
import { Live } from "../pages/Live";
interface Props {
    children?: React.ReactNode;
}
export interface route {
    path: string,
    layout?: (({children}:Props) => JSX.Element) | null,
    component: () => JSX.Element;
}
export const routesConfig = {
    home: '/',
    following: '/following',
    profile: '/@:nickname',
    upload: '/upload',
    search: '/search',
    live:'/live',
}

const publicRoutes: Array<route> = [
    { path: routesConfig.home, component: Home },
    { path: routesConfig.following, component: Following },
    { path: routesConfig.profile, component: Profile },
    { path: routesConfig.live, component: Live },
    { path: routesConfig.search, component: Search, layout: null },
    { path: routesConfig.upload, component: Upload, layout: HeaderOnly }
]

const privateRoutes: Array<route> = [

]

export { publicRoutes, privateRoutes }