import Image from "next/image"

export const Logo = () => {
  return (
    <div className="relative w-14 h-14 sm:w-32 sm:h-16">
      <Image alt="logo" src="/logo.png" fill sizes="(max-width: 640px) 112px 128px" style={{ objectFit: 'contain' }} priority/>
    </div>
  )
}

export const LogoMain = () => {
  return (
    <div className="relative w-14 h-14 sm:w-60 sm:h-60 rounded-2xl">
      <Image alt="logo" src="/logo-main.png" fill sizes="(max-width: 640px) 300px 300px" style={{ objectFit: 'contain' }} priority className="rounded-2xl"/>
    </div>
  )
}