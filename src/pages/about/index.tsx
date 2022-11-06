import { NextPage } from 'next'
import dynamic from 'next/dynamic'

const AboutPage = dynamic(() => import('templates/About'))

const About: NextPage = () => <AboutPage />

export default About
