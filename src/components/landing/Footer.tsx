import { footerInfo } from "../../utils/info/footer";

// Type Guard to check if a section has 'icons'
const hasIcons = (section: string): section is "Follow Us" => section === "Follow Us";

// Type Guard to check if a section exists in footerInfo
const isValidSection = (key: string): key is keyof typeof footerInfo => key in footerInfo;

function Footer() {
  return (
    <div className="w-full sm:px-2 md:px-20 py-12">
      <div className="grid md:grid-cols-4 sm:grid-cols-1 sm:gap-y-12 sm:px-8 md:px-[28px]">
        {Object.keys(footerInfo).map((section) => (
          <div key={section} className="flex flex-col gap-3">
            {/* Section Title */}
            <div className="font-bold text-lg">{section}</div>

            {/* Section Content */}
            <div className="flex flex-col gap-2">
              {isValidSection(section) && Array.isArray(footerInfo[section]) ? (
                footerInfo[section].map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    {"Icon" in item && <item.Icon className="text-xl" />}
                    <span>{item.text}</span>
                  </div>
                ))
              ) : (
                hasIcons(section) && (
                  <div className="flex gap-4">
                    {footerInfo[section].icons.map((Icon, index) => (
                      <Icon key={index} className="text-2xl hover:text-gray-400 transition" />
                    ))}
                  </div>
                )
              )}
            </div>
          </div>
        ))}
      </div>
      <hr className="my-6 md:mx-8 md:mt-12 md:pb-8" />
      <div className="text-center">© 2025 Unicode. All rights reserved.</div>
    </div>
  );
}

export default Footer;
