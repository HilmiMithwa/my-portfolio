"use client";

import React, { useState } from "react";
import Image from 'next/image';
import logo from "../public/logo.png"

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState("Home");

  const menuItems = [
    {
      name: "Home",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
          <path d="M0 0h24v24H0z" fill="none" />
          <path fill="#ffefef" d="M4 21V9l8-6l8 6v12h-6v-7h-4v7z" />
        </svg>
      ),
    },
    {
      name: "About Me",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
          <path d="M0 0h24v24H0z" fill="none" />
          <g fill="none" stroke="#ffefef" strokeWidth="1.5">
            <path strokeLinejoin="round" d="M4 18a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z" />
            <circle cx="12" cy="7" r="3" />
          </g>
        </svg>
      ),
    },
    {
      name: "Experience",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
          <path d="M0 0h24v24H0z" fill="none" />
          <path fill="#ffefef" d="M4.825 12.025L8.7 15.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275l-4.6-4.6q-.15-.15-.213-.325T2.426 12t.063-.375t.212-.325l4.6-4.6q.3-.3.713-.3t.712.3t.3.713t-.3.712zm14.35-.05L15.3 8.1q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.6 4.6q.15.15.213.325t.062.375t-.062.375t-.213.325l-4.6 4.6q-.3.3-.7.288t-.7-.313t-.3-.712t.3-.713z" />
        </svg>
      ),
    },
    {
      name: "Certificate",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16">
          <path d="M0 0h16v16H0z" fill="none" />
          <path fill="#ffefef" d="M3 2h10c1.103 0 2 .897 2 2v6c0 1.103-.897 2-2 2H6.62A3.97 3.97 0 0 0 8 9a3.97 3.97 0 0 0-1.38-3h4.88a.5.5 0 0 0 0-1H4a3.97 3.97 0 0 0-3 1.38V4c0-1.103.897-2 2-2m6.5 7h2a.5.5 0 0 0 0-1h-2a.5.5 0 0 0 0 1M4 12a3 3 0 1 0 0-6a3 3 0 0 0 0 6m-2 2.5v-2.057a3.96 3.96 0 0 0 2 .556c.732 0 1.409-.212 2-.556v2.056a.5.5 0 0 1-.264.441a.5.5 0 0 1-.513-.024L4 14.1l-1.223.815A.497.497 0 0 1 2 14.5" />
        </svg>
      ),
    },
    {
      name: "Project",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
          <path d="M0 0h24v24H0z" fill="none" />
          <path fill="#ffefef" fillRule="evenodd" d="M16.868 1.02c.28-.048.568-.009.824.115l4.53 2.191c.475.23.778.715.778 1.247v14.855c0 .53-.303 1.014-.778 1.245l-4.53 2.19a1.35 1.35 0 0 1-1.562-.268l-8.672-7.95l-3.777 2.882a.915.915 0 0 1-1.17-.053L1.3 16.366a.93.93 0 0 1 0-1.362L4.574 12L1.3 8.995a.924.924 0 0 1 0-1.36l1.213-1.11a.916.916 0 0 1 1.169-.053l3.777 2.883l8.672-7.95c.2-.202.458-.337.738-.385M10.924 12l6.58 5.018v-.303H17.5V8.857h.003V6.98z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      name: "Tech Stack",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
          <path d="M0 0h24v24H0z" fill="none" />
          <path fill="#ffefef" d="m20.083 10.5l1.202.721a.5.5 0 0 1 0 .858L12 17.649l-9.285-5.57a.5.5 0 0 1 0-.858l1.202-.721L12 15.35zm0 4.7l1.202.721a.5.5 0 0 1 0 .858l-8.77 5.262a1 1 0 0 1-1.03 0l-8.77-5.262a.5.5 0 0 1 0-.858l1.202-.721L12 20.05zM12.514 1.309l8.771 5.262a.5.5 0 0 1 0 .858L12 12.999L2.715 7.43a.5.5 0 0 1 0-.858l8.77-5.262a1 1 0 0 1 1.03 0" />
        </svg>
      ),
    },
  ];

  return (
    <div className="font-poppins text-[25px] w-[217px] fixed left-10 top-1/2 -translate-y-1/2">
      <nav>
        <Image src={logo} alt="logo" className="mb-[50px]" />
        <ul className="flex flex-col gap-[26px]">
          {menuItems.map((item) => (
            <li
              key={item.name}
              className={` rounded-[15px] w-[217px] h-[52px]  flex gap-[13px] items-center hover:bg-secondary cursor-pointer transition-colors duration-200 ${activeMenu === item.name ? "bg-secondary" : ""
                }`}
              onClick={() => setActiveMenu(item.name)}
            >
              {item.icon}
              <a>{item.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
