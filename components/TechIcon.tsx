type TechIconVariant = "original" | "monochrome" | "transparent";

type TechIconProps = {
  name: string;
  label?: string;
  light?: TechIconVariant;
  dark?: TechIconVariant;
};

export function TechIcon({
  name,
  label = "",
  light = "original",
  dark = "monochrome",
}: TechIconProps) {
  const alt = label ? `${label} logo` : "";

  return (
    <span className="tech-icon" aria-hidden={label ? undefined : true}>
      <img
        className="tech-icon__image tech-icon__image--light"
        src={`/icons/tech/${name}/${light}.svg`}
        alt={alt}
        loading="lazy"
      />
      <img
        className="tech-icon__image tech-icon__image--dark"
        src={`/icons/tech/${name}/${dark}.svg`}
        alt={alt}
        loading="lazy"
      />
    </span>
  );
}
