import FormIcon from '@/components/FormIcon'
import FormIdea from '@/components/FormIdea'
import React from 'react'

const GenerateIconPage = () => {
    return (
        <section className='relative' id='main'>
            <div className='max-w-7xl mx-auto px-6 md:px-12 xl:px-6'>
                <div className='relative pt-80 sm:pt-24 ml-auto flex justify-start items-center h-screen'>

                    <div className='lg:w-2/3 mx-auto'>
                        <h1>Lets generate your icon</h1>
                        {/* <FormIdea /> */}
                        <FormIcon />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GenerateIconPage