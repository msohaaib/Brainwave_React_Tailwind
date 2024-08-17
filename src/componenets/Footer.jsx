import { socials } from "../constants"
import Section from "./Section"

function Footer() {
  return (
    <Section crosses className="!px-0 !py-10">
      <div className="container flex justify-center sm:justify-between items-center gap-10 max-sm:flex-col">
        <p className="caption text-n-4 lg:block">	&#169; {new Date().getFullYear()}. All right reserved</p>
        <ul className="flex gap-5 flex-wrap">
            {socials.map( (item) => (
              <a href={item.url} target="_blank" key={item.id}>
                <img src={item.iconUrl} width={16} height={16} alt={item.title} />
              </a>
            ) )}
        </ul>
      </div>
    </Section>
  )
}

export default Footer
