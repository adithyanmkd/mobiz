import EmailIcon from "../../assets/icons/email-icon.svg";
import PhoneIcon from "../../assets/icons/phone-icon.svg";
import LocationIcon from "../../assets/icons/location-white.svg";

const items = [
  {
    data: ["info@mobiztechnologies.com"],
    icon: {
      iconPath: EmailIcon,
      iconWidth: 20,
      iconheight: 20,
      alt: "email icon",
    },
  },
  {
    data: ["+91 9496 007 001", "+91 9496 007 007"],
    icon: {
      iconPath: PhoneIcon,
      iconWidth: 20,
      iconheight: 20,
      alt: "phone icon",
    },
  },
  {
    data: [
      "UG-3, 12/780 Centre Point Atrium, Old Check Post Mannarkkad- Anakatty Main Road, PO, Mannarkkad, Kerala 678582",
    ],
    icon: {
      iconPath: LocationIcon,
      iconWidth: 20,
      iconheight: 26,
      alt: "location icon",
    },
  },
];

const FooterContact = () => {
  return (
    <div>
      <div className="mx-auto mt-8 max-w-[324px]">
        <h2 className="font-medium text-white">Contact Us</h2>
        <ul className="mt-4 space-y-2.5">
          {items.map((value, index) => (
            <li key={index} className="flex space-x-2.5 text-xs text-[#D2D2D2]">
              <div>
                <img
                  src={value.icon.iconPath}
                  width={value.icon.iconWidth}
                  height={value.icon.iconheight}
                  alt={value.icon.alt}
                ></img>
              </div>
              <div>
                {value.data.map((data, index) => (
                  <p key={index} className="max-w-[290px]">
                    {data}
                  </p>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FooterContact;
