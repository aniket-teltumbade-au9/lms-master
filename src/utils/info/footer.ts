import { MdEmail, MdPhone } from "react-icons/md"; // Email & Phone
import { FaTwitter, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa"; // Social Icons

export const footerInfo = {
    "EduLMS": [{ text: "Empowering education through technology and innovation." }],
    "Quick Links": [
        { text: "Admissions" },
        { text: "Programs" },
        { text: "Policies" }
    ],
    "Contact": [
        { type: "email", text: "contact@edulms.com", Icon: MdEmail },
        { type: "phone", text: "+1 (555) 123-4567", Icon: MdPhone }
    ],
    "Follow Us": {
       icons: [FaTwitter, FaLinkedin, FaFacebook, FaInstagram] 
    }
}
