import FacebookIcon from "../../assets/icons/facebook-icon.svg";
import WhatsappIcon from "../../assets/icons/whatsapp-icon.svg";
import TwitterIcon from "../../assets/icons/twitter.svg";
import YoutubeIcon from "../../assets/icons/youtube-icon.svg";
import InstagramIcon from "../../assets/icons/instagram-icon.svg";

const socialMedia = [
  {
    href: "https://www.facebook.com/Mobiztechnologies",
    src: FacebookIcon,
    image: {
      width: 11,
      height: 19,
      alt: "facebook logo",
    },
  },
  {
    href: "https://api.whatsapp.com/message/AZNMC25EX2R5H1?autoload=1&app_absent=0",
    src: WhatsappIcon,
    image: {
      width: 19,
      height: 19,
      alt: "whatsapp logo",
    },
  },
  {
    href: "https://x.com/Mobiztech",
    src: TwitterIcon,
    image: {
      width: 19,
      height: 19,
      alt: "twitter logo",
    },
  },
  {
    href: "https://www.youtube.com/@mobiztechnologies",
    src: YoutubeIcon,
    image: {
      width: 19,
      height: 19,
      alt: "youtube logo",
    },
  },
  {
    href: "https://www.instagram.com/mobiztechnologies/",
    src: InstagramIcon,
    image: {
      width: 19,
      height: 19,
      alt: "instagram logo",
    },
  },
];

const FooterSocialLinks = () => {
  return (
    <div className="mx-auto max-w-[324px]">
      <h2 className="text-xl font-bold text-white">Mobiz Technologies</h2>
      <p className="mt-4 leading-[160%] text-[#D2D2D2]">Follow Us!</p>
      <div className="mt-[14px] flex space-x-4">
        {socialMedia.map((value, index) => (
          <a key={index} href={value.href}>
            <img
              src={value.src}
              width={value.image.width}
              height={value.image.height}
              alt={value.image.alt}
            ></img>
          </a>
        ))}
      </div>
    </div>
  );
};

export default FooterSocialLinks;
