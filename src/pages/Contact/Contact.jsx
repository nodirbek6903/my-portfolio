import { useState } from "react";
import { FaGithub, FaLinkedin, FaTelegram, FaInstagram } from "react-icons/fa";
import contactData from "./ContactData";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const telegramBotToken = "7540869080:AAFU4wQY_-cMgi14vO1XRZJVm2wwKGU4Lu8";
    const chatId = 5716140595;

    const text = `📩 Yangi xabar! \n👤 Ism: ${formData.name}\n✉️ Xabar: ${formData.message}`;

    const telegramApiUrl = `https://api.telegram.org/bot${telegramBotToken}/sendMessage`;

    try {
      await fetch(telegramApiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text,
          parse_mode: "Markdown",
        }),
      });

      alert("Xabaringiz yuborildi!");
      setFormData({ name: "", message: "" });
    } catch (error) {
      console.error("Xatolik yuz berdi:", error);
      alert("Xabar yuborishda xatolik yuz berdi.");
    }
  };

  return (
    <div className="py-16 px-4 bg-gray-100">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-3xl font-bold text-center mb-6">Bog‘lanish</h2>

        {/* Grid layout for responsiveness */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Chap taraf - Kontakt ma'lumotlari */}
          <div>
            <p>
              <strong>Ism:</strong> {contactData.name}
            </p>
            <p>
              <strong>Kasb:</strong> {contactData.profession}
            </p>
            <p>
              <strong>Telefon:</strong>{" "}
              <a href={`tel:${contactData.phone}`} className="text-blue-500">
                {contactData.phone}
              </a>
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a href={`mailto:${contactData.email}`} className="text-blue-500">
                {contactData.email}
              </a>
            </p>
            <p>
              <strong>Manzil:</strong>{" "}
              <a
                href={contactData.addressLink}
                className="text-blue-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Maps
              </a>
            </p>

            {/* Google Map */}
            <div className="my-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.778077490458!2d71.21523829963421!3d40.41376681846487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb01b74c44d993%3A0x35ee8b2a329f26bc!2sRishton%20tumani%2C%20Farg&#39;ona%20Viloyati%2C%20O%CA%BBzbekiston!5e0!3m2!1suz!2s!4v1742583522528!5m2!1suz!2s"
                className="w-full h-48 md:h-64 rounded-lg"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>

            {/* Ijtimoiy tarmoqlar */}
            <h3 className="text-xl font-semibold mt-4">Ijtimoiy tarmoqlar:</h3>
            <ul className="flex space-x-4 mt-2">
              <li>
                <a
                  href={contactData.socialLinks.github}
                  className="text-gray-800 hover:text-gray-600"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub size={24} />
                </a>
              </li>
              <li>
                <a
                  href={contactData.socialLinks.linkedin}
                  className="text-blue-700 hover:text-blue-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin size={24} />
                </a>
              </li>
              <li>
                <a
                  href={contactData.socialLinks.telegram}
                  className="text-blue-500 hover:text-blue-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTelegram size={24} />
                </a>
              </li>
              <li>
                <a
                  href={contactData.socialLinks.instagram}
                  className="text-pink-500 hover:text-pink-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram size={24} />
                </a>
              </li>
            </ul>
          </div>

          {/* O‘ng taraf - Forma */}
          <div>
            <h3 className="text-xl font-semibold">Savol va Takliflar</h3>
            <form onSubmit={handleSubmit} className="mt-4">
              <label className="block mb-2 font-semibold">Ismingiz:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                autoComplete="off"
                className="w-full p-3 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Ismingizni kiriting"
              />

              <label className="block mt-4 mb-2 font-semibold">Xabaringiz:</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md h-32 outline-none resize-none focus:ring-2 focus:ring-blue-400"
                placeholder="Xabaringizni kiriting"
              ></textarea>

              <button
                type="submit"
                className="mt-4 w-full px-4 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
              >
                Yuborish
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
