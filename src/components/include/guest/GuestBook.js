import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import IconMessage from '../../img/MessageIcon.svg'
import AxiosTest from './AxiosTest';
import ChatBox from './ChatBox';
import ChatItem from './ChatItem';


const GuestBook = () => {
    return (
        // <!-- 방명록 -->
        <section className="relative w-full h-[85%] rounded-[20px] shadow-lg bg-[#FAFAFA]">
            {/* <!-- 전체 영역 padding 적용 --> */}
            <main className="px-6 py-5">
                {/* 상단 text 영역 */}
                <article className='flex items-center mb-3'>
                    <img className='h-[1.1rem] w-[1.1rem] mr-[6px]' src={IconMessage} alt='logo' />
                    <p className="font-bold text-xl">방명록</p>
                </article>

                {/* 중반부 박스 */}
                <div className='h-[29rem] overflow-y-scroll bg-slate-400'>
                    <ChatItem />
                </div>


            </main>
            {/* 하단부 input */}
            <div className='h-fit w-full bottom-0 mb-7 absolute pl-6 pr-4 py-5 justify-center items-center bg-slate-700'>
                <AxiosTest />
            </div>
        </section>
    )
}

export default GuestBook;