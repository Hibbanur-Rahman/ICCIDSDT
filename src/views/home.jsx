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
} from "lucide-react";
import { VscLaw } from "react-icons/vsc";
const Home = () => {
  return (
    <div className="m-0 p-0 flex flex-col justify-center items-center">
      {/**hero section */}
      <div
        className=" h-[100vh] w-full mx-auto px-4 py-8  mt-[-180px] bg-cover flex justify-center items-center"
        style={{ backgroundImage: `url(${heroBgImg})` }}
      >
        <div className=" w-8/12">
          <h1 className="text-white text-5xl text-center font-semibold">
            International Conference on Computational Intelligence, Data
            Science, and Digital Transformations (ICCIDSDT-2026)
          </h1>
        </div>

        <div className="absolute flex flex-col items-center justify-center left-[-20px] bottom-[100px] h-[250px] w-[250px] bg-white rounded-full  animate-moveUp">
          <p className="text-5xl font-semibold">28-29 </p>
          <p className="text-3xl">FEBRUARY</p>
          <div className="border  rounded-xl  bg-blue-800 py-2 px-6 mt-4">
            <p className="text-white">Hybrid Mode</p>
          </div>
        </div>
      </div>

      {/**about manuu */}
      <section id='about-manuu' className="py-16 bg-white max-w-7xl">
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
    </div>
  );
};

export default Home;
