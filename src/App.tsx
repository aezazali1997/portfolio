import React, { Suspense, lazy } from 'react'
import { form } from './Services/formValidation';
const Home = lazy(() => import('@components/Home/Home'));
const AboutMe = lazy(() => import('@components/AboutMe/AboutMe'));
const ContactMe = lazy(() => import('@components/ContactMe/ContactMe'));
const Cursor = lazy(() => import('@components/Cursor/Cursor'));
const Navbar = lazy(() => import('@components/Navbar/Navbar'))
const Services = lazy(() => import('@components/Services/Services'));
import Loading from '@components/Loading/Loading';

const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Cursor />
      <Navbar />
      <Home />
      <Services />
      <AboutMe />
      <ContactMe form={form} />
    </Suspense>
  )
}

export default App
