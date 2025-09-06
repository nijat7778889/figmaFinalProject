const Footer = () => {
  const footerSections = [
    {
      title: "COMPANY",
      links: ["About", "Features", "Works", "Career"]
    },
    {
      title: "HELP", 
      links: ["Customer Support", "Delivery Details", "Terms & Conditions", "Privacy Policy"]
    },
    {
      title: "FAQ",
      links: ["Account", "Manage Deliveries", "Orders", "Payments"]
    },
    {
      title: "RESOURCES",
      links: ["Free eBooks", "Development Tutorial", "How to - Blog", "Youtube Playlist"]
    }
  ];

  const paymentMethods = [
    { name: "VISA", bg: "bg-blue-600" },
    { name: "MC", bg: "bg-red-500" },
    { name: "PP", bg: "bg-blue-500" },
    { name: "AP", bg: "bg-black" },
    { name: "GP", bg: "bg-green-500" }
  ];

  const socialIcons = [
    { icon: "f", label: "Facebook" },
    { icon: "@", label: "Twitter" },
    { icon: "in", label: "LinkedIn" },
    { icon: "G", label: "Google" }
  ];

  return (
    <footer className="bg-gray-50 py-12 mt-20">
      <div className="grid grid-cols-5 gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-4">SHOP.CO</h3>
          <p className="text-gray-600 text-sm mb-6">
            We have clothes that suits your style and which you're proud to wear. From women to men.
          </p>
          <div className="flex gap-4">
            {socialIcons.map((social, index) => (
              <div 
                key={index}
                className="w-8 h-8 bg-black rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-700 transition-colors"
                title={social.label}
              >
                <span className="text-white text-xs">{social.icon}</span>
              </div>
            ))}
          </div>
        </div>

        {footerSections.map((section, index) => (
          <div key={index}>
            <h4 className="font-semibold mb-4">{section.title}</h4>
            <ul className="space-y-2 text-gray-600">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex} className="cursor-pointer hover:text-gray-800 transition-colors">
                  {link}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t pt-6 mt-8 flex justify-between items-center">
        <p className="text-gray-500 text-sm">Shop.co © 2000-2023, All Rights Reserved</p>
        <div className="flex gap-4">
          {paymentMethods.map((method, index) => (
            <div 
              key={index}
              className={`w-12 h-8 ${method.bg} rounded flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity`}
            >
              <span className="text-white text-xs font-bold">{method.name}</span>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;