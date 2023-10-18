import Invite from 'public/Invite.svg'
import Purchase from 'public/Purchase.svg'
import Earn from 'public/Earn.svg'
import Steps from '@components/Landing/Steps'

const steps = [
  {
    id: 1,
    image: Invite,
    title: 'INVITE',
    description: 'Share Felicity to your family and friends and invite them',
  },
  {
    id: 2,
    image: Purchase,
    title: 'PURCHASE',
    description: 'Have your members subscribe and purchase',
  },
  {
    id: 3,
    image: Earn,
    title: 'EARN',
    description: 'Get up to 10% commission from their purchases',
  },
]

export default function EarnEffortlessly() {
  return <Steps steps={steps} header="Earn Effortlessly" />
}
