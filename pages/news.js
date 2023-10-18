import Head from 'next/head'
import Header from './header'
import Footer from './footer'

function News() {
  const newsItems = [
    {
      title: "About Dr. Gestson’s Impact in Phoenix Union",
      link: "https://www.the74million.org/article/innovative-high-schools-phoenix-union/",
      description: "Like every teacher, principal and superintendent, I’m worried about my students. The coronavirus pandemic has changed our lives in ways we never imagined..."
    },
    {
      title: "About Dr. Gestson’s Departure from Phoenix Union",
      link: "https://www.azcentral.com/story/opinion/op-ed/2023/03/30/phoenix-union-superintendent-chad-gestson-resigns-lead-education/70063433007/",
      description: "Dr. Chad Gestson has spent eight years as superintendent of Phoenix Union High School District and two-thirds of his professional life in the district..."
    },
    {
      title: "About Dr. Gestson’s Leadership",
      link: "https://www.the74million.org/article/gestson-my-arizona-school-district-contacts-every-student-every-day-to-check-on-families-physical-mental-emotional-health-yours-can-too/",
      description: "Yaritza Dominguez glanced at her car’s odometer, which was showing one of those numbers that sticks in a person’s memory..."
    },
    {
      title: "Interview with Dr. Chad Gestson",
      link: "https://50can.org/blog/distance-learning-with-chad-gestson-superintendent-of-phoenix-union-high-school-district/",
      description: "We’re honored today to speak with Dr. Chad Gestson, superintendent of Phoenix Union High School District, a public district in Arizona. Dr. Gestson and his team have emerged as some of the most innovative leaders in education in responding to the COVID-19 closures..."
    },
    {
      title: "Q&A With Dr. Chad Gestson",
      link: "https://www.edpost.com/stories/qa-with-dr-chad-gestson-phoenixs-covid-numbers-transformed-our-district-for-the-better",
      description: "Dr. Chad Gestson leads the Phoenix Union High School District, which educates 29,000 students in 22 schools from 32 different ZIP codes in Arizona’s capital city..."
    },
    {
      title: "Why the superintendent job is getting harder",
      link: "https://www.k12dive.com/news/school-superintendents-job-getting-harder/690495/",
      description: "In the eight years Chad Gestson led Arizona’s Phoenix Union High School District, from 2015 through June 2023, the country experienced two contentious presidential elections, a pandemic, heightened racial unrest..."
    }
  ];

  return (
    <div>
      <Head>
        <title>High Ground Leadership Group</title>
        <meta name="description" content="High Ground Leadership Group news" />
      </Head>
      <Header />
      <div className="container mx-auto p-2 mt-8">
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-2 pt-24 pb-48 px-0 md:px-4">
          {newsItems.map((item, index) => (
            <NewsCard key={index} {...item} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

function NewsCard({ title, link, description }) {
  return (
    <div className="max-w-xxlg rounded overflow-hidden shadow-lg my-4 mx-2 border border-solid border-black bg-white">
      <div className="px-8 py-4">
        <div className="float-right block text-yellow-700 m-2">08-28-2023</div>
        <a href={link} target="_blank" rel="noopener noreferrer" className="font-bold text-xl mb-2 text-gray-600 py-4">
          {title}
        </a>
        <p className="text-gray-700 text-base pt-8">
          {description}
        </p>
      </div>
    </div>
  );
}
export default News;