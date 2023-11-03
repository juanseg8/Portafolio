import React from 'react'
import Layout from '@/components/Layout'
import Proyectos from '@/components/Proyectos'

function proyectos() {
    return (
        <Layout>
            <p className='text-3xl text-center mt-14'>Mis ultimos <span className='text-purple-600'>Proyectos</span></p>
            <Proyectos/>
        </Layout>
    )
}

export default proyectos