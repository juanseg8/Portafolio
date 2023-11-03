import React from 'react'
import Layout from '@/components/Layout'
import Habilidades from '@/components/Habilidades'

function habilidades() {
    return (
        <Layout>
            <p className='text-3xl text-center mt-14'>Mis Habilidades <span className='text-purple-600'>Profesionales</span></p>
            <Habilidades />
        </Layout>
    )
}

export default habilidades