import {NikeLogo} from '../assets/logo'

export function Header() {
  return (
    <header className='flex justify-between items-center w-full max-w-[1440px] h-20 m-auto bg-red-100'>
      <NikeLogo />

    </header>
  )
}