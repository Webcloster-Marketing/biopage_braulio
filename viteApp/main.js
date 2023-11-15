import "./style.css";
import Alpine from "alpinejs";

window.Alpine = Alpine;

Alpine.data("biodata", () => ({

  bio_name: "Braulio Julian Cardona Quiroz",
  bio_posiiton: "Gestor de recursos gráficos y contenidos digitales multimedia.",
  bio_profile: {
    emoji: "📷📹🎨💾🔍",
    description: "Soy un diseñador gráfico apasionado y altamente competente con un enfoque especializado en la industria tecnológica. Mi dominio de herramientas como Photoshop, Illustrator, WordPress, CorelDRAW, Adobe XD y After Effects me permite crear diseños visuales impactantes y funcionales que comunican eficazmente la esencia de la tecnología. Mi habilidad para fusionar la creatividad con la funcionalidad me ha permitido contribuir a la identidad de marca, la experiencia del usuario y la presentación de productos de manera consistente y atractiva para Webcloster S.A.S"
  },
  bio_socials: [
    {
      name: "instagram",
      icon: "instagram",
      link: "https://www.instagram.com/pixel_creativo_316"
    },
    {
      name: "behance",
      icon: "behance",
      link: "https://www.behance.net/juliancardona3"
    },
  ],

  // bio_whatsapp: "+573215710472",
  // replace to tapxter number
  bio_whatsapp: "+573185884480",

}));

Alpine.start();
