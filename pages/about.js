import Head from 'next/head'
import Header from './header'
import Footer from './footer'

function About() {
  return (
    <div>
      <Head>
        <title>High Ground Leadershi Group</title>
        <meta name="description" content="Description of my page" />
      </Head>
      <Header />
      <div className="mx-auto max-w-3xl py-12 px-6 mt-8">
        <div className="text-center">
          <div className="text-black text-3xl w-full pb-12 pt-24 text-center b-black uppercase">High Ground Leadership Group President</div>
          <p className="mt-2 text-sm text-left md:text-lg leading-8 text-gray-600">
            Dr. Chad Gestson serves as the founding Executive Director of the Arizona Institute for
            Education and the Economy, a collective impact group with a mission of cultivating
            solutions that drive educational and economic equity and prosperity in Arizona. He also
            serves as the Special Advisor to the President on K-12 Initiatives at Northern Arizona
            University.
            <br></br><br></br>
            Gestson spent 22 years in K-12 education, most recently as Superintendent of
            Arizona’s largest high school district, Phoenix Union High School District (PXU), from
            2015-2023.  Under his leadership, PXU became one of America’s most recognized
            school districts. The District launched several new schools, including a Gifted and
            Talented Academy, a Digital Academy, and the Phoenix Coding Academy. Phoenix
            Union also launched a new school concept never before seen in America – PXU City, a
            school that uses the city, not a campus, as the classroom. In fall of 2023, Phoenix Union
            launched the 24th school in its portfolio, Phoenix Educator Preparatory, a school
            designed to produce future teachers, counselors, social workers, and psychologists. In

            addition, PXU also launched the Phoenix Engagement Center, founded to dramatically
            reduce the number of opportunity or disconnected youth in Phoenix.
            <br></br><br></br>
            In the fall of 2022, Gestson was named Arizona’s 73rd Man of the Year by Valley
            Leadership. In 2021, Gestson was named the Arizona Policymaker of the Year by the
            Arizona Health Association and the Arizona Superintendent of the Year by the Arizona
            Association for Public Relations.
            <br></br><br></br>
            Gestson is an alum of The Broad Academy at Yale’s School of Management. He is also
            a member of the Chiefs for Change Board of Directors, a Stanford Hoover Education
            Success Initiative council member, an American School District Panel member, a
            member of the Board of Directors of Accelerate, and a member of the Carnegie
            Foundation’s Learning Leadership Network. In 2019, he published his first book,
            BEFORE Teaching and Learning, a turnaround guide for school leaders.
            <br></br><br></br>
            Prior serving as Superintendent, Gestson was the district’s Director of Leadership and
            spent five years as the principal of Camelback High School, where he launched the first
            and only Montessori high school in Arizona. Before joining Phoenix Union in 2009,
            Gestson served as an elementary school assistant principal and as a middle school
            principal.  A product of Teach For America, he began his teaching career in 2001.  Prior
            to his public education career, Gestson was a commercial construction superintendent
            in Seattle, WA.
            <br></br><br></br>
            Gestson holds a B.A. in English from the University of Washington, an M.Ed. in
            Curriculum and Instruction from Arizona State University, and an M.Ed. in Educational
            Leadership from Northern Arizona University. In 2009, he completed his Ed.D. in
            Educational Leadership from Northern Arizona University where he was named the
            Outstanding Doctoral Student of the Year.
            <br></br><br></br>
            Gestson was a 2013-2014 Arizona Rodel Exemplary Principal, one of only seven in the
            state that year and only the second high school principal selected since the inception of
            the program. In 2011, Gestson won Arizona State University's Lead and Inspire Award
            for his efforts in turning around Camelback High School. He also won the same award
            as a middle school principal at Carl T. Smith Middle School in 2008.
            <br></br><br></br>
            Gestson serves on numerous local boards and councils including the United Way and
            the Carver Museum. He recently served as the president of his church’s board of
            directors. He and his wife, Megan, currently the Executive Director for Leadership and
            Learning in the Roosevelt School District, founded and run Sponsors For Scholars
            (@SFStoCollege), a non-profit organization that supports first generation high school
            and college scholars on their journey to and through college. They have two children,
            Olivia and Andrew, ages 19 and 16, respectively, and reside in Phoenix.
          </p>
          <div className="text-black text-3xl w-full pb-12 pt-48 text-center b-black uppercase">High Ground Leadership Group Services</div>
          <p className="mt-2 mb-48 text-sm text-left md:text-lg leading-8 text-gray-600">
            Customized keynote addresses on leadership, values, continuous improvement, and
            other customized topics upon request.
            Customized CEO, superintendent, principal, and leadership trainings for individuals,
            teams, and large groups on leadership, values, and continuous improvement.
            Trainings on the BEFORE Teaching and Learning framework, a framework that Dr.
            Gestson outlines in his book, BEFORE Teaching and Learning: A Principal’s Playbook
            for Year One and Beyond. Copies of his book can be purchased on www.Amazon.com.
            Individual and team coaching for school, systems, and business leaders.
            Support with strategy, planning, communications, and advocacy.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
