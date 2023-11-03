import React from 'react'


function DownloadButton() {
    return (
        <div className='flex justify-center mt-8'>
            <a href='./CV.pdf' download="CV Juan Sebastian Guilisasti">
                <button type="button" class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border-2 border-purple-200 font-semibold text-purple-500 hover:text-white hover:bg-purple-500 hover:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
                    Descargar CV
                </button>
            </a>
        </div>

    )
}

export default DownloadButton