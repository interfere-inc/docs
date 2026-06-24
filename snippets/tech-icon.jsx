export const TechIcon = ({
  name,
  light = "original",
  dark = "monochrome",
}) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const syncTheme = () => setIsDark(root.classList.contains("dark"));

    syncTheme();

    const observer = new MutationObserver(syncTheme);
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);

  return (
    <span className="tech-icon" aria-hidden="true">
      <img
        className="tech-icon__image"
        src={`/icons/tech/${name}/${isDark ? dark : light}.svg`}
        alt=""
        width="24"
        height="24"
        loading="lazy"
      />
    </span>
  );
};
