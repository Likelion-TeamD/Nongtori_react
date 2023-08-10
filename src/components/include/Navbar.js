import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Guest from '../Guest';
import Logo from '../img/Logo_farmerin.svg'; // 이미지 경로 설정


const Navbar = () => {
    return (
        <nav class="bg-[#FBFBFB] border-gray-200 shadow-lg">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4 w-[80%]">
                <Link to="/" class="flex items-center">
                    <img src={Logo} className="h-8 mr-3" alt="Flowbite Logo" />
                </Link>
                <div class="flex md:order-2">
                    <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search"
                        aria-expanded="false"
                        class="md:hidden text-gray-500  hover:bg-[#00A884]  focus:outline-none focus:ring-4 focus:ring-gray-200  rounded-lg text-sm p-2.5 mr-1">
                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                        <span class="sr-only">Search</span>
                    </button>
                    <div class="relative hidden md:block">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg class="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                            <span class="sr-only">Search icon</span>
                        </div>
                        <input type="text" id="search-navbar"
                            class="block w-full h-[36px] p-2 pl-10 text-sm text-gray-900 border border-none rounded-[16px] bg-[#EBEBEB] focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Search..."></input>
                    </div>
                    <button data-collapse-toggle="navbar-search" type="button"
                        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                        aria-controls="navbar-search" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
                <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
                    <div class="relative mt-3 md:hidden">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg class="w-4 h-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input type="text" id="search-navbar"
                            class="block w-full p-2 pl-10 text-sm text-gray-900  border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-50 "
                            placeholder="Search..."></input>
                    </div>
                    <ul class="flex flex-col p-4 md:p-0 mt-4 font-bold md:flex-row md:space-x-[75px] md:mt-0 md:border-0">
                        <li>
                            <Link to='/' id="home"
                                className="block py-2 pl-3 pr-4  bg-[#29A99A] rounded md:bg-transparent  md:p-0 hover:bg-transparent md:hover:bg-transparent md:hover:text-[#29A99A]">홈화면</Link>

                        </li>
                        <li>
                            <Link to='/sales' id="sale"
                                class="block py-2 pl-3 pr-4 rounded hover:bg-transparent md:hover:bg-transparent md:hover:text-[#29A99A] md:p-0">판매중인
                                상품</Link>
                        </li>
                        <li>
                            <Link to='/guest' id="guest"
                                class="block py-2 pl-3 pr-4 rounded hover:bg-transparent md:hover:bg-transparent md:hover:text-[#29A99A] md:p-0">
                                방명록</Link>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;