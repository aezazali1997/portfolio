import React, { Suspense, lazy } from 'react'
import { form } from './Services/formValidation'
const Home = lazy(() => import('@components/Home/Home'));
const AboutMe = lazy(() => import('@components/AboutMe/AboutMe'))
const ContactMe = lazy(() => import('@components/ContactMe/ContactMe'))
const Cursor = lazy(() => import('@components/Cursor/Cursor'));
const Navbar = lazy(() => import('@components/Navbar/Navbar'))
const ScrollBar = lazy(() => import('@components/ScrollBar/ScrollBar'))
const Services = lazy(() => import('@components/Services/Services'))
const Projects = lazy(() => import('@components/Projects/Projects'))
/**
 * ! Do not make it lazy load
 * * This is a fallback it needs to be loaded immediatly
 **/
import Loading from '@components/Loading/Loading'

const App = () => (
  <Suspense fallback={<Loading />}>
    <ScrollBar>
      <Cursor />
      <Navbar />
      <Home />
      <Projects />
      <Services />
      <AboutMe />
      <ContactMe form={form} />
    </ScrollBar>
  </Suspense>
)

export default App
