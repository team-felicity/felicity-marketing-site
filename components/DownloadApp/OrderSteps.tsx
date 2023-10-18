import Click from 'public/Click.svg'
import Confirm from 'public/Confirm.svg'
import Collect from 'public/Collect.svg'
import Steps from '@components/Landing/Steps'

const steps = [
  {
    image: Click,
    title: 'CLICK',
    description: 'Browse through the app and simply click your favorite goods',
  },
  {
    image: Confirm,
    title: 'CONFIRM',
    description: 'Review your orders and check out of the cart',
  },
  {
    image: Collect,
    title: 'COLLECT',
    description: 'Get your order without having to leave your home',
  },
]

export default function OrderSteps() {
  return <Steps steps={steps} header="Order in 3 easy steps!" />
}
