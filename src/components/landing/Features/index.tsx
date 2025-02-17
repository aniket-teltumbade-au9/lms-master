import React from 'react'
import Section from '../Section'
import features from '@/utils/info/features'
import Card from './Card'

function Features() {
    return (
        <Section title='Key Features' >
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 gap-8 w-full md:px-10">
                {features.slice(0, 4).map((feature, index) => (
                    <Card key={index} {...feature} />
                ))}
            </div>
        </Section>
    )
}

export default Features