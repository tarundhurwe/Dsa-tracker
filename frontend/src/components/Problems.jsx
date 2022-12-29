import React, { lazy, Suspense } from 'react'
import Header from './Header'
import Footer from './Footer'

const ProblemList = lazy(() => import('./ProblemList').then(module => {
    return { default: module.ProblemList }
}))

export const Problems = () => {

    return (
        <>
            <Header />
            <Suspense>
                <ProblemList />
            </Suspense>
            <Footer />
        </>
    )
}
