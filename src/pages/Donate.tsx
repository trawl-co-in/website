// import { Button } from "@/components/ui/button";
// import { Heart, Coffee, DollarSign } from "lucide-react";

// const Donate = () => {
//   return (
//     <section className="relative min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 pt-32 pb-28 overflow-hidden">
//       {/* ✨ Background Glow Effects */}
//       <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />
//       <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-pink-500/10 blur-[200px] rounded-full" />
//       <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-yellow-400/10 blur-[180px] rounded-full" />

//       {/* 💖 Header Section */}
//       <div className="relative z-10 text-center max-w-3xl space-y-10">
//         <h1 className="text-6xl md:text-7xl font-extrabold leading-tight">
//           Support <span className="text-pink-500">Open Source</span> with ❤️
//         </h1>
//         <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
//           Love what we build? Help us keep the lights on (and our servers alive)
//           by donating. Every bit helps us stay fueled with coffee and creativity ☕
//         </p>
//       </div>

//       {/* 💵 Donation Options */}
//       <div className="relative z-10 mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
//         {/* Tier 1 */}
//         <div className="bg-gray-900/60 border border-pink-500/20 rounded-2xl p-8 text-center hover:shadow-lg hover:shadow-pink-500/10 transition-all duration-300">
//           <div className="flex justify-center mb-4">
//             <Coffee className="w-10 h-10 text-pink-500" />
//           </div>
//           <h3 className="text-2xl font-semibold text-white mb-3">Buy Us a Coffee</h3>
//           <p className="text-gray-400 mb-6">
//             Small gesture, big energy boost. Perfect for a one-time appreciation!
//           </p>
//           <Button
//             className="bg-pink-500 hover:bg-pink-600 text-white text-lg font-semibold px-6 py-3 rounded-full transition-all"
//             onClick={() => window.open("https://www.buymeacoffee.com/", "_blank")}
//           >
//             Donate $5
//           </Button>
//         </div>

//         {/* Tier 2 */}
//         <div className="bg-gray-900/60 border border-yellow-400/20 rounded-2xl p-8 text-center hover:shadow-lg hover:shadow-yellow-400/10 transition-all duration-300">
//           <div className="flex justify-center mb-4">
//             <Heart className="w-10 h-10 text-yellow-400" />
//           </div>
//           <h3 className="text-2xl font-semibold text-white mb-3">Monthly Supporter</h3>
//           <p className="text-gray-400 mb-6">
//             A recurring donation to keep our community thriving every month!
//           </p>
//           <Button
//             className="bg-yellow-400 hover:bg-yellow-500 text-black text-lg font-semibold px-6 py-3 rounded-full transition-all"
//             onClick={() => window.open("https://github.com/sponsors", "_blank")}
//           >
//             Become a Sponsor
//           </Button>
//         </div>

//         {/* Tier 3 */}
//         <div className="bg-gray-900/60 border border-pink-500/20 rounded-2xl p-8 text-center hover:shadow-lg hover:shadow-pink-500/10 transition-all duration-300">
//           <div className="flex justify-center mb-4">
//             <DollarSign className="w-10 h-10 text-pink-500" />
//           </div>
//           <h3 className="text-2xl font-semibold text-white mb-3">Corporate Sponsor</h3>
//           <p className="text-gray-400 mb-6">
//             Partner with us for a long-term collaboration — open source meets impact.
//           </p>
//           <Button
//             className="bg-gradient-to-r from-pink-500 to-yellow-400 hover:from-pink-600 hover:to-yellow-500 text-black text-lg font-semibold px-6 py-3 rounded-full transition-all"
//             onClick={() => window.open("mailto:contact@trawl.dev", "_blank")}
//           >
//             Contact Us
//           </Button>
//         </div>
//       </div>

//       {/* 🌟 Footer Note */}
//       <div className="relative z-10 text-center mt-20 text-gray-400 text-lg italic">
//         “Every donation keeps our code open, our spirits high, and our coffee cups full.”
//       </div>
//     </section>
//   );
// };

// export default Donate;


import { Button } from "@/components/ui/button";
import { Heart, Coffee, DollarSign } from "lucide-react";

const Donate = () => {
  return (
    <section className="relative min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 pt-32 pb-24 overflow-hidden">
      {/* 🌙 Subtle Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-black to-black opacity-90" />

      {/* 🪶 Header */}
      <div className="relative z-10 text-center max-w-3xl space-y-8">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight">
          Support <span className="text-pink-500">trawl.</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
          Love what we build? Help us stay caffeinated and creative.  
          Every donation — big or small — fuels our next idea.
        </p>
      </div>

      {/* 💵 Donation Options */}
      <div className="relative z-10 mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
        {/* Tier 1 */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 text-center hover:border-pink-500/40 transition-all duration-300">
          <Coffee className="w-10 h-10 text-pink-500 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold mb-3">Buy Us a Coffee</h3>
          <p className="text-gray-400 mb-6">
            A small gesture that keeps our code (and caffeine) flowing.
          </p>
          <Button
            className="bg-pink-500 hover:bg-pink-600 text-white text-lg font-medium px-6 py-3 rounded-full"
            onClick={() => window.open("https://buymeacoffee.com/trawl.co.in", "_blank")}
          >
            Donate $5
          </Button>
        </div>

        {/* Tier 2 */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 text-center hover:border-yellow-400/40 transition-all duration-300">
          <Heart className="w-10 h-10 text-yellow-400 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold mb-3">Monthly Supporter</h3>
          <p className="text-gray-400 mb-6">
            Keep our mission alive with steady monthly support.
          </p>
          <Button
            className="bg-yellow-400 hover:bg-yellow-500 text-black text-lg font-medium px-6 py-3 rounded-full"
            onClick={() => window.open("https://github.com/sponsors", "_blank")}
          >
            Become a Sponsor
          </Button>
        </div>

        {/* Tier 3 */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 text-center hover:border-pink-500/40 transition-all duration-300">
          <DollarSign className="w-10 h-10 text-pink-500 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold mb-3">Corporate Partner</h3>
          <p className="text-gray-400 mb-6">
            Collaborate with us to make open source sustainable.
          </p>
          <Button
            className="bg-pink-500 hover:bg-pink-600 text-white text-lg font-medium px-6 py-3 rounded-full"
            onClick={() => window.open("mailto:contact@trawl.co.in", "_blank")}
          >
            Contact Us
          </Button>
        </div>
      </div>

      {/* ✨ Footer Note */}
      <p className="relative z-10 text-center mt-16 text-gray-500 text-base italic">
        “Every donation keeps our code open, our spirits high, and our coffee cups full.”
      </p>
    </section>
  );
};

export default Donate;
