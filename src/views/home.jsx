import React, { useState, useEffect } from "react";
import {
  Building2,
  Calendar,
  FileText,
  Globe,
  GraduationCap,
  Mail,
  Phone,
  School,
  Send,
  Users,
  Shield,
  Cpu,
  Database,
  Atom,
  Rocket,
  Briefcase,
  BookOpen,
  CreditCard,
  Users2,
  Gavel,
  UserCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

const Home = () => {
  const [timeLeft, setTimeLeft] = useState({
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2026-01-15T00:00:00");

    const updateTimer = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      const months = Math.floor(difference / (1000 * 60 * 60 * 24 * 30));
      const days = Math.floor(
        (difference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)
      );
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ months, days, hours, minutes, seconds });
    };

    const timer = setInterval(updateTimer, 1000);
    return () => clearInterval(timer);
  }, []);

  const committees = {
    steeringCommittee: {
      title: "Steering Committee",
      members: [
        {
          role: "Chief Patron",
          name: "Prof. Syed Ainul Hasan",
          position: "Honourable Vice-Chancellor",
          institution: "Maulana Azad National Urdu University, Hyderabad",
        },
        {
          role: "Patron",
          name: "Prof. Sk. Ishtiaque Ahmed",
          position: "Registrar",
          institution: "Maulana Azad National Urdu University, Hyderabad",
        },
        {
          role: "Conference Chairman",
          name: "Prof. Abdul Wahid",
          position: "Dean, School of Technology",
          institution: "Maulana Azad National Urdu University, Hyderabad",
        },
        {
          role: "CONFERENCE DIRECTOR",
          name: "Prof. Pradeep Kumar",
          position: "Head Department Of CS & IT",
          institution: "Maulana Azad National Urdu University, Hyderabad",
        },
        {
          role: "CONFERENCE CONVENOR",
          name: "Mr. Mohatesham Pasha Quadri",
          position: "Department Of CS & IT",
          institution: "Maulana Azad National Urdu University, Hyderabad",
        },
      ],
    },
    advisoryBoard: {
      international: [
        "Prof. Akhtar Kalam, Victoria University, Melbourne, Australia",
        "Prof. Ayoub Al-Hamadi, University of Magdeburg, Germany",
        "Prof. Dato' Hasagaya Bin Abdullah, National Defence University of Malaysia",
        "Prof. Hammad Hasan, King Abdul Aziz University, Saudi Arabia",
        "Prof. Hanifa Shah, Birmingham City University, United Kingdom",
        "Prof. Hari Mohan Pandey, Edge Hill University, United Kingdom",
        "Prof. Minoru Kuribayashi, Okayama University, Japan",
        "Prof. Riyasat Ali, University of Houston, USA",
        "Prof. Syed Khalid Mustafa, University of Tabuk, Saudi Arabia",
      ],
      national: [
        "Prof. Abdul Quaiyum Ansari, Jamia Millia Islamia, New Delhi",
        "Prof. Daya Krishan Lobiyal, Jawaharlal Nehru University, New Delhi",
        "Dr. Kavita Bhatia, Ministry of Electronics and IT, Delhi",
        "Prof. Khurram Mustafa, Jamia Millia Islamia, New Delhi",
        "Prof. Kumar Molugaram, Osmania University, Hyderabad",
        "Prof. R.S. Nirjar, Former Chairman, AICTE, Delhi",
        "Prof. Raees Ahmad Khan, Babasaheb Bhimrao Ambedkar University",
        "Prof. Rajive Kumar, Member Secretary, AICTE, Delhi",
        "Dr. Santosh Pandey, Ministry of Electronics and IT",
        "Dr. Vivek Kumar Singh, NITI Ayog",
        "Prof. Yogesh Singh, Vice Chancellor, Delhi University",
      ],
    },
    technicalCommittee: {
      members: [
        {
          name: "Prof. Mohammad Amjad",
          institution: "Jamia Millia Islamia, New Delhi",
        },
        {
          name: "Prof. Tanvir Ahmad",
          institution: "Jamia Millia Islamia, New Delhi",
        },
        {
          name: "Prof. Bashir Alam",
          institution: "Jamia Millia Islamia, New Delhi",
        },
        {
          name: "Prof. Mansaf Alam",
          institution: "Jamia Millia Islamia, New Delhi",
        },
        {
          name: "Prof. Mohammad Zeeshan Ansari",
          institution: "Jamia Millia Islamia, New Delhi",
        },
        {
          name: "Prof. Mohd. Najmud Din",
          institution: "University of Kashmir, Srinagar",
        },
        {
          name: "Prof. Majid Zaman",
          institution: "University of Kashmir, Srinagar",
        },
        {
          name: "Prof. Zahoor Ahmad Najar",
          institution: "University of Kashmir, Srinagar",
        },
        {
          name: "Prof. Muheet Ahmed Butt",
          institution: "University of Kashmir, Srinagar",
        },
      ],
    },
    organizingCommittee: {
      members: [
        "Prof. Syed Imtiyaz Hassan, Department of CS & IT, MANUU",
        "Ms. Tunga Arundhathi, Department of CS & IT, MANUU",
        "Ms. Khaleda Afroaz, Department of CS & IT, MANUU",
        "Dr. Kahkashan Tabsssum, Department of CS & IT, MANUU",
        "Dr. A. Satya Sai Kumar, Department of CS & IT, MANUU",
        "Dr. Khaleel Ahmad, Department of CS & IT, MANUU",
        "Ms. Afrah Fathima, Department of CS & IT, MANUU",
        "Mr. Ahmad Talha Siddiqui, Department of CS & IT, MANUU",
        "Mr. Mohd. Omar, Department of CS & IT, MANUU",
        "Dr. Muqeem Ahmed, Department of CS & IT, MANUU",
        "Mr. Mohd. Rafeeq, Department of CS & IT, MANUU",
        "Mr. Mohammad Islam, Department of CS & IT, MANUU",
        "Dr. Jameel Ahamed, Department of CS & IT, MANUU",
        "Ms. Geeta Pattun, Department of CS & IT, MANUU",
        "Dr. Fareeha Rasheed, Department of CS & IT, MANUU",
        "Dr. Naiyar Iqbal, Department of CS & IT, MANUU",
        "Dr. Mohd Aslam, Department of CS & IT, MANUU",
        "Mr. Mohommad Rashid, Department of CS & IT, MANUU",
        "Mr. Kamran Siddique, Department of CS & IT, MANUU",
        "Mr. Md. Nadeem Noori, Department of CS & IT, MANUU",
        "Mr. Ahmad Raza, Department of CS & IT, MANUU",
        "Ms. Alisha Raza, Department of CS & IT, MANUU",
        "Ms. Syeda Imrana Fatima, Department of CS & IT, MANUU",
      ],
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-indigo-900 to-slate-900 md:mt-[-400px]">
      {/* Hero Section with Parallax Effect */}
      <div className="relative md:min-h-[1000px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070')] bg-cover bg-center opacity-10 transform scale-110"
          style={{ transform: "scale(1.1)" }}
        />
        <div className="relative z-10 container mx-auto px-4 text-center md:mt-[400px]">
          <div className="space-y-8">
            <div className="inline-block animate-fade-in">
              <span className="px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium border border-blue-500/20">
                January 15-16, 2026 • Hybrid Mode
              </span>
            </div>
            <h1 className="text-4xl md:text-7xl font-bold text-white leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                ICCIDSDT-2026
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-slate-300 max-w-4xl mx-auto">
              International Conference on Computational Intelligence, Data
              Science, and Digital Transformations
            </p>

            {/* Countdown Timer */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto mt-12">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div
                  key={unit}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 transform hover:scale-105 transition-transform"
                >
                  <div className="text-4xl font-bold text-white mb-2">
                    {value}
                  </div>
                  <div className="text-slate-400 text-sm uppercase tracking-wider">
                    {unit}
                  </div>
                </div>
              ))}
            </div>

            <Button className="mt-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-6 text-xl rounded-full transform hover:scale-105 transition-all shadow-lg hover:shadow-xl">
              Register Now
            </Button>
          </div>
        </div>

        {/* Animated scroll indicator */}
        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center p-2">
            <div className="w-1 h-3 bg-white/50 rounded-full" />
          </div>
        </div>
      </div>

      {/* About Sections */}
      <section className="py-20 pb-1 bg-gradient-to-b from-slate-900/50 to-slate-800/50 backdrop-blur-lg">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex md:flex-row flex-col gap-[20px] justify-center items-center">
            {/* About MANUU */}
            <Card className=" p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:transform hover:scale-[1.02] transition-all">
              <div className="flex items-center gap-3 mb-6">
                <School className="w-8 h-8 text-blue-400" />
                <h2 className="text-2xl font-bold text-white">
                  About the University
                </h2>
              </div>
              <p className="text-slate-300 leading-relaxed">
                Maulana Azad National Urdu University (MANUU) is a central
                university established by an Act of the Indian Parliament in
                1998, with all India Jurisdiction, to promote and impart
                research, vocational and technical education through regular and
                distance modes. The University has 7 Schools of Studies, 19
                departments, and 8 Colleges of Teacher Education, with an 'A+'
                grade from NAAC.
              </p>
            </Card>

            {/* About ICCIDSDT */}
            <Card className=" p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:transform hover:scale-[1.02] transition-all">
              <div className="flex items-center gap-3 mb-6">
                <Globe className="w-8 h-8 text-purple-400" />
                <h2 className="text-2xl font-bold text-white">
                  About ICCIDSDT - 2026
                </h2>
              </div>
              <p className="text-slate-300 leading-relaxed">
                The International Conference brings together researchers,
                academicians, and industry experts to discuss recent advances in
                Computational Intelligence, Data Science and Digital
                Transformations. It features paper presentations, keynote
                speeches, and interactive sessions, creating a collaborative
                platform for innovation.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Dates Section */}
      <section className="py-20 pb-1 bg-gradient-to-b from-slate-800/50 to-indigo-900/50 ">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Calendar className="w-8 h-8 text-blue-400" />
              <h2 className="text-3xl font-bold text-white">Important Dates</h2>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { date: "June 15, 2025", event: "Full Paper Submission" },
              { date: "September 1, 2025", event: "Acceptance Notification" },
              { date: "September 20, 2025", event: "Early Bird Registration" },
              { date: "October 15, 2025", event: "Camera Ready Paper" },
              { date: "October 20, 2025", event: "Late Registration" },
              { date: "January 15-16, 2026", event: "Conference Dates" },
            ].map((item, index) => (
              <Card
                key={index}
                className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:transform hover:scale-105 transition-all"
              >
                <p className="text-blue-400 font-semibold mb-2">{item.date}</p>
                <p className="text-white">{item.event}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tracks and Topics */}
      <section className="py-20 pb-1 bg-gradient-to-b from-indigo-900/50 to-slate-900/50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Cpu className="w-8 h-8 text-purple-400" />
              <h2 className="text-3xl font-bold text-white">
                Tracks and Topics
              </h2>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Advanced Network Technologies",
                topics: [
                  "Next Generation Networks",
                  "Cybersecurity",
                  "IoT Security",
                  "5G and Beyond",
                ],
              },
              {
                icon: Database,
                title: "Computational Intelligence",
                topics: [
                  "Deep Learning",
                  "Natural Language Processing",
                  "Reinforcement Learning",
                  "Edge AI",
                ],
              },
              {
                icon: Rocket,
                title: "Data Science & Analytics",
                topics: [
                  "Big Data Infrastructure",
                  "Data Visualization",
                  "Predictive Analytics",
                  "Real-time Processing",
                ],
              },
            ].map((track, index) => (
              <Card
                key={index}
                className="p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:transform hover:scale-105 transition-all"
              >
                <track.icon className="w-10 h-10 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">
                  {track.title}
                </h3>
                <ul className="space-y-2">
                  {track.topics.map((topic, i) => (
                    <li
                      key={i}
                      className="text-slate-300 flex items-center gap-2"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Fee Details */}
      <section className="py-20 pb-1 bg-gradient-to-b from-slate-900/50 to-indigo-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <CreditCard className="w-8 h-8 text-blue-400" />
              <h2 className="text-3xl font-bold text-white">
                Registration Fees
              </h2>
            </div>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="py-4 px-6 text-left text-white">
                        Category
                      </th>
                      <th className="py-4 px-6 text-left text-white">
                        Indian Participants (INR)
                      </th>
                      <th className="py-4 px-6 text-left text-white">
                        International (USD)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/5">
                      <td className="py-4 px-6 text-slate-300">Students</td>
                      <td className="py-4 px-6 text-slate-300">₹6,500</td>
                      <td className="py-4 px-6 text-slate-300">$250</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-4 px-6 text-slate-300">Academicians</td>
                      <td className="py-4 px-6 text-slate-300">₹7,500</td>
                      <td className="py-4 px-6 text-slate-300">$300</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-slate-300">
                        Industry Professionals
                      </td>
                      <td className="py-4 px-6 text-slate-300">₹8,500</td>
                      <td className="py-4 px-6 text-slate-300">$350</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Committee Sections */}
      <section className="py-10 pb-1  bg-gradient-to-b from-indigo-900/50 to-slate-900/50">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Steering Committee */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Users2 className="w-8 h-8 text-purple-400" />
                <h2 className="text-3xl font-bold text-white">
                  Steering Committee
                </h2>
              </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {committees.steeringCommittee.members.map((member, index) => (
                <Card
                  key={index}
                  className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:transform hover:scale-105 transition-all"
                >
                  <h4 className="text-blue-400 font-medium mb-2">
                    {member.role}
                  </h4>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="text-slate-300">{member.position}</p>
                  <p className="text-slate-400 text-sm">{member.institution}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
        {/* Advisory Board */}
        <div className="mb-16 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <UserCheck className="w-8 h-8 text-blue-400" />
              <h2 className="text-3xl font-bold text-white">Advisory Board</h2>
            </div>
          </div>
          <div className="space-y-8">
            {/* International Advisory Board */}
            <Card className="p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
              <h3 className="text-xl font-bold text-white mb-6">
                International Advisory Board
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {committees.advisoryBoard.international.map((member, index) => (
                  <div
                    key={index}
                    className="text-slate-300 flex items-center gap-2"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                    <span>{member}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* National Advisory Board */}
            <Card className="p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
              <h3 className="text-xl font-bold text-white mb-6">
                National Advisory Board
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {committees.advisoryBoard.national.map((member, index) => (
                  <div
                    key={index}
                    className="text-slate-300 flex items-center gap-2"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                    <span>{member}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>

        {/* Technical Committee */}
        <div className="mb-16 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Cpu className="w-8 h-8 text-purple-400" />
              <h2 className="text-3xl font-bold text-white">
                Technical Committee
              </h2>
            </div>
          </div>
          <Card className="p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {committees.technicalCommittee.members.map((member, index) => (
                <div
                  key={index}
                  className="p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg"
                >
                  <h4 className="text-white font-semibold mb-2">
                    {member.name}
                  </h4>
                  <p className="text-slate-400 text-sm">{member.institution}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Organizing Committee */}
        <div className="mb-16 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Users className="w-8 h-8 text-blue-400" />
              <h2 className="text-3xl font-bold text-white">
                Organizing Committee
              </h2>
            </div>
          </div>
          <Card className="p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {committees.organizingCommittee.members.map((member, index) => (
                <div
                  key={index}
                  className="text-slate-300 flex items-center gap-2"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                  <span>{member}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/**Paper submission */}

      <section
        id="paper-submission"
        className="py-20 pt-0 bg-gradient-to-b from-slate-900/50 to-indigo-900/50"
      >
        <div className="container  max-w-7xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-10">
            <Send className="w-8 h-8 text-blue-400" />
            <h2 className="text-3xl font-bold text-white">Paper Submission</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl h-min">
              <h3 className="text-xl font-bold mb-4 text-white">
                Requirements
              </h3>
              <div className="space-y-4">
                <p className="text-white">
                  Papers must use the format described in the templates below:
                </p>
                <div className="flex gap-4">
                  <Button variant="outline" className="flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    Word Template
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    PDF Template
                  </Button>
                </div>
                <p className="text-white">
                  Abstracts, of a maximum of 400 words, should be submitted to
                  the conference page.
                </p>
              </div>

              <div className="mt-6">
                <h4 className="font-bold text-lg mb-4 text-white">
                  Submission Procedure
                </h4>
                <ol className="list-decimal list-inside space-y-2 text-white">
                  <li className="text-white">
                    Register an account in the Conference Management Toolkit
                    (CMT) portal.
                  </li>
                  <li className="text-white">
                    Choose ICCIDST-2026 and submit your paper
                  </li>
                </ol>
              </div>
            </Card>

            <Card className="p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
              <h3 className="text-xl font-bold mb-4 text-white">
                Guidelines for camera ready submission
              </h3>
              <div className="space-y-4">
                <p className="text-white">
                  Please adhere to the following steps to prepare and submit
                  your camera-ready version by December 30, 2025.
                </p>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2 text-white">
                      Step 1: Revision
                    </h4>
                    <p className="text-white">
                      Please revise your paper according to the reviews. Take
                      all reviewer comments seriously when preparing your final
                      submission. Special care should be taken for clarity,
                      quality of English, and writing.
                    </p>
                    <div className="mt-2 bg-yellow-50 p-3 rounded-lg">
                      <p className="text-sm text-yellow-800">
                        Note: Papers containing plagiarism or similarity more
                        than 10% will not appear in the conference proceedings.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 text-white">Step 2: Formatting</h4>
                    <p className="text-white">
                      The camera-ready version should not exceed 12 pages.
                      Prepare your paper strictly following the new ICCIDSDT-2026
                      templates:
                    </p>
                    <div className="flex gap-4 mt-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex items-center gap-2"
                      >
                        <FileText className="w-4 h-4" />
                        Word Template
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex items-center gap-2"
                      >
                        <FileText className="w-4 h-4" />
                        PDF Template
                      </Button>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 text-white">
                      Step 3: Final Submission
                    </h4>
                    <p className="text-white">
                      Send the final version via email with:
                    </p>
                    <ul className="list-disc list-inside mt-2 space-y-1 text-white">
                      <li>Final PDF version (e.g., ICCIDSDT2026-paper-481.PDF)</li>
                      <li>ZIP file with source files or Word document</li>
                    </ul>
                    <div className="mt-4 bg-blue-50 p-4 rounded-lg">
                      <p className="font-semibold text-blue-900">
                        Submission Details:
                      </p>
                      <div className="mt-2 space-y-1 text-sm">
                        <p>
                          <span className="font-medium">Email:</span>{" "}
                          ICCIDSDT2026@gmail.com
                        </p>
                        <p>
                          <span className="font-medium">Subject Format:</span>{" "}
                          ICCIDSDT2026 Camera-Ready Submission [Paper ID]
                        </p>
                        <p>
                          <span className="font-medium">Example:</span> ICCIDSDT2026
                          Camera-Ready Submission 481
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="py-12 bg-slate-900/80 backdrop-blur-lg border-t border-white/10">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-white font-semibold mb-4">Contact Us</h3>
              <div className="space-y-3">
                <a
                  href="mailto:conference@manuu.edu.in"
                  className="text-slate-300 flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>conference@manuu.edu.in</span>
                </a>
                <div className="text-slate-300 flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+91 XXXXXXXXXX</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    Call for Papers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    Registration
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    Schedule
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Venue</h3>
              <address className="text-slate-300 not-italic">
                Department of CS & IT
                <br />
                Maulana Azad National Urdu University
                <br />
                Gachibowli, Hyderabad
                <br />
                Telangana, India
              </address>
            </div>
          </div>
          <Separator className="my-8 bg-white/10" />
          <div className="text-center text-slate-400">
            <p>&copy; 2024 ICCIDSDT. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
