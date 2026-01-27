import IconInstagram from "@/assets/images/icon-instagram.png";
import IconFacebook from "@/assets/images/icon-facebook.png";
import IcoWhatsapp from "@/assets/images/icon-whatsapp.png";
import IconTikTok from "@/assets/images/icon-tiktok.png";

const socialMedia = [
  { href: "#", icon: IconInstagram, name: "Instagram" },
  { href: "#", icon: IconFacebook, name: "Facebook" },
  { href: "#", icon: IcoWhatsapp, name: "Whatsapp" },
  { href: "#", icon: IconTikTok, name: "TikTok" },
];

export const SocialMedia = () => {
  return (
    <div>
      <p className="mb-4 text-lg font-medium text-surface-alt">Redes Sociais</p>

      <ul className="flex  gap-5 ">
        {socialMedia.map(({ href, icon, name }) => (
          <li key={name}>
            <a href={href} aria-label={name}>
              <img src={icon} alt={name} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
