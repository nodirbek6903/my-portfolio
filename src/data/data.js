import Crm from "../assets/CRM.png"
import FerganaNatural from "../assets/ferganaNatural.png"
import BuildHouse from "../assets/buildHouse.png"
import Targetolog from "../assets/Targetolog.png"
import Autozoom from "../assets/autozoom.png"
import CleanService from "../assets/cleanService.png"
import MyImg2 from "../assets/my_image2.jpg"
import MyImg3 from "../assets/my_image3.jpg"
import MyImg4 from "../assets/my_image4.jpg"
import MyImg5 from "../assets/my_image5.jpg"
import MyImg6 from "../assets/my_image6.jpg"
const userData = {
    fullName: "Umarov Nodirbek",
    profession: "Frontend | React Developer",
    myImage: [ MyImg2, MyImg3,MyImg4, MyImg5, MyImg6],
    description: "Men zamonaviy web ilovalarni ishlab chiqishga ixtisoslashgan Frontend | React dasturchiman. React.js va Tailwind CSS yordamida chiroyli va funksional dizayn yarataman.",
    skills: ["HTML", "CSS", "Javascript", "React", "Redux", "Redux-toolkit", "Tailwind CSS", "Bootstrap", "Node js"],
    projects: [
        {
            id: 1,
            title: "CRM Tizim",
            description: "O'quv markaz uchun CRM dasturi (React + Node js)",
            image: Crm,
            link: "https://crm-loyiha.vercel.app"
        },
        {
            id: 2,
            title: "Fergana Natural",
            description: "Fergana viloyati mebel sotuvchi sayt ( React )",
            image: FerganaNatural,
            link: "https://www.ferghananatural.uz"
        },
        {
            id:3,
            title: "Build House",
            description: "Yengil qurilish uchun sayt ( React )",
            image: BuildHouse,
            link: "https://www.buildhouse.uz"
        },
        {
            id:4,
            title: "Targetolog",
            description: "Targetolog sayti ( React )",
            image: Targetolog,
            link: "https://targetolog.vercel.app"
        },
        {
            id:5,
            title: "Autozoom",
            description: "Autozoom sayti ( React )",
            image: Autozoom,
            link: "https://autozoom.vercel.app"
        },
        {
            id:6,
            title: "Clean Service",
            description: "O'zbekiston bo'ylab  dezinfeksiya xizmati sayti ( React )",
            image: CleanService,
            link: "https://www.clean-service.uz"
        }
    ],
    contact: {
        email: "nu2913634@gmail.com",
        github: "https://github.com/nodirbek6903",
        linkedin: "https://www.linkedin.com/in/nodirjonumarov",
        telegram: "https://t.me/Nodirbek_6903",
        phone: "+998903646903"
    }
}

export default userData