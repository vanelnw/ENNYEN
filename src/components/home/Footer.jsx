import Container from '../../components/common/Container';
import {
  BiLogoFacebookCircle,
  BiLogoTiktok,
  BiLogoTwitter,
} from 'react-icons/bi';
import { AiFillLinkedin } from 'react-icons/ai';

const footerData = [
  {
    title: 'What we do',
    links: [
      {
        text: 'Clean Energy Consultation',
        href: '#',
      },
      {
        text: 'Solar costing & Estimatation',
        href: '#',
      },
      {
        text: 'Solar design, installation and support',
        href: '#',
      },
      {
        text: 'ENNYEN Marketplace',
        href: '#',
      },
    ],
  },
  {
    title: 'Get support',
    links: [
      {
        text: 'Help Centre',
        href: '#',
      },
      {
        text: 'Live chat',
        href: '#',
      },
      {
        text: 'Refunds',
        href: '#',
      },
      {
        text: 'Chek order status',
        href: '#',
      },
    ],
  },
  {
    title: 'Source on ENNYEN',
    links: [
      {
        text: 'Request for Quotation',
        href: '#',
      },
      {
        text: 'Membership program',
        href: '#',
      },
      {
        text: 'Logistics by ENNYEN',
        href: '#',
      },
      {
        text: 'Sales taxes',
        href: '#',
      },
      {
        text: 'Our blog',
        href: '#',
      },
    ],
  },
  {
    title: 'ENNYEN Marketplace',
    links: [
      {
        text: 'Start selling',
        href: '#',
      },
      {
        text: 'Seller central',
        href: '#',
      },
      {
        text: 'Become a verified supplier',
        href: '#',
      },
      {
        text: 'Discover our services',
        href: '#',
      },
    ],
  },
  {
    title: 'Unveiling Our identity',
    links: [
      {
        text: 'About ENNYEN',
        href: '#',
      },
      {
        text: 'Corporate Responsibility',
        href: '#',
      },
      {
        text: 'News center',
        href: '#',
      },
      {
        text: 'Careers',
        href: '#',
      },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-blue-900">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <Container>
          <div className=" mx-auto mt-8 grid grid-cols-2 gap-8 lg:mt-0 lg:grid-cols-5 lg:gap-y-16">
            {footerData.map(section => (
              <div key={section.title}>
                <p className="text-white">{section.title}</p>

                <ul className="mt-6 space-y-2 text-[.8rem] ">
                  {section.links.map(link => (
                    <li key={link.text}>
                      <a href={link.href} className="text-white opacity-[.4]">
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <ul className="col-span-2 flex justify-start items-center gap-6 lg:col-span-5 lg:justify-end">
              <li className="text-white text-[.7rem]">Follow us:</li>
              <li>
                <a
                  href="/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-white transition hover:opacity-75">
                  <span className="sr-only">Facebook</span>
                  <BiLogoFacebookCircle />
                </a>
              </li>

              <li>
                <a
                  href="/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-white transition hover:opacity-75">
                  <span className="sr-only">Linkedin</span>
                  <AiFillLinkedin />
                </a>
              </li>

              <li>
                <a
                  href="/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-white transition hover:opacity-75">
                  <span className="sr-only">Tiktok</span>
                  <BiLogoTiktok />
                </a>
              </li>

              <li>
                <a
                  href="/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-white transition hover:opacity-75">
                  <span className="sr-only">Twitter</span>
                  <BiLogoTwitter />
                </a>
              </li>
            </ul>
          </div>
        </Container>
        <div className="mt-8 border-t border-yellow-500 pt-8">
          <div className="sm:flex sm:justify-between text-white">
            <p className="text-xs">
              Policy | Protection | Privacy |Terms | Compliance
            </p>
            <p className="text-xs">
              © 2023-2024 ENNYEN LLC. All rights reserved.
            </p>
          </div>
        </div>
        <p className="text-[.6rem] mt-5 text-center text-white opacity-[.4]">
          ENNYEN LCC is registered US business with R.C and Tax ... ENNYEN
          MarketPlace; owned & managed by ENNYENN LLC & Partner is a marketplace
          App to assist solar product producers in meeting potential customers
          and also ease customers’ search for solar products and services within
          the United States of America.
          <br />
          <br />
          Ennyen ensures sellers on its platform are registered & legal
          businesses ... Cases of fraud & illegal activities should be reported
          immediate here
        </p>
      </div>
    </footer>
  );
};
export default Footer;
