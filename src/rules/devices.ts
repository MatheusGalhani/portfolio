export const devices = {
  phones: "576px",
  tablets: "768px",
  desktops: "992px",
  largeDesktops: "1200px",
  ultraLargeDesktops: "1440px",
};

export const breakpoints = {
  phones: `(min-width: ${devices.phones})`,
  tablets: `(min-width: ${devices.tablets})`,
  desktops: `(min-width: ${devices.desktops})`,
  largeDesktops: `(min-width: ${devices.largeDesktops})`,
  ultraLargeDesktops: `(min-width: ${devices.ultraLargeDesktops})`,
};
