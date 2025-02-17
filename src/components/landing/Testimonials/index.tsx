import React from 'react'
import Card from './Card'
import testimonials from '@/utils/info/stories'
import Section from '../Section'

function Testimonials() {
    return (
        <Section title='Success Stories' >
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8 w-full px-2 md:px-8">
                {testimonials.slice(0, 2).map((testimonial, index) => (
                    <Card key={index} {...testimonial} index={index} />
                ))}
            </div>
        </Section>
    )
}

export default Testimonials