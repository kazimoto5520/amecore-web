import Link from 'next/link';
import { cn } from '@/lib/utils';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  MapPin,
  Mail,
  Phone
} from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        {/* Main footer content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-6 border-b border-gray-700 pb-2">About Us</h3>
            <p className="text-gray-400 mb-6">
              <strong className="text-primary-400">Amecore Technologies Co. Ltd</strong> will help you take advantage of our wide range of Services, leverage data and Analytics to really know your business, protect your systems with the latest in Security solutions, replace or maintain your Devices, or explore your options for Connectivity.
            </p>
            {/* Social media */}
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-600 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-xl font-bold mb-6 border-b border-gray-700 pb-2">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services/digital-financial-solutions" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Digital Solutions
                </Link>
              </li>
              <li>
                <Link href="/services/cyber-security" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Cybersecurity
                </Link>
              </li>
              <li>
                <Link href="/services/erp-services" className="text-gray-400 hover:text-primary-400 transition-colors">
                  ERP Service
                </Link>
              </li>
              <li>
                <Link href="/services/customizable-banking-solutions" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Customizable Banking Solutions
                </Link>
              </li>
              <li>
                <Link href="/services/digital-banking-applications" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Online Banking, Mobile Banking
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 border-b border-gray-700 pb-2">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-primary-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/services/backup-and-recovery" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Backup and Recovery
                </Link>
              </li>
              <li>
                <Link href="/services/erp-services" className="text-gray-400 hover:text-primary-400 transition-colors">
                  ERP
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-6 border-b border-gray-700 pb-2">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 text-primary-400 mt-0.5" />
                <span className="text-gray-400">123 Tech Street, Dar es Salaam, Tanzania</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 h-5 w-5 text-primary-400" />
                <span className="text-gray-400">+255 123 456 789</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 h-5 w-5 text-primary-400" />
                <a href="mailto:info@amecore.co.tz" className="text-gray-400 hover:text-primary-400 transition-colors">
                  info@amecore.co.tz
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-gray-950 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500">
              &copy; {currentYear} Amecore Technologies. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                <li>
                  <Link href="/privacy-policy" className="text-gray-500 hover:text-primary-400 transition-colors text-sm">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms-of-service" className="text-gray-500 hover:text-primary-400 transition-colors text-sm">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/sitemap" className="text-gray-500 hover:text-primary-400 transition-colors text-sm">
                    Sitemap
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}