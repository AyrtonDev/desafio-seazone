import Image from "next/image"

export const Logo = () => {
  return (
    <div className="relative w-14 h-14 sm:w-32 sm:h-16">
      <Image alt="logo" src="/logo.png" fill sizes="(max-wifth: 640px) 112px 128px" style={{ objectFit: 'contain' }} priority/>
    </div>
  )
}