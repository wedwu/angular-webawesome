export const labelFromHref = (href: string, _defaultLabel: string): string => {
  const name = href.replace(/^\//, '') || 'home';
  return name.charAt(0).toUpperCase() + name.slice(1);
};
