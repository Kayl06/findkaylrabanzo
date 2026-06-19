const variants = {
  primary: "btn-primary-v3",
  secondary: "btn-secondary-v3",
  ghost:
    "inline-flex items-center justify-center text-sm text-[var(--text-secondary)] hover:text-accent transition-colors py-3 px-2",
};

export default function Button({
  variant = "primary",
  className = "",
  children,
  href,
  ...props
}) {
  const classes = `${variants[variant] || variants.primary} ${className}`.trim();

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
