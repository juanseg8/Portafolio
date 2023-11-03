import React from 'react'

function Proyectos() {
    return (

        <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">

            <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-8">

                <div class="group flex flex-col h-full bg-white border border-gray-200 shadow-lg rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7] mb-4">
                    <div class="h-52 flex flex-col justify-center items-center rounded-t-xl">
                        <img className='rounded-xl' src="./mytinerary.jpg" alt="" />
                    </div>
                    <div class="p-4 md:p-6">
                        <h3 class=" mt-3 text-xl font-semibold text-purple-600 dark:text-gray-300 dark:hover:text-white">
                            My Tinerary
                        </h3>
                        <p class="mt-3 ">
                            My Tinerary fue mi proyecto final individual para Desarrollador Full Stack MERN, es una pagina web reponsive en la cual puedes tener tu usuario y hacer itinerarios para distintas ciudades.
                        </p>
                        <ol className='mt-3'>
                            <li className='mt-3'>BackEnd: Node, Mongo, Express, Mongoose, JWT, Joi, Passport, entre otras.</li>
                            <li className='mt-3'>FrontEnd: HTML, CSS, JavaScript, Tailwind, React, Vite, Axios,  Redux, React Router, SweetAlert, entre otras.</li>
                        </ol>
                    </div>
                    <div class="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-gray-700 dark:divide-gray-700">
                        <a class="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-bl-xl font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm sm:p-4 dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800" href="https://github.com/juanseg8/mytinerary-guilisasti-be" target='_blank'>
                            BACK
                        </a>
                        <a class="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-br-xl font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm sm:p-4 dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800" href="https://github.com/juanseg8/mytinerary-guilisasti-fe" target='_blank'>
                            FRONT
                        </a>
                    </div>
                </div>



                <div class="group flex flex-col h-full bg-white border border-gray-200 shadow-lg rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7] mb-4">
                    <div class="h-52 flex flex-col justify-center items-center rounded-t-xl">
                        <img className='rounded-xl' src="./amazingevents.jpg" alt="" />
                    </div>
                    <div class="p-4 md:p-6">
                        <h3 class="mt-3 text-xl font-semibold text-purple-600 dark:text-gray-300 dark:hover:text-white">
                            Amazing Events
                        </h3>
                        <p class="mt-3">
                            Amazing Events fue mi proyecto final individual para Desarrollador Front End, es una pagina web responsive en la cual podes ver y filtrar distintos tipos de eventos.
                        </p>
                        <p className='mt-3'>FrontEnd: HTML, CSS, JavaScript y Bootstrap.</p>
                    </div>
                    <div class="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-gray-700 dark:divide-gray-700">
                        <a class="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-bl-xl font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm sm:p-4 dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800" href="https://github.com/juanseg8/Task-4-JS-Juan-Sebastian-Guilisasti" target='_blank'>
                            FRONT
                        </a>
                    </div>
                </div>

                <div class="group flex flex-col h-full bg-white border border-gray-200 shadow-lg rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7] mb-4">
                    <div class="h-52 flex flex-col justify-center items-center rounded-t-xl">
                        <img className='rounded-xl' src="./techbank.jpg" alt="" />
                    </div>
                    <div class="p-4 md:p-6">
                        <h3 class="mt-3 text-xl font-semibold text-purple-600 dark:text-gray-300 dark:hover:text-white">
                            TechBank
                        </h3>
                        <p class="mt-3">
                            TechBank fue mi proyecto final grupal para Desarrollador Full Satck Python, es un homebanking.
                        </p>
                        <ol className='mt-3'>
                            <li className='mt-3'>BackEnd: Python, SQLite, Django, entre otras.</li>
                            <li className='mt-3'>FrontEnd: HTML, CSS, JavaScript, Tailwind, React, Next, entre otras.</li>
                        </ol>
                    </div>
                    <div class="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-gray-700 dark:divide-gray-700">
                        <a class="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-bl-xl font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm sm:p-4 dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800" href="#">
                            Proximamente
                        </a>
                    </div>
                </div>

            </div>

        </div>

    )
}

export default Proyectos