const items = [
  { icon: "⌂", title: "Home comfort", text: "Solutions for the spaces you live in" },
  { icon: "◷", title: "Responsive service", text: "Clear communication from start to finish" },
  { icon: "✓", title: "Quality work", text: "Thoughtful recommendations for your home" },
  { icon: "◉", title: "Local care", text: "A team that treats your home with respect" },
];

export const TrustStrip: React.FC = () => (
  <section className="relative z-10 mx-auto -mt-10 max-w-6xl px-4">
    <div className="grid gap-px overflow-hidden rounded-2xl bg-(--color-border-light) shadow-xl sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => <div key={item.title} className="bg-white px-5 py-6 text-center"><div className="mx-auto mb-3 text-3xl text-(--color-blue)" aria-hidden="true">{item.icon}</div><h3 className="font-extrabold uppercase tracking-wide">{item.title}</h3><p className="mt-1 text-xs leading-5 text-(--color-text-muted)">{item.text}</p></div>)}
    </div>
  </section>
);
