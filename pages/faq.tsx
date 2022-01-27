import * as Accordion from '@components/FAQ/Accordion'
import * as Tabs from '@components/FAQ/Tabs'

import { useState } from 'react'
import { AnimateSharedLayout, motion } from 'framer-motion'

import { css } from '@config/stitches'

import { Text, Container, View } from '@components'

export default function FAQsPage() {
  const [currentTab, setCurrentTab] = useState(data[0].category)

  return (
    <Container size="large" css={{ py: '5vw' }}>
      <View css={{ mb: '$8' }}>
        <Text
          as="h1"
          size={{ '@initial': '8', '@tablet': '10' }}
          color="primary4"
          weight="bold"
          css={{ textAlign: 'center', mb: '$4' }}
        >
          Frequently Asked Questions
        </Text>
        {/* <Text
          as="p"
          weight="light"
          size={{ '@initial': '3', '@tablet': '4' }}
          css={{ textAlign: 'center' }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          consequuntur totam cum minima, dolore dolorum omnis. Fugiat dolore
          architecto recusandae inventore minus odit a ullam. Vel odio iste
          reiciendis, repudiandae autem incidunt alias repellat odit ducimus,
          placeat dignissimos!
        </Text> */}
      </View>

      <View>
        <Tabs.Root
          defaultValue={data[0].category}
          orientation="horizontal"
          value={currentTab}
          onValueChange={(value) => setCurrentTab(value)}
        >
          <AnimateSharedLayout>
            <Tabs.List aria-label="Frequently Asked Questions">
              {data.map((tab) => (
                <Tabs.Trigger value={tab.category} key={tab.category}>
                  {currentTab === tab.category && (
                    <motion.div
                      layoutId="currentTab"
                      initial={false}
                      transition={{
                        type: 'spring',
                        stiffness: 500,
                        damping: 30,
                      }}
                      className={tabUnderline()}
                    />
                  )}

                  {tab.category}
                </Tabs.Trigger>
              ))}
            </Tabs.List>
          </AnimateSharedLayout>
          {data.map((tab) => (
            <Tabs.Content value={tab.category} key={tab.category}>
              <Accordion.Root type="single" collapsible>
                {tab.questions.map((question, index) => (
                  <Accordion.Item value={question.label} key={index}>
                    <Accordion.Trigger>{question.label}</Accordion.Trigger>

                      {
                        typeof question.description === 'string' ? 
                    <Accordion.Content>
                      {question.description}
                    </Accordion.Content>
: 
question.description.map(desc => (
                    <Accordion.Content key={desc}>
                      {question.description}
                    </Accordion.Content>

))

                      }
                  </Accordion.Item>
                ))}
              </Accordion.Root>
            </Tabs.Content>
          ))}
        </Tabs.Root>
      </View>
    </Container>
  )
}

const tabUnderline = css({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  height: 1,
  backgroundColor: '$primary4',
})

const data: Array<{
  category: string
  questions: Array<{
    label: string
    description: string | string[]
  }>
}> = [
  {
    category: 'Membership',
    questions: [
      {
        label: 'How to become a member?',
        description: [
"Step 1: Sign up by filling in the Registration Form",
'Step 2: Present a valid ID to verify your identity (3-day verification period)',
'Step 3: Choose a subscription plan that suits you best',
'Step 4: Get your free BDO card 3 days after request submission (only for Citizens and higher)',
'Step 5: Enjoy your shopping!'
        ]
      },
      {
        label: 'How can I earn from this system?',
        description:
          'It’s easy! Simply share your delightful experience in Felicity and have other people experience the same way! Invite people to join Felicity and earn at most 10% in every member’s product purchase. Note that earnings can only be given to individuals who purchase Felicity products monthly. In this way, we can make sure that everyone lives happily and healthily.',
      },
      {
        label: 'Can I be a member even without recruiting?',
        description:
          'Absolutely! The recruitment system exists to help people achieve their financial goals. If you don’t see the need to do such, then you’re still very welcome to be our member and shopper at any level.',
      },
      {
        label: 'What’s the best membership type for me?',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut similique beatae incidunt corporis, alias dolor officia esse perferendis ratione nostrum!',
      },
      {
        label: 'What can I get from being a member?',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut similique beatae incidunt corporis, alias dolor officia esse perferendis ratione nostrum!',
      },
    ],
  },
  {
    category: 'Purchase',
    questions: [
      {
        label: 'How and where can I buy the products?',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut similique beatae incidunt corporis, alias dolor officia esse perferendis ratione nostrum!',
      },
      {
        label: 'What are the payment options available?',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut similique beatae incidunt corporis, alias dolor officia esse perferendis ratione nostrum!',
      },
      {
        label: 'Is the shop open 24/7?',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut similique beatae incidunt corporis, alias dolor officia esse perferendis ratione nostrum!',
      },
      {
        label: 'Is there a physical store where I can shop?',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut similique beatae incidunt corporis, alias dolor officia esse perferendis ratione nostrum!',
      },
      {
        label: 'Is there a minimum purchase per transaction?',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut similique beatae incidunt corporis, alias dolor officia esse perferendis ratione nostrum!',
      },
    ],
  },
  {
    category: 'Delivery',
    questions: [
      {
        label: 'What are the delivery options available?',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut similique beatae incidunt corporis, alias dolor officia esse perferendis ratione nostrum!',
      },
      {
        label: 'Do you deliver nationwide?',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut similique beatae incidunt corporis, alias dolor officia esse perferendis ratione nostrum!',
      },
      {
        label: 'Do you deliver anytime and anywhere in the city?',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut similique beatae incidunt corporis, alias dolor officia esse perferendis ratione nostrum!',
      },
      {
        label: 'How much is the delivery fee?',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut similique beatae incidunt corporis, alias dolor officia esse perferendis ratione nostrum!',
      },
      {
        label: 'How can I check my order delivery status?',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut similique beatae incidunt corporis, alias dolor officia esse perferendis ratione nostrum!',
      },
    ],
  },
]
