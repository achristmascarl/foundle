export function c(...classNames) {
  return classNames
    .filter(v => v)
    .join(' ')
    .trim()
    .replace(/\s{2,}/g, ' ');
}

export const companies = [
  {
    name: "Apple",
    websiteUrl: "https://www.apple.com/",
    iconUrl: "https://foundle.s3.amazonaws.com/icons/apple-icon.png",
    foundingYear: 1976,
    slideUrls: [
      "https://foundle.s3.amazonaws.com/slides/apple-slide-1.jpeg"
    ],
    facts: [
      "Founded in 1976",
      "Steve Jobs and Steve Wozniak",
      "First product: Apple I",
    ],
  },
  {
    name: "Google",
    websiteUrl: "https://www.google.com/",
    iconUrl: "https://foundle.s3.amazonaws.com/icons/google-icon.png",
    foundingYear: 1998,
    slideUrls: [
      "https://foundle.s3.amazonaws.com/slides/google-slide-1.png"
    ],
    facts: [
      "Founded in 1998",
      "Larry Page and Sergey Brin",
      "First product: Google Search",
    ],
  },
]
