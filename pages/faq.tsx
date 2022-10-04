import * as Accordion from '@components/FAQ/Accordion'
import * as Tabs from '@components/FAQ/Tabs'

import { useState } from 'react'
import { AnimateSharedLayout, motion } from 'framer-motion'

import { css } from '@config/stitches'

import View from '@components/View'
import Text from '@components/Text'
import Container from '@components/Container'

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
        <Text
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
        </Text>
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
                    <Accordion.Content>
                      {question.description}
                    </Accordion.Content>
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

const data = [
  {
    category: 'Transaction',
    questions: [
      {
        label: 'Can I cancel my order?',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut similique beatae incidunt corporis, alias dolor officia esse perferendis ratione nostrum!',
      },
      {
        label: 'Do I have to order in advance?',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut similique beatae incidunt corporis, alias dolor officia esse perferendis ratione nostrum!',
      },
      {
        label: 'How do I place an order?',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut similique beatae incidunt corporis, alias dolor officia esse perferendis ratione nostrum!',
      },
      {
        label: 'What is Felicity Coins?',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut similique beatae incidunt corporis, alias dolor officia esse perferendis ratione nostrum!',
      },
      {
        label: 'How Does Felicity Work?',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut similique beatae incidunt corporis, alias dolor officia esse perferendis ratione nostrum!',
      },
    ],
  },
  {
    category: 'General',
    questions: [
      {
        label: 'How Does Felicity Work?',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut similique beatae incidunt corporis, alias dolor officia esse perferendis ratione nostrum!',
      },
      {
        label: 'How do I place an order?',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut similique beatae incidunt corporis, alias dolor officia esse perferendis ratione nostrum!',
      },
      {
        label: 'Do I have to order in advance?',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut similique beatae incidunt corporis, alias dolor officia esse perferendis ratione nostrum!',
      },
      {
        label: 'Can I cancel my order?',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut similique beatae incidunt corporis, alias dolor officia esse perferendis ratione nostrum!',
      },
      {
        label: 'What is Felicity Coins?',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut similique beatae incidunt corporis, alias dolor officia esse perferendis ratione nostrum!',
      },
    ],
  },
  {
    category: 'Payments',
    questions: [
      {
        label: 'How do I place an order?',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut similique beatae incidunt corporis, alias dolor officia esse perferendis ratione nostrum!',
      },
      {
        label: 'How Does Felicity Work?',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut similique beatae incidunt corporis, alias dolor officia esse perferendis ratione nostrum!',
      },
      {
        label: 'Can I cancel my order?',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut similique beatae incidunt corporis, alias dolor officia esse perferendis ratione nostrum!',
      },
      {
        label: 'Do I have to order in advance?',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut similique beatae incidunt corporis, alias dolor officia esse perferendis ratione nostrum!',
      },
      {
        label: 'What is Felicity Coins?',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut similique beatae incidunt corporis, alias dolor officia esse perferendis ratione nostrum!',
      },
    ],
  },
]
