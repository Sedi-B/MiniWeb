import React from 'react';
import Header from './Pages/Header';
import Home from './Pages/Home';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import Footer from './Pages/Footer';
 
 
const App = () => {
    return (
        <div className='bg-gray-100  min-h-[100vh] min-w-[100vw]'>
            <Header />
            <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <Home />
            <Services />
            <Contact />
            </div>
            <Footer />
        </div>
    )
}
 
export default App