import Link from "next/link";
import { FaApple, FaGooglePlay, FaYandexInternational } from "react-icons/fa";
import { GoMail } from "react-icons/go";

const Footer = () => {
  return (
    <div className="bg-white">
      <div className="max-w-screen-lg mx-auto">
        <div className="my-20">
          <p className="text-xl font-semibold mb-8 pt-20">Even easier in the app</p>
          <div className="flex gap-5">
            <div className="border rounded-md flex gap-4 items-center text-gray-500 px-4 py-1">
              <FaApple />
              <p>App Store</p>
            </div>
            <div className="border rounded-md flex gap-4 items-center text-gray-500 px-4 py-1">
              <FaGooglePlay /> <p>PLAY Store</p>
            </div>
          </div>
        </div>
        <hr />
        <div className="my-20 flex items-center justify-center">
          <div></div>
          <div>
            <p className="text-lg font-semibold text-gray-500 mb-8">Company information</p>
            <div className="flex gap-10 mb-8">
              <Link href="" className="text-sm text-gray-400">
                User agreement
              </Link>
              <Link href="" className="text-sm text-gray-400">
                Contacts
              </Link>
              <Link href="" className="text-sm text-gray-400">
                Contacts
              </Link>
              <Link href="" className="text-sm text-gray-400">
                Contacts
              </Link>
              <Link href="" className="text-sm text-gray-400">
                Become a partner
              </Link>
              <Link href="" className="text-sm text-gray-400">
                Become a courier
              </Link>
            </div>
            <div className="flex gap-10">
              <Link href="" className="text-sm text-gray-400">
                Eats for Business
              </Link>
              <Link href="" className="text-sm text-gray-400">
                Plastic recycling
              </Link>
              <Link href="" className="text-sm text-gray-400">
                Order food in the Yandex Go app
              </Link>
              <Link href="" className="flex items-center gap-2 text-sm text-gray-400">
                <GoMail />
                Feedback
              </Link>
            </div>
          </div>
        </div>
        <hr />
        <div>
          <div className="flex items-center justify-between py-12">
            <p className="text-sm text-gray-400">© 2018–2024 Yandex Eats LLC</p>
            <p className="text-sm text-gray-400 flex items-center">
              <span> Project for Yandex</span>
              <FaYandexInternational />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
