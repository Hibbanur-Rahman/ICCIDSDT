import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Mail, Phone, Clock } from "lucide-react";
import { useEffect, useState } from "react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Fixed navbar that appears after scroll */}
      <div
        className={`fixed top-0 left-0 right-0 w-full bg-white shadow-lg transform transition-all duration-300 z-50 ${
          isScrolled
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-4">
          <div className="flex items-center">
            <span className="text-2xl font-bold">ICCIDSDT-2026</span>
          </div>

          <NavigationMenu>
            <NavigationMenuList className="hidden md:flex space-x-4">
              <NavigationMenuItem className="hover:bg-gray-100 py-2 rounded-lg px-4 cursor-pointer group">
                <p className="font-semibold cursor-pointer hover:text-blue-800 hover:bg-gray-100">
                  Home
                </p>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="p-4 w-[200px]">
                    <NavigationMenuLink className="block px-4 py-2 hover:bg-gray-100 rounded-md">
                      Manuu
                    </NavigationMenuLink>
                    <NavigationMenuLink className="block px-4 py-2 hover:bg-gray-100 rounded-md">
                      ICCIDSDT
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem className="hover:bg-gray-100 py-2 rounded-lg px-4 cursor-pointer group">
                <p className="font-semibold cursor-pointer hover:text-blue-800 ">
                  Commitee
                </p>
              </NavigationMenuItem>

              <NavigationMenuItem className="hover:bg-gray-100 py-2 rounded-lg px-4 cursor-pointer group">
                <p className="font-semibold cursor-pointer hover:text-blue-800 hover:bg-gray-100">
                  Important Dates
                </p>
              </NavigationMenuItem>

              <NavigationMenuItem className="hover:bg-gray-100 py-2 rounded-lg px-4 cursor-pointer group">
                <p className="font-semibold cursor-pointer hover:text-blue-800 hover:bg-gray-100">
                  Paper Submission
                </p>
              </NavigationMenuItem>

              <NavigationMenuItem className="hover:bg-gray-100 py-2 rounded-lg px-4 cursor-pointer group">
                <p className="font-semibold cursor-pointer hover:text-blue-800 hover:bg-gray-100">
                  Contact
                </p>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Button className="bg-blue-800 hover:bg-violet-800 text-white">
            Register Now
          </Button>
        </div>
      </div>

      {/* Original navbar */}
      <div className="w-full flex justify-center items-center bg-transparent">
        <div className="w-10/12 max-w-7xl border border-gray-200 shadow-xl rounded-2xl relative top-[20px] py-4 bg-white">
          {/* Top bar */}
          <div className="w-full bg-white py-2 px-4 border-b rounded-t-2xl">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>
                    Monday - Saturday: 7.00am - 19.00pm / Sunday: 8.30am -
                    19.30pm
                  </span>
                </div>
              </div>
              <div className="flex items-center space-x-6 text-sm">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>ICCIDSDT-2026@.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>(234) 345-4574</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main navbar */}
          <div className="w-full bg-white py-4 px-4  rounded-b-2xl">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
              {/* Logo */}
              <div className="flex items-center">
                <span className="text-2xl font-bold">ICCIDSDT-2026</span>
              </div>

              {/* Navigation */}
              <NavigationMenu className="relative">
                <NavigationMenuList className="hidden md:flex space-x-4">
                  <NavigationMenuItem className="hover:bg-gray-100 py-2 rounded-lg px-4 cursor-pointer group">
                    <p className="font-semibold cursor-pointer hover:text-blue-800 hover:bg-gray-100">
                      Home
                    </p>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="p-4 w-[200px]">
                        <NavigationMenuLink className="block px-4 py-2 hover:bg-gray-100 rounded-md">
                          Manuu
                        </NavigationMenuLink>
                        <NavigationMenuLink className="block px-4 py-2 hover:bg-gray-100 rounded-md">
                          ICCIDSDT
                        </NavigationMenuLink>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem className="hover:bg-gray-100 py-2 rounded-lg px-4 cursor-pointer group">
                    <p className="font-semibold cursor-pointer hover:text-blue-800 ">
                      Commitee
                    </p>
                  </NavigationMenuItem>

                  <NavigationMenuItem className="hover:bg-gray-100 py-2 rounded-lg px-4 cursor-pointer group">
                    <p className="font-semibold cursor-pointer hover:text-blue-800 hover:bg-gray-100">
                      Important Dates
                    </p>
                  </NavigationMenuItem>

                  <NavigationMenuItem className="hover:bg-gray-100 py-2 rounded-lg px-4 cursor-pointer group">
                    <p className="font-semibold cursor-pointer hover:text-blue-800 hover:bg-gray-100">
                      Paper Submission
                    </p>
                  </NavigationMenuItem>

                  <NavigationMenuItem className="hover:bg-gray-100 py-2 rounded-lg px-4 cursor-pointer group">
                    <p className="font-semibold cursor-pointer hover:text-blue-800 hover:bg-gray-100">
                      Contact
                    </p>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              {/* CTA Button */}
              <Button className="bg-blue-800 hover:bg-violet-800 text-white">
                Register Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
