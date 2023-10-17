import Main from '@/components/main'
import Section from '@/components/section'

export default function Dashbord() {
  return (
    <div className="h-screen flex flex-col">
      <main className=" flex">
        <Main />
      </main>
      <section className=" flex flex-1 bg-gray">
        <Section />
      </section>
    </div>
  )
}
