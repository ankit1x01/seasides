import Link from 'next/link';

const SponsorsEnhanced = () => {
  const diamondSponsors = [
    { name: "HackerOne", logo: "https://logos-world.net/wp-content/uploads/2022/04/HackerOne-Logo.png" },
    { name: "Bugcrowd", logo: "https://logowik.com/content/uploads/images/bugcrowd4886.jpg" },
    { name: "Checkmarx", logo: "https://logowik.com/content/uploads/images/checkmarx8239.jpg" },
    { name: "DNIF", logo: "https://media.licdn.com/dms/image/C4D0BAQGn8tQjKpJ-JA/company-logo_200_200/0/1630587016834/dnif_logo?e=2147483647&v=beta&t=X8oI1QwmJJjpMfZ6q3_gX5G_6lMuJx3NG_1YnGfOQ6Y" },
    { name: "ArmorCode", logo: "https://media.licdn.com/dms/image/C4E0BAQEj9gD-hY-QKA/company-logo_200_200/0/1654172425531/armorcode_logo?e=2147483647&v=beta&t=JzKvX8qHzG_Jm_1CUQRLxZTzNqV5z_Zx_Qp4Wn9xZ3o" },
    { name: "CloudSEK", logo: "https://media.licdn.com/dms/image/C560BAQGxLJ4qRH3Rng/company-logo_200_200/0/1635859662821/cloudsek_logo?e=2147483647&v=beta&t=5c_6k8Y8zQ_V7Qg3j_9xU5n2R8_7oX_6pJ4fY1tA8Zw" }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Sponsors</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We are grateful to our sponsors who make this free conference possible for the cybersecurity community.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-center text-gray-800 mb-8">Diamond Sponsors</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {diamondSponsors.map((sponsor, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="h-16 flex items-center justify-center">
                  <span className="text-gray-600 font-semibold text-sm">{sponsor.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Why Sponsor Us?</h3>
            <ul className="text-gray-600 space-y-2">
              <li>• Reach 1000+ cybersecurity professionals</li>
              <li>• Brand visibility throughout the 3-day event</li>
              <li>• Direct engagement with potential customers</li>
              <li>• Support the cybersecurity community</li>
              <li>• Networking opportunities with industry leaders</li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Sponsorship Packages</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Diamond Sponsor</span>
                <span className="font-semibold text-blue-600">₹5,00,000</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Platinum Sponsor</span>
                <span className="font-semibold text-blue-600">₹3,00,000</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Gold Sponsor</span>
                <span className="font-semibold text-blue-600">₹2,00,000</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Silver Sponsor</span>
                <span className="font-semibold text-blue-600">₹1,00,000</span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-lg text-gray-600 mb-6">
            Help us nurture and shape the next generation passionate about cybersecurity, so they can create a safer and more peaceful world.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/sponsors">
              <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                View All Sponsors
              </button>
            </Link>
            <button className="px-8 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors">
              Become a Sponsor
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorsEnhanced;
