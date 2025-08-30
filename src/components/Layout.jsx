import React from 'react'
import Header from './Header';
import Footer from './Footer';

    const Layout = ({children}) => {
    return (
        <div className='h-svh w-full dark:bg-(--dark-background-primary) bg-(--light-background-primary)'>
            <Header />
            <main className='pt-40'>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout
