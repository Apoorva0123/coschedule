import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as TiIcons from "react-icons/ti";
import * as SiIcons from "react-icons/si";
export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },
    {
        title: 'Calendar',
        path: '/calendar',
        icon: <AiIcons.AiOutlineCalendar/>,
        cName: 'nav-text'
    },
    {
        title: 'Requeue',
        path: '/requeue',
        icon: <TiIcons.TiArrowShuffle/>,
        cName: 'nav-text'
    },
    {
        title: 'Analytics',
        path: '/analytics',
        icon: <SiIcons.SiSimpleanalytics/>,
        cName: 'nav-text'
    },
]