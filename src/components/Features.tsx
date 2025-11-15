import { Code2, Users, Heart, Globe } from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "Open Source",
    description:
      "Yep, all our code is out there for everyone to see. It's free to use, fork, and improve. Just ignore the \"final_final_FIX_really.\" commit.",
  },
  {
    icon: Users,
    title: "Community Driven",
    description:
      "Built by developers for developers who know what chaos looks like. Your ideas keep us inspired, occasionally confused, but always coding.",
  },
  {
    icon: Heart,
    title: "Contribution Welcome",
    description:
      "See something that needs work? Go for it. Fork it, fix it, and pretend it was easy. We'll totally act impressed.",
  },
  {
    icon: Globe,
    title: "Global Impact",
    description:
      "From midnight commits to global projects, we're all in this together. Changing the world one slightly questionable pull request at a time.",
  },
];

const Features = () => {
  return (
    <section className="py-28 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center space-y-6 transform transition-transform hover:scale-105"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/90 shadow-lg hover:shadow-pink-500/30 transition-shadow">
                <feature.icon className="w-10 h-10 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground tracking-wide">
                {feature.title}
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xs mx-auto">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
