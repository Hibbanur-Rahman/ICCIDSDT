import React from "react";
import heroBgImg from "@/assets/images/hero-bg-img-1.jpg";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

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
import { VscLaw } from "react-icons/vsc";

const Home = () => {
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
  };

  return (
    <div className="m-0 p-0 flex flex-col justify-center items-center">
      {/** Hero Section */}
      <div
        className="h-[100vh] w-full mx-auto px-4 py-8 mt-[-180px] bg-cover flex justify-center items-center"
        style={{ backgroundImage: `url(${heroBgImg})` }}
      >
        <div className="w-8/12">
          <h1 className="text-white text-5xl text-center font-semibold">
            International Conference on Computational Intelligence, Data
            Science, and Digital Transformations (ICCIDSDT-2026)
          </h1>
        </div>

        <div className="absolute flex flex-col items-center justify-center left-[-20px] bottom-[100px] h-[250px] w-[250px] bg-white rounded-full animate-moveUp">
          <p className="text-5xl font-semibold">15-16 </p>
          <p className="text-3xl">JANUARY</p>
          <div className="border rounded-xl bg-blue-800 py-2 px-6 mt-4">
            <p className="text-white">Hybrid Mode</p>
          </div>
        </div>
      </div>

      {/** About MANUU Section */}
      <section id="about-manuu" className="py-16 bg-white max-w-7xl">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-2 mb-8">
            <School className="w-8 h-8 text-blue-900" />
            <h2 className="text-3xl font-bold text-center">
              About the University
            </h2>
          </div>
          <Card className="p-6">
            <p className="text-gray-700 leading-relaxed">
              Maulana Azad National Urdu University (MANUU) is a central
              university established by an Act of the Indian Parliament in the
              year 1998, with all India Jurisdiction, to promote and impart
              research, vocational and technical education through regular and
              distance modes. It is situated in the IT hub of the ever-active
              city of Hyderabad. The University has 7 Schools of Studies, 19
              departments, and 8 Colleges of Teacher Education. It also has five
              polytechnics, two satellite campuses, 14 centres and directorates
              for education and research. By acknowledging the efforts of the
              university in research and education, National Assessment and
              Accreditation Council (NAAC), has awarded an 'A+' grade to the
              University.
            </p>
          </Card>
        </div>
      </section>

      {/** About ICCIDSDT - 2026 Section */}
      <section id="about-iccidstd" className="py-16 bg-gray-50 max-w-7xl">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-2 mb-8">
            <Globe className="w-8 h-8 text-blue-900" />
            <h2 className="text-3xl font-bold text-center">
              About ICCIDSDT - 2026
            </h2>
          </div>
          <Card className="p-6">
            <p className="text-gray-700 leading-relaxed">
              The International Conference on Computational Intelligence, Data
              Science and Digital Transformations (ICCIDSDT-2026) is set to take
              place on January 15th & 16th, 2026. The conference will bring
              together researchers, academicians, and industry experts to
              discuss recent advances in Computational Intelligence, Data
              Science and Digital Transformations, and related fields. It will
              feature paper presentations, keynote speeches, and interactive
              sessions, creating a collaborative platform for the academic and
              professional community to explore recent innovations, research
              findings, and practical applications in the areas of computational
              intelligence and data analytics.
            </p>
          </Card>
        </div>
      </section>

      {/** Key Dates Section */}
      <section id="key-dates" className="py-16 bg-white max-w-7xl">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-2 mb-8">
            <Calendar className="w-8 h-8 text-blue-900" />
            <h2 className="text-3xl font-bold text-center">Key Dates</h2>
          </div>
          <Card className="p-6">
            <ul className="text-gray-700 leading-relaxed list-disc list-inside">
              <li>Full paper submission: 15th June 2025</li>
              <li>
                Notification of Acceptance / Rejection: 1st September 2025
              </li>
              <li>Final Notification: 20th September 2025</li>
              <li>Camera Ready Paper: 15th October 2025</li>
              <li>Early Bird Registration: 20th September 2025</li>
              <li>Later Registration: 20th October 2025</li>
            </ul>
          </Card>
        </div>
      </section>

      {/** About Department of CS & IT Section */}
      <section id="about-cs-it" className="py-16 bg-gray-50 max-w-7xl">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-2 mb-8">
            <GraduationCap className="w-8 h-8 text-blue-900" />
            <h2 className="text-3xl font-bold text-center">
              About Department of CS & IT
            </h2>
          </div>
          <Card className="p-6">
            <p className="text-gray-700 leading-relaxed">
              The Department of Computer Science and Information Technology
              provides an excellent learning environment with dedicated young
              faculty members, state-of-the-art laboratories, and innovative
              academic processes. We focus on providing in-depth knowledge in
              the fields of Artificial Intelligence, Personalized Learning,
              Machine Learning, Computational Sustainability, Blockchain
              Technology, the Semantic Web, the Internet of Things (IoT), and
              other elite fields of computer science & IT. We aspire for our
              students to become next-generation IT professionals capable of
              generating programming and logical skills, providing networking
              solutions, and becoming leaders in the software industry,
              government, and academia.
            </p>
          </Card>
        </div>
      </section>

      {/** Tracks and Topics Section */}
      <section id="tracks-topics" className="py-16 bg-white max-w-7xl">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-2 mb-8">
            <Cpu className="w-8 h-8 text-blue-900" />
            <h2 className="text-3xl font-bold text-center">
              Tracks and Topics
            </h2>
          </div>
          <Card className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/** Track 1 */}
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  01 Advanced Network Technologies and Cybersecurity
                </h3>
                <ul className="text-gray-700 leading-relaxed list-disc list-inside">
                  <li>Next Generation Network Architectures</li>
                  <li>Cybersecurity Threats and Mitigation Strategies</li>
                  <li>Cryptography and Data Protection</li>
                  <li>Network Monitoring and Management</li>
                  <li>IoT Security</li>
                  <li>Blockchain for Network Security</li>
                  <li>5G and Beyond</li>
                  <li>Secure Network Protocols</li>
                </ul>
              </div>

              {/** Track 2 */}
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  02 Computational Intelligence and Machine Learning
                </h3>
                <ul className="text-gray-700 leading-relaxed list-disc list-inside">
                  <li>Deep Learning and Neural Networks</li>
                  <li>Evolutionary and Swarm Intelligence</li>
                  <li>Natural Language Processing</li>
                  <li>Reinforcement Learning</li>
                  <li>Explainable AI and Ethical Considerations</li>
                  <li>Federated Learning</li>
                  <li>Edge AI</li>
                  <li>Transfer Learning, Image Processing</li>
                </ul>
              </div>

              {/** Track 3 */}
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  03 Data Science, Big Data, and Analytics
                </h3>
                <ul className="text-gray-700 leading-relaxed list-disc list-inside">
                  <li>Big Data Infrastructure and Technologies</li>
                  <li>Data Visualization and Interpretation</li>
                  <li>Predictive and Prescriptive Analytics</li>
                  <li>Data Governance and Quality</li>
                  <li>Applications in Industry</li>
                  <li>Data Privacy and Security in Big Data</li>
                  <li>Realtime Data Processing</li>
                  <li>Data Lakes and Warehouses</li>
                </ul>
              </div>

              {/** Add more tracks similarly */}
            </div>
          </Card>
        </div>
      </section>

      {/** Fee Details Section */}
      <section id="fee-details" className="py-16 bg-gray-50 max-w-7xl">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-2 mb-8">
            <CreditCard className="w-8 h-8 text-blue-900" />
            <h2 className="text-3xl font-bold text-center">Fee Details</h2>
          </div>
          <Card className="p-6">
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead>
                  <tr>
                    <th className="py-2 px-4 border-b">Category</th>
                    <th className="py-2 px-4 border-b">
                      Indian Participants (INR)
                    </th>
                    <th className="py-2 px-4 border-b">
                      International Participants (USD)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b">Student</td>
                    <td className="py-2 px-4 border-b">Rs. 6500</td>
                    <td className="py-2 px-4 border-b">USD 250</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">Student</td>
                    <td className="py-2 px-4 border-b">Rs. 7500</td>
                    <td className="py-2 px-4 border-b">USD 300</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">
                      Industry Professionals
                    </td>
                    <td className="py-2 px-4 border-b">Rs. 8500</td>
                    <td className="py-2 px-4 border-b">USD 200</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </section>

      {/** Advisory Board Section */}
      <section id="advisory-board" className="py-16 bg-white max-w-7xl">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-2 mb-8">
            <UserCheck className="w-8 h-8 text-blue-900" />
            <h2 className="text-3xl font-bold text-center">Advisory Board</h2>
          </div>
          <Card className="p-6">
            <ul className="text-gray-700 leading-relaxed list-disc list-inside">
              <li>
                Abdul Quaiyum Ansari, Ph.D., Jamia Millia Islamia, New Delhi,
                India
              </li>
              <li>
                Akhtar Kalam, Ph.D., Victoria University, Melbourne, Australia
              </li>
              <li>Ayoub Al-Hamadi, Ph.D., University of Magdeburg, Germany</li>
              <li>
                Dato’ Hasagaya Bin Abdullah, Ph.D., National Defence University
                of Malaysia, Malaysia
              </li>
              <li>
                Daya Krishan Lobiyal, Ph.D., Jawaharlal Nehru University, New
                Delhi, India
              </li>
              <li>
                Hammad Hasan, Ph.D., King Abdul Aziz University, Saudi Arabia
              </li>
              <li>
                Hanifa Shah, Ph.D., Birmingham City University, United Kingdom
              </li>
              <li>
                Hari Mohan Pandey, Ph.D., Edge Hill University, United Kingdom
              </li>
              <li>
                Kavita Bhatia, Ph.D., Ministry of Electronics and Information
                Technology, Delhi, India
              </li>
              <li>
                Khurram Mustafa, Ph.D., Jamia Millia Islamia, New Delhi, India
              </li>
              <li>
                Kumar Molugaram, Ph.D., Osmania University, Hyderabad, India
              </li>
              <li>Minoru Kuribayashi, Ph.D., Okayama University, Japan</li>
              <li>
                R.S. Nirjar, Ph.D., Former Chairman, All India Council for
                Technical Education, Delhi, India
              </li>
              <li>
                Raees Ahmad Khan, Ph.D., Babasaheb Bhimrao Ambedkar University,
                Lucknow, India
              </li>
              <li>
                Rajive Kumar, Ph.D., Member Secretary, All India Council for
                Technical Education, Delhi, India
              </li>
              <li>Riyasat Ali, Ph.D., University of Houston, Houston</li>
              <li>
                Santosh Pandey, Ph.D., Ministry of Electronics and Information
                Technology, India
              </li>
              <li>
                Syed Khalid Mustafa, Ph.D., University of Tabuk, Saudi Arabia
              </li>
              <li>Vivek Kumar Singh, Ph.D., NITI Ayog, India</li>
              <li>
                Yogesh Singh, Ph.D., Vice Chancellor, Delhi University, India
              </li>
            </ul>
          </Card>
        </div>
      </section>

      {/** Organising Committee Section */}
      <section id="organising-committee" className="py-16 bg-gray-50 max-w-7xl">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-2 mb-8">
            <Users2 className="w-8 h-8 text-blue-900" />
            <h2 className="text-3xl font-bold text-center">
              Organising Committee
            </h2>
          </div>
          <Card className="p-6">
            <ul className="text-gray-700 leading-relaxed list-disc list-inside">
              <li>
                Prof. Syed Imtiyaz Hassan, Department of CS & IT, MANUU,
                Hyderabad
              </li>
              <li>
                Ms. Tunga Arundhathi, Department of CS & IT, MANUU, Hyderabad
              </li>
              <li>
                Ms. Khaleda Afroaz, Department of CS & IT, MANUU, Hyderabad
              </li>
              <li>
                Dr. Kahkashan Tabsssum, Department of CS & IT, MANUU, Hyderabad
              </li>
              <li>
                Dr. A. Satya Sai Kumar, Department of CS & IT, MANUU, Hyderabad
              </li>
              <li>
                Dr. Khaleel Ahmad, Department of CS & IT, MANUU, Hyderabad
              </li>
              <li>
                Ms. Afrah Fathima, Department of CS & IT, MANUU, Hyderabad
              </li>
              <li>
                Mr. Ahmad Talha Siddiqui, Department of CS & IT, MANUU,
                Hyderabad
              </li>
              <li>Mr. Mohd. Omar, Department of CS & IT, MANUU, Hyderabad</li>
              <li>Dr. Muqeem Ahmed, Department of CS & IT, MANUU, Hyderabad</li>
              <li>Mr. Mohd. Rafeeq, Department of CS & IT, MANUU, Hyderabad</li>
              <li>
                Mr. Mohammad Islam, Department of CS & IT, MANUU, Hyderabad
              </li>
              <li>
                Dr. Jameel Ahamed, Department of CS & IT, MANUU, Hyderabad
              </li>
              <li>Ms. Geeta Pattun, Department of CS & IT, MANUU, Hyderabad</li>
              <li>
                Dr. Fareeha Rasheed, Department of CS & IT, MANUU, Hyderabad
              </li>
              <li>Dr. Naiyar Iqbal, Department of CS & IT, MANUU, Hyderabad</li>
              <li>Dr. Mohd Aslam, Department of CS & IT, MANUU, Hyderabad</li>
              <li>
                Mr. Mohommad Rashid, Department of CS & IT, MANUU, Hyderabad
              </li>
              <li>
                Mr. Kamran Siddique, Department of CS & IT, MANUU, Hyderabad
              </li>
              <li>
                Mr. Md. Nadeem Noori, Department of CS & IT, MANUU, Hyderabad
              </li>
              <li>Mr. Ahmad Raza, Department of CS & IT, MANUU, Hyderabad</li>
              <li>Ms. Alisha Raza, Department of CS & IT, MANUU, Hyderabad</li>
              <li>
                Ms. Syeda Imrana Fatima, Department of CS & IT, MANUU, Hyderabad
              </li>
            </ul>
          </Card>
        </div>
      </section>
      {/** Steering Committee Section */}
      <section id="organising-committee" className="py-16 bg-gray-50 max-w-7xl">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-2 mb-8">
            <Users2 className="w-8 h-8 text-blue-900" />
            <h2 className="text-3xl font-bold text-center">
              Steering Committee
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {committees.steeringCommittee.members.map((member, index) => (
              <Card key={index} className="p-6">
                <h4 className="text-lg font-semibold text-blue-800">
                  {member.role}
                </h4>
                <h5 className="text-xl font-bold mt-2">{member.name}</h5>
                <p className="text-gray-600 mt-1">{member.position}</p>
                <p className="text-gray-500 text-sm mt-1">
                  {member.institution}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
