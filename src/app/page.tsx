"use client";
import { useState } from 'react';
import { FaPlayCircle, FaCheckCircle, FaChevronLeft, FaChevronRight, FaArrowRight } from 'react-icons/fa';

const videos = [
  { id: 'VBB-0oM__Qo', title: 'El MEJOR HUMANIZADOR de TEXTOS', thumbnail: 'https://i.ytimg.com/vi/VBB-0oM__Qo/hqdefault.jpg' },
  { id: 'CUJUC0djcfA', title: 'EVITA el PLAGIO en tu TESIS', thumbnail: 'https://i.ytimg.com/vi/CUJUC0djcfA/hqdefault.jpg' },
  { id: 'p32r_zG5Fso', title: 'REDUCE la SIMILITUD de TURNITIN', thumbnail: 'https://i.ytimg.com/vi/p32r_zG5Fso/hqdefault.jpg' },
];

const testimonials = [
  "https://i.imgur.com/VLMCtcD.png", "https://i.imgur.com/gU45hHq.png", "https://i.imgur.com/OU7Yo7j.png",
  "https://i.imgur.com/2ijcALl.png", "https://i.imgur.com/0H9T16M.png", "https://i.imgur.com/GeHBu6F.png",
  "https://i.imgur.com/VhJhLw8.png", "https://i.imgur.com/Yh7K1mN.png",
];

export default function HomePage() {
  const [activeVideo, setActiveVideo] = useState(videos[0]);

  return (
    <main className="font-body bg-light">
      {/* HEADER */}
      <header className="bg-white/80 backdrop-blur-lg shadow-sm sticky top-0 z-50">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <img src="https://i.imgur.com/OeMI3pT.png" alt="Tutoria Logo" className="h-12" />
          <div className="hidden md:flex items-center space-x-8">
            <a href="#products" className="text-dark hover:text-primary transition-colors">Herramientas</a>
            <a href="#demo" className="text-dark hover:text-primary transition-colors">Demos</a>
            <a href="#testimonials" className="text-dark hover:text-primary transition-colors">Testimonios</a>
            <a href="#faq" className="text-dark hover:text-primary transition-colors">FAQ</a>
          </div>
          <a href="https://wa.me/51936197473?text=Hola,%20quisiera%20conseguir%20acceso." className="btn btn-primary" target="_blank" rel="noopener noreferrer">Contactar</a>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section className="relative bg-white">
        <div className="container mx-auto px-5 py-24 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold text-primary mb-6 leading-tight">
            Las Mejores Herramientas Para Tu Tesis a Precio de Estudiante
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-muted">
            Ahorra hasta un 70% en WriteHuman, Turnitin, ChatGPT Plus y más. Acceso inmediato y 100% seguro.
          </p>
          <a href="#products" className="btn btn-action text-xl shadow-lg">
            Ver Herramientas <FaArrowRight className="inline-block ml-2" />
          </a>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-light" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 100%)' }}></div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-white" style={{ clipPath: 'polygon(0 100%, 100% 100%, 0 0, 0 100%)' }}></div>
      </section>

      {/* PRODUCTS SECTION */}
      <section id="products" className="py-20 bg-light">
        <div className="container mx-auto px-5">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-dark">Elige Tu Herramienta Ideal</h2>
            <p className="text-lg text-muted mt-4">Todos los planes son mensuales. Consulta por planes de 15 días.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'WriteHuman', price: 'S/25', original: '$48', desc: 'Humanizador potente anti-IA.', link: 'https://wa.me/51936197473?text=Hola,%20estoy%20interesado%20en%20WriteHuman.'},
              { title: 'Turnitin Estudiante', price: 'S/20', desc: 'Reporte personal con tu correo.', link: 'https://wa.me/51936197473?text=Hola,%20estoy%20interesado%20en%20Turnitin%20Estudiante.'},
              { title: 'Turnitin + Detección IA', price: 'S/23', desc: 'Reportes ilimitados similitud + IA.', link: 'https://wa.me/51936197473?text=Hola,%20estoy%20interesado%20en%20Turnitin%20con%20IA.'},
              { title: 'ChatGPT Plus', price: 'S/10', original: '$20', desc: 'IA avanzada para investigación.', link: 'https://wa.me/51936197473?text=Hola,%20estoy%20interesado%20en%20ChatGPT%20Plus.'},
              { title: 'Quillbot Premium', price: 'S/10', original: '$10', desc: 'Reduce similitud eficazmente.', link: 'https://wa.me/51936197473?text=Hola,%20estoy%20interesado%20en%20Quillbot%20Premium.'},
              { title: 'Perplexity Pro', price: 'S/10', original: '$20', desc: 'Múltiples modelos IA investigación.', link: 'https://wa.me/51936197473?text=Hola,%20estoy%20interesado%20en%20Perplexity%20Pro.'},
            ].map(p => (
              <div key={p.title} className="bg-white rounded-xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-8 border-primary">
                <h3 className="text-2xl font-bold mb-3 text-dark">{p.title}</h3>
                <p className="text-5xl font-bold text-primary mb-2">{p.price}
                  {p.original && <span className="text-lg text-muted line-through ml-2">{p.original}</span>}
                </p>
                <p className="text-muted mb-6 h-12">{p.desc}</p>
                <a href={p.link} className="btn bg-primary text-white w-full text-center" target="_blank" rel="noopener noreferrer">Conseguir Ahora</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEMO & TESTIMONIALS SECTION */}
      <section id="demo" className="py-20 bg-white">
        <div className="container mx-auto px-5">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-dark">Confianza y Transparencia</h2>
                <p className="text-lg text-muted mt-4">Mira cómo funcionan nuestras herramientas y lo que dicen nuestros clientes.</p>
            </div>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Video Player */}
                <div>
                    <div className="bg-light p-6 rounded-xl shadow-2xl">
                        <div className="aspect-w-16 aspect-h-9 bg-dark rounded-xl shadow-lg overflow-hidden ring-4 ring-primary mb-6">
                          <iframe key={activeVideo.id} className="w-full h-full" src={`https://www.youtube.com/embed/${activeVideo.id}?autoplay=1&rel=0`} title={activeVideo.title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                        <div className="grid grid-cols-3 gap-3">
                          {videos.map(video => (
                            <button key={video.id} onClick={() => setActiveVideo(video)} className={`relative rounded-lg overflow-hidden transition-all duration-300 shadow-md ${activeVideo.id === video.id ? 'ring-4 ring-action' : 'opacity-70 hover:opacity-100'}`}>
                              <img src={video.thumbnail} alt={video.title} className="w-full h-auto" />
                               <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                                <FaPlayCircle className="text-white/80 text-4xl" />
                              </div>
                            </button>
                          ))}
                        </div>
                    </div>
                </div>
                {/* Testimonials Grid */}
                <div>
                    <div className="grid grid-cols-2 gap-4">
                        {testimonials.slice(0, 4).map((url, i) => (
                          <div key={i} className="testimonial-item bg-light rounded-lg shadow-xl overflow-hidden transition-transform transform hover:scale-105">
                            <img src={url} alt={`Testimonio de cliente ${i+1}`} className="w-full h-auto" />
                          </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="py-20 bg-light">
        <div className="container mx-auto px-5 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-dark">Preguntas Frecuentes</h2>
          </div>
          <div className="space-y-4">
            {[
              { q: '¿Es seguro usar estas cuentas?', a: 'Totalmente. Utilizamos tecnología Dicloak, especialmente diseñada para compartir cuentas de forma segura sin riesgo de baneo por parte de las plataformas.' },
              { q: '¿Cuándo recibo el acceso?', a: 'El acceso es inmediato. En menos de 10 minutos después de tu confirmación, tienes todo funcionando para que empieces a trabajar.' },
              { q: '¿Qué pasa si tengo problemas?', a: 'Contamos con soporte personal de 9am a 12am. Si hay alguna caída mundial o problema con la plataforma, trabajamos sin descanso hasta solucionarlo y restaurar tu acceso.' },
              { q: '¿Puedo cambiar de herramienta?', a: 'Claro, la flexibilidad es clave. Contáctanos por WhatsApp y coordinamos el cambio de una herramienta a otra según tu necesidad.' },
            ].map(faq => (
              <details key={faq.q} className="p-6 bg-white rounded-xl shadow-xl group transition-all duration-300">
                <summary className="font-bold text-xl cursor-pointer text-dark flex justify-between items-center">
                  {faq.q}
                  <FaCheckCircle className="text-primary opacity-0 group-open:opacity-100 transition-opacity" />
                </summary>
                <p className="pt-4 text-muted text-lg">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-dark text-white text-center py-10">
        <div className="container mx-auto px-5">
           <img src="https://i.imgur.com/OeMI3pT.png" alt="Tutoria Logo" className="h-16 mx-auto mb-4" />
          <p className="text-muted">&copy; 2024 Tutoria. Todos los derechos reservados.</p>
        </div>
      </footer>
    </main>
  );
}
