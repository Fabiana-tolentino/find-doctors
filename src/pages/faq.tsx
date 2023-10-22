import { HeaderFaq } from '@/components/faq/headerFaq'
import LinkFaq from '@/components/faq/linkFaq'
import { TableFaq } from '@/components/table/tableFaq'
import Input from '@/components/ui/input'
import { CiFilter } from 'react-icons/ci'
import { Link } from 'react-router-dom'

export default function Faq() {
  return (
    <div>
      <h1>FAQ (Perguntas frequentes)</h1>
      <div className="flex items-center gap-4"></div>

      <LinkFaq
        url={'/faq/contractors'}
        title={'Contratantes'}
        action={<CiFilter />}
        bg1={''}
        bg2={''}
        textColor={''}
        font={''}
      />
    </div>
  )
}
