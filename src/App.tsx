import { motion } from 'motion/react';
import { Heart, Stethoscope, Sparkles, Star, MailOpen } from 'lucide-react';
import { useState, useEffect } from 'react';

function FloatingHearts() {
  const [hearts, setHearts] = useState<{ id: number; left: number; delay: number; duration: number; size: number }[]>([]);

  useEffect(() => {
    const newHearts = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 15 + Math.random() * 15,
      size: 16 + Math.random() * 24,
    }));
    setHearts(newHearts);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute bottom-[-10%] text-pink-300/40"
          initial={{ y: 0, x: 0, opacity: 0, rotate: 0 }}
          animate={{
            y: '-120vh',
            x: Math.sin(heart.id) * 50,
            opacity: [0, 1, 0],
            rotate: 360,
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{ left: `${heart.left}%` }}
        >
          <Heart size={heart.size} fill="currentColor" />
        </motion.div>
      ))}
    </div>
  );
}

export default function App() {
  const [isLetterOpen, setIsLetterOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-100 to-pink-200 text-pink-950 font-sans overflow-x-hidden selection:bg-pink-300 selection:text-pink-900">
      <FloatingHearts />
      
      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="inline-flex items-center justify-center p-4 bg-white/30 backdrop-blur-md rounded-full shadow-xl shadow-pink-200/50 mb-6 border border-white/50">
            <Heart className="w-12 h-12 text-pink-500 animate-pulse" fill="currentColor" />
          </div>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-4 font-love text-pink-600 drop-shadow-sm">
            For My ceedy❤️
          </h1>
          <p className="text-xl md:text-2xl font-medium text-pink-800/80 mb-2">
            @pinky_sadee
          </p>
          <p className="text-lg md:text-xl text-pink-700 max-w-2xl mx-auto mt-6 leading-relaxed">
            The most beautiful, caring, and special human in this entire world.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-10 animate-bounce"
        >
          <p className="text-sm text-pink-600/70 uppercase tracking-widest font-semibold">Scroll Down</p>
        </motion.div>
      </section>

      {/* Nursing Journey Section */}
      <section className="relative z-10 py-24 px-6 bg-white/40 backdrop-blur-sm border-y border-white/50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row items-center gap-12"
          >
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-5xl md:text-6xl font-love font-bold text-pink-900 mb-6">
                A Heart for Healing
              </h2>
              <p className="text-lg text-pink-800 leading-relaxed mb-6">
                Watching you pursue your dreams in nursing makes me so incredibly proud. 
                I already see the compassion, dedication, and love you have for helping others. 
              </p>
              <p className="text-lg text-pink-800 leading-relaxed">
                You are going to be the most amazing nurse. Your patients will be so lucky 
                to have someone with your beautiful heart caring for them. I'll be right here 
                cheering you on every step of the way.
              </p>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80 bg-gradient-to-tr from-pink-300 to-rose-200 rounded-full p-2 shadow-2xl shadow-pink-300/40">
                <div className="w-full h-full bg-white/50 rounded-full flex items-center justify-center backdrop-blur-sm border-4 border-white/60">
                  <Stethoscope className="w-32 h-32 text-pink-500 opacity-80" />
                </div>
                {/* Decorative floating elements */}
                <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 3 }} className="absolute top-4 right-4 text-pink-400">
                  <Sparkles size={32} />
                </motion.div>
                <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 4 }} className="absolute bottom-8 left-4 text-rose-400">
                  <Heart size={24} fill="currentColor" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why I Love You Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-love font-bold text-pink-900 mb-4">
              Why You're My Everything
            </h2>
            <p className="text-lg text-pink-700">Just a few of the millions of reasons...</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Star className="w-8 h-8 text-pink-500" />,
                title: "Your Beautiful Soul",
                desc: "You have a heart of gold. The way you care for people and the kindness you show the world is truly inspiring."
              },
              {
                icon: <Sparkles className="w-8 h-8 text-pink-500" />,
                title: "Your Smile",
                desc: "Your smile lights up my entire world. Whenever I see you happy, everything else just fades away."
              },
              {
                icon: <Heart className="w-8 h-8 text-pink-500" fill="currentColor" />,
                title: "My Safe Haven",
                desc: "Meeting you on the third day after my father passed changed my life. You became my greatest emotional support in my darkest hours, and I will forever be grateful for that."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white/60 backdrop-blur-md p-8 rounded-3xl shadow-xl shadow-pink-100/50 border border-white/80 hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center mb-6 shadow-inner">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-pink-900 mb-3">{item.title}</h3>
                <p className="text-pink-800/80 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Love Letter Section */}
      <section className="relative z-10 py-24 px-6 bg-pink-600 text-white overflow-hidden">
        {/* Decorative background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
        </div>

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-lg p-8 md:p-12 rounded-[3rem] border border-white/20 shadow-2xl"
          >
            {!isLetterOpen ? (
              <div className="flex flex-col items-center">
                <MailOpen className="w-20 h-20 text-pink-200 mb-6" />
                <h2 className="text-4xl md:text-5xl font-love font-bold mb-6">I wrote something for you...</h2>
                <button 
                  onClick={() => setIsLetterOpen(true)}
                  className="px-8 py-4 bg-white text-pink-600 rounded-full font-bold text-lg hover:bg-pink-50 hover:scale-105 transition-all shadow-lg shadow-pink-900/20 flex items-center gap-2 cursor-pointer"
                >
                  <Heart size={20} fill="currentColor" />
                  Open Letter
                </button>
              </div>
            ) : (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.8 }}
                className="text-left"
              >
                <div className="flex justify-center mb-8">
                  <Heart className="w-12 h-12 text-pink-300 animate-pulse" fill="currentColor" />
                </div>
                <p className="text-4xl font-love mb-6 leading-relaxed">My dearest ceedy❤️,</p>
                <p className="text-lg mb-6 leading-relaxed text-pink-50">
                  I wanted to create this little corner of the internet just for you, to remind you of how incredibly special you are to me. 
                </p>
                <p className="text-lg mb-6 leading-relaxed text-pink-50">
                  I will never forget when we met—the third day after my father passed away. It was one of the darkest times of my life, but you stepped in and became my greatest emotional support. You held me together when I was falling apart, and I will forever be grateful for the comfort and love you gave me when I needed it most.
                </p>
                <p className="text-lg mb-6 leading-relaxed text-pink-50">
                  From that moment on, everything has been brighter, sweeter, and more beautiful—just like your favorite color, pink. You are my safe space, my biggest inspiration, and my greatest blessing.
                </p>
                <p className="text-lg mb-6 leading-relaxed text-pink-50">
                  We've had our ups and downs throughout our time together, but we've always managed to stay by each other's side no matter how hard it gets. For your unwavering commitment and love, I am endlessly grateful. You've shown me what true partnership means.
                </p>
                <p className="text-lg mb-6 leading-relaxed text-pink-50">
                  As you study hard in nursing school, I want you to know that I believe in you more than words can say. This is just the beginning of an amazing journey, and I promise to be by your side through all the late-night study sessions, the stressful exams, and the beautiful victories.
                </p>
                <p className="text-lg mb-8 leading-relaxed text-pink-50">
                  Never forget your worth, my love. You are the most valued, cherished, and loved human in this world to me. I love you endlessly, today, tomorrow, and forever.
                </p>
                <p className="text-3xl font-love text-right">
                  Yours always, <br/>
                  Yusuf (your heartdesire) <br/>
                  <span className="text-pink-200">❤️</span>
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-8 text-center text-pink-700/60 text-sm bg-pink-50">
        <p>Made with all the love in the world for pinky_sadee by Yusuf</p>
      </footer>
    </div>
  );
}