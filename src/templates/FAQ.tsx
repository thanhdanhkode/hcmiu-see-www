import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

type FAQItem = {
  id: string
  question: string
  answer: string[] | string
}

export const FAQ = (props: { FAQ: FAQItem[] }) => {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full"
    >
      {props.FAQ.map((faq, index) => (
        <AccordionItem
          key={index}
          value={faq.id}
        >
          <AccordionTrigger>{faq.question}</AccordionTrigger>
          <AccordionContent>
            {Array.isArray(faq.answer) ? (
              faq.answer.map((answer, index) => <p key={index}>{answer}</p>)
            ) : (
              <p>{faq.answer}</p>
            )}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
