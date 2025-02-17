import React from 'react'
import Section from '../Section'
import programs from '@/utils/info/programs'
import Card from './Card'

function Programs() {
    return (
        <Section title='Academic Programs' >
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-8 w-full px-2 md:px-8">
                {programs.slice(0, 3).map((program, index) => (
                    <Card key={index} {...program} />
                ))}
            </div>
        </Section>
    )
}

export default Programs