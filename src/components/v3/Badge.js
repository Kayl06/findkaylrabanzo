const variants = {
  default: "badge-v3",
  accent: "badge-v3 badge-accent-v3",
  shopify: "badge-v3 badge-shopify-v3",
};

export default function Badge({ variant = "default", className = "", children }) {
  return (
    <span className={`${variants[variant] || variants.default} ${className}`.trim()}>
      {children}
    </span>
  );
}
