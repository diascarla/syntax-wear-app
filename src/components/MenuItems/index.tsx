const menus = [
  { title: "Masculino", items: ["Casual", "Esporte", "Moderno"] },
  { title: "Feminino", items: ["Casual", "Esporte", "Moderno"] },
  { title: "Outlet", items: ["Masculino", "Feminino"] },
  { title: "Sobre nós", items: ["Quem Somos", "Missão", "Carreiras"] },
];

export const MenuItems = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-8">
      {menus.map(({ title, items }) => (
        <nav key={title}>
          <ul className="flex flex-col gap-4">
            <li>
              <p className="font-normal text-surface-alt text-xl">{title}</p>
            </li>
            {items.map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="font-medium Hover:text-text-tertiary transition-colors text-xl"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ))}
    </div>
  );
};
