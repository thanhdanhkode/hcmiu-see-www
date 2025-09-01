import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue, SelectLabel } from './ui/select'
import Image from 'next/image'

export const LanguageSwitcher = () => {
  return (
    <Select defaultValue="vi">
      <SelectTrigger className="w-auto [&>svg]:hidden px-2">
        <SelectValue />
      </SelectTrigger>
      <SelectContent className="w-fit min-w-0">
        <SelectGroup>
          <SelectLabel>Ngôn ngữ</SelectLabel>
          <SelectItem value="vi">
            <div className="flex justify-center items-center">
              <Image
                src={'/assets/VietnamFlag.png'}
                alt="Vi"
                width={32}
                height={21}
              />
            </div>
          </SelectItem>
          <SelectItem value="en">
            <div className="flex justify-center items-center">
              <Image
                src={'/assets/USAFlag.png'}
                alt="USA"
                width={32}
                height={17}
              />
            </div>
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
