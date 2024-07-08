'use client'

import { usePathname, useRouter } from 'next/navigation'

type Props = {
  href: string
  text: string
}

export default function Navlink({ href, text }: Props) {
  const pathname = usePathname()
  const router = useRouter()

  const handleClick = () => {
    router.push(href)
  }

  return (
    <label
      htmlFor="my-drawer-3"
      className={`${
        href === pathname && 'hidden'
      } text-center text-xl font-bold uppercase`}
      onClick={handleClick}
    >
      {text}
    </label>
  )
}
