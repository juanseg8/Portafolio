import React from 'react'

function Contacto() {
    return (
        <div class="mt-5 sm:mt-28 flex justify-center mr-20 ml-20 flex-col bg-white rounded-xl shadow-sm sm:flex-row dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
            <div class="w-full sm:w-2/5 relative rounded-t-xl sm:rounded-l-xl overflow-hidden pb-[60%] sm:max-w-[15rem] md:rounded-tr-none md:max-w-xs">
                <img src="./perfil.jpg" class="w-full absolute top-0 left-0 object-cover rounded-xl transform hover:scale-105 transition-transform duration-500 ease-in-out" alt="" />
            </div>
            <div class="p-4 sm:p-7">
                <h3 class="text-2xl font-bold text-gray-800 dark:text-white animate-pulse">
                    <span class="text-purple-600">Contactame!</span>
                </h3>
                <div class="mt-4 sm:mt-10">
                    <svg class="mt-1.5 mr-2" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                        <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                    </svg>
                    <a href="mailto:tuemail@example.com">jguilisasti503@gmail.com</a>
                </div>
                <div class="mt-4 sm:mt-10">
                    <svg class="mt-1.5 mr-2" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                        <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                    </svg>
                    <a href="tel:+543704253289">3704253289</a>
                </div>
                <div class="mt-4 sm:mt-10">
                    <svg class="mt-1.5 mr-2" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                        <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                    </svg>
                    <a href="https://www.linkedin.com/in/juan-sebastian-guilisasti-0a0618248/" target="_blank">Juan Sebastian Guilisasti</a>
                </div>
            </div>
        </div>
    )
}

export default Contacto