import imgForehand from "figma:asset/6c910907ea6711f255a0b4161959e8ee611fbf43.png";
import imgServe from "figma:asset/e6a99e7cb2317690a74729b3ff4dce8fa5813993.png";
import imgRacket from "figma:asset/d7adb6c8cd6d95412226a759987f8fb2d816f6e9.png";

const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdlKDW_YhhF3B93UG77lXCi8AlWbZAEvEwlXJ3_dHlmn4HmRQ/viewform?usp=publish-editor";

const testimonials = [
  {
    quote:
      "Isaac's coaching completely transformed my son's game. His focus on fundamentals gave him the confidence to compete at a much higher level.",
    author: "Parent of junior player",
  },
  {
    quote:
      "Technical, patient, and extremely professional. Isaac understands the game at a level that few coaches do.",
    author: "Adult league player",
  },
  {
    quote:
      "After six months with Isaac, my ranking improved significantly. He sees things in your technique that no one else catches.",
    author: "Competitive junior, age 16",
  },
  {
    quote:
      "Isaac brings a calm intensity to every session. My daughter looks forward to training every week.",
    author: "Parent of club player",
  },
  {
    quote:
      "The best investment I've made in my tennis. Disciplined, structured, and genuinely cares about your progress.",
    author: "Adult recreational player",
  },
];

function ThinDivider() {
  return <div className="w-16 mx-auto border-t border-foreground/15" />;
}

function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background image — the serve photo, very faded */}
      <div className="absolute inset-0">
        <img
          src={imgServe}
          alt=""
          className="w-full h-full object-cover opacity-[0.06]"
        />
      </div>

      <div className="relative z-10 text-center px-6 py-24 max-w-2xl mx-auto">
        <h1
          className="tracking-[0.15em] uppercase mb-3"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "3rem",
            fontWeight: 400,
            lineHeight: 1.1,
            letterSpacing: "0.12em",
          }}
        >
          Isaac Lee
        </h1>

        <p
          className="tracking-[0.3em] uppercase text-muted-foreground mb-10"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "0.85rem",
            fontWeight: 400,
            letterSpacing: "0.35em",
          }}
        >
          Private Tennis Coaching
        </p>

        <div className="w-10 mx-auto border-t border-foreground/20 mb-10" />

        <p
          className="text-muted-foreground mb-14 max-w-md mx-auto"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "1.2rem",
            fontWeight: 400,
            lineHeight: 1.8,
          }}
        >
          Classical fundamentals. Disciplined practice.
          <br />
          Long-term improvement for serious players.
        </p>

        <a
          href={GOOGLE_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border border-foreground/80 px-10 py-3 tracking-[0.2em] uppercase hover:bg-foreground hover:text-background transition-colors duration-300 cursor-pointer no-underline text-foreground"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "0.8rem",
            fontWeight: 500,
            letterSpacing: "0.25em",
          }}
        >
          Request a Consultation
        </a>
      </div>
    </section>
  );
}

function PhotoGallery() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="aspect-[3/4] overflow-hidden">
          <img
            src={imgForehand}
            alt="Isaac Lee — forehand"
            className="w-full h-full object-cover grayscale-[20%]"
          />
        </div>
        <div className="aspect-[3/4] overflow-hidden">
          <img
            src={imgServe}
            alt="Isaac Lee — serve"
            className="w-full h-full object-cover grayscale-[20%]"
          />
        </div>
        <div className="aspect-[3/4] overflow-hidden">
          <img
            src={imgRacket}
            alt="Racket detail"
            className="w-full h-full object-cover grayscale-[20%]"
          />
        </div>
      </div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section className="py-28 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <p
          className="tracking-[0.3em] uppercase text-[#4a6741] mb-4"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "0.8rem",
            fontWeight: 500,
          }}
        >
          Background
        </p>

        <h2
          className="mb-12"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.75rem",
            fontWeight: 400,
            lineHeight: 1.4,
          }}
        >
          Experience & Philosophy
        </h2>

        <ThinDivider />

        <div
          className="mt-12 space-y-6 text-muted-foreground text-left"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "1.1rem",
            fontWeight: 400,
            lineHeight: 1.9,
          }}
        >
          <p>
            Isaac Lee brings over fifteen years of coaching experience to every
            lesson. A former Division I collegiate player, Isaac competed at the
            highest amateur level before dedicating his career to developing
            players of all ages and abilities.
          </p>
          <p>
            His students range from junior development players preparing for
            competitive tournaments to adult club members seeking to refine their
            technique. Isaac has guided multiple juniors to sectional and
            national rankings, and has helped countless recreational players find
            greater consistency and enjoyment in their game.
          </p>
          <p>
            His coaching philosophy is rooted in the classical fundamentals of
            tennis — sound footwork, clean stroke production, tactical awareness,
            and the discipline to improve through deliberate practice. Isaac
            believes that lasting improvement comes not from shortcuts, but from
            building a reliable foundation that holds under pressure.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "15+", label: "Years Coaching" },
            { value: "D-I", label: "Collegiate Player" },
            { value: "200+", label: "Students Trained" },
            { value: "All", label: "Ages & Levels" },
          ].map((stat) => (
            <div key={stat.label}>
              <p
                className="text-[#4a6741]"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.5rem",
                  fontWeight: 400,
                }}
              >
                {stat.value}
              </p>
              <p
                className="text-muted-foreground tracking-[0.15em] uppercase mt-1"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "0.7rem",
                  fontWeight: 500,
                }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="py-28 px-6 bg-[#f0ece6]/50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <p
            className="tracking-[0.3em] uppercase text-[#4a6741] mb-4"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "0.8rem",
              fontWeight: 500,
            }}
          >
            Testimonials
          </p>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "1.75rem",
              fontWeight: 400,
              lineHeight: 1.4,
            }}
          >
            Player Feedback
          </h2>
        </div>

        <div className="space-y-0">
          {testimonials.map((t, i) => (
            <div key={i}>
              {i > 0 && (
                <div className="w-8 mx-auto border-t border-foreground/10 my-0" />
              )}
              <div className="py-10 text-center max-w-xl mx-auto">
                <blockquote
                  className="text-foreground/80 mb-5"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1.15rem",
                    fontWeight: 400,
                    lineHeight: 1.8,
                    fontStyle: "italic",
                  }}
                >
                  "{t.quote}"
                </blockquote>
                <p
                  className="text-muted-foreground tracking-[0.2em] uppercase"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "0.7rem",
                    fontWeight: 500,
                  }}
                >
                  — {t.author}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ConsultationSection() {
  return (
    <section className="py-28 px-6">
      <div className="max-w-xl mx-auto text-center">
        <p
          className="tracking-[0.3em] uppercase text-[#4a6741] mb-4"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "0.8rem",
            fontWeight: 500,
          }}
        >
          Get Started
        </p>
        <h2
          className="mb-6"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.75rem",
            fontWeight: 400,
            lineHeight: 1.4,
          }}
        >
          Private Coaching Available
        </h2>

        <p
          className="text-muted-foreground mb-14 max-w-md mx-auto"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "1.1rem",
            fontWeight: 400,
            lineHeight: 1.8,
          }}
        >
          Isaac offers personalized, one-on-one lessons for players seeking to
          improve their technique, strategy, and match performance. Sessions are
          available by appointment.
        </p>

        <a
          href={GOOGLE_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border border-foreground/80 px-10 py-3 tracking-[0.2em] uppercase hover:bg-foreground hover:text-background transition-colors duration-300 cursor-pointer no-underline text-foreground"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "0.8rem",
            fontWeight: 500,
            letterSpacing: "0.25em",
          }}
        >
          Request a Consultation
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-foreground/10">
      <div className="max-w-2xl mx-auto text-center">
        <p
          className="tracking-[0.15em] uppercase mb-1"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "0.95rem",
            fontWeight: 400,
            letterSpacing: "0.12em",
          }}
        >
          Isaac Lee
        </p>
        <p
          className="tracking-[0.25em] uppercase text-muted-foreground mb-8"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "0.7rem",
            fontWeight: 400,
          }}
        >
          Private Tennis Coaching
        </p>

        <div
          className="space-y-1 text-muted-foreground"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "0.9rem",
            fontWeight: 400,
            lineHeight: 1.8,
          }}
        >
          <p>isaacleetennis@gmail.com</p>
          <p>Irvine, California</p>
        </div>

        <div className="w-8 mx-auto border-t border-foreground/10 my-8" />

        <p
          className="text-muted-foreground/60"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "0.75rem",
            fontWeight: 400,
            letterSpacing: "0.1em",
          }}
        >
          &copy; {new Date().getFullYear()} Isaac Lee Tennis
        </p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div
      className="min-h-screen bg-background text-foreground"
      style={{ fontFamily: "'Cormorant Garamond', serif" }}
    >
      <HeroSection />
      <PhotoGallery />
      <div className="w-full border-t border-foreground/8" />
      <ExperienceSection />
      <TestimonialsSection />
      <ConsultationSection />
      <Footer />
    </div>
  );
}
