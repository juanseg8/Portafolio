import Layout from '@/components/Layout'
import React from 'react'
import DownloadButton from '@/components/DownloadButton'

export default function index() {
  return (
    <Layout>
      <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-20'>
        <div className='pl-10 pr-10'>
          <h2 className='text-4xl'>
            <span className="typed-text">Bienvenido a mi portafolio!</span>
          </h2>
          <p className='pt-8 text-justify'>
            Buenas, me presento, soy Juan Sebastian Guilisasti, tengo 22 años y soy de Corrientes. Soy desarrollor full stack junior que constantemente busca crecer y poner en practica lo aprendido.
          </p>
          <p className='pt-8 text-justify'>
            Tambien me interesa la gestion de equipos de desarollo por lo cual realice cursos de Agile Coach y Project Manager.
          </p>

          <p className='pt-8'>
            Aca les dejo un breve resumen de mi historial academico:
          </p>
          <DownloadButton />
        </div>

        <div className='flex justify-center items-center'>
          <img className='w-90 h-80' src="https://lautarotiamat.github.io/static/media/about.aee0f771.png" alt="about" class="img-fluid"></img>
        </div>
      </div>
    </Layout>
  )
}
