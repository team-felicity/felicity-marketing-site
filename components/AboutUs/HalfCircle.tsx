interface Props {
  fill: string
}

export default function HalfCircle({ fill }: Props) {
  return (
    <svg
      width="current"
      height="current"
      viewBox="0 0 295 573"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M294.5 573C131.852 573 0 447.148 0 284.5C0 121.852 131.852 0 294.5 0V573Z"
        fill={fill}
      />
    </svg>
  )
}
