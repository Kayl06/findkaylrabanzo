const variants = {
  primary: "btn-primary-v3",
  secondary: "btn-secondary-v3",
  ghost: "btn-ghost-v3",
};

export default function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  href,
  ...props
}) {
  const classes = [
    variants[variant] || variants.primary,
    size === "sm" ? "btn-sm-v3" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (href) {
    const isExternal = href.startsWith("http") || href.endsWith(".pdf");
    return (
      <a
        href={href}
        className={classes}
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}
