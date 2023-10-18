import Head from 'next/head'
import Header from './header'
import Footer from './footer'

export default function Home() {
  return (
    <div className="bg-white">
      <Head>
        <title>High Ground Leadership Group</title>
        <meta name="description" content="High Ground Leadership Group home page" />
      </Head>
      <Header />
      <div className="relative isolate mt-24">
        <div className="relative overflow-hidden h-[200px] md:h-[350px] lg:h-[500px]">
          <img
            className="absolute w-full top-[-30px] md:top-[-70px] lg:top-[-100px] left-0 object-cover object-left-top"
            src="/students.webp"
            alt="Dr.Gestson with students"
          />
        </div>


        <div className="mx-auto max-w-3xl py-12 px-6 m-12">
          <div className="text-center">
            <div className="text-black text-3xl w-full pb-12 pt-12 text-center b-black">Transforming Outcomes through Enhanced Leadership, Strategy, and Advocacy</div>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Founded by <a href="https://www.linkedin.com/in/chad-gestson-512735102" target="_blank" className="font-semibold text-yellow-600 hover:text-yellow-700">Dr. Chad Gestson</a>,
              High Ground Leadership Group (HGLG) is a coaching and consulting group focused on helping individuals, teams,
              and education, non-profit, and for-profit organizations improve practices, strategy, and ultimately outcomes.
              HGLG provides fully customizable coaching, strategic planning, leadership development, communications strategy, and keynote services.
            </p>
          </div>

          <div className="mb-8 flex justify-center my-8">
            <div className="inline text-lg text-center relative rounded-full px-3 py-1 text-sm leading-8 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              All inquiries may be directed to
              <a href="mailto:HighGroundLeadGroup@gmail.com" className="font-semibold text-yellow-600">
                <span className="absolute inset-0" aria-hidden="true" /> HighGroundLeadGroup@gmail.com <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
