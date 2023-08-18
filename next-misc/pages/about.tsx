import Head from 'next/head'
import Footer from '&/layout/Footer'
import type { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'

function About() {
    return (<><Head><title>About nextjs</title><meta name='description' content='nextjs tutorials'></meta></Head><h1 className='content'>About</h1></>)
}

export default About

About.getLayout = function getLayout(page:ReactElement) {
    return (<>{page}<Footer /></>)
}