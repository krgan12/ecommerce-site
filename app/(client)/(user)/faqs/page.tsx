import Container from '@/components/Container'
import Title from '@/components/Title'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'
import { faqsData } from '@/constants'
import React from 'react'

function FAQPage() {
  return (
    <Container className='max-w-4xl sm:px-6 lg:px-8 py-12'>
        {/* <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1> */}
        <Title className="text-3xl font-bold mb-6">Frequently Asked Questions</Title>
        <Accordion type='single' collapsible className='w-full' defaultValue='item-0'>
          {faqsData?.map((question, index) => (
            <AccordionItem key={index} value={`item-${index}`} className='group'>
              <AccordionTrigger className='text-left text-lg font-semibold text-darkColor/80 group-hover:text-darkColor hover:no-underline hoverEffect'>
                {question?.question}
              </AccordionTrigger>
              <AccordionContent className='text-gray-600'>
                {question?.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
    </Container>
  )
}

export default FAQPage