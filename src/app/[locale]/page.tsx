import { Header } from '@/features/Landing/Header'
import { Section } from '@/features/Landing/Section'
import { FAQ } from '@/templates/FAQ'

export default function () {
  return (
    <>
      <Header />
      {/* <Section>
        <FAQ
          FAQ={[
            {
              id: 'question-1',
              question: 'What is your return policy?',
              answer: 'Our return policy is 30 days no questions asked.',
            },
            {
              id: 'question-2',
              question: 'What is your shipping policy?',
              answer: ['We offer free shipping on all orders over $50.', 'Standard shipping takes 5-7 business days.'],
            },
            {
              id: 'question-3',
              question: 'What is your return policy?',
              answer: 'Our return policy is 30 days no questions asked.',
            },
          ]}
        />
      </Section> */}
    </>
  )
}
