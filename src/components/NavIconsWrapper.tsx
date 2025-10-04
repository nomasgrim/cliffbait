"use client";
import dynamic from "next/dynamic";

const NavIconsWrapper = dynamic(()=>import('./NavIcons'), {ssr:false});

export default NavIconsWrapper;