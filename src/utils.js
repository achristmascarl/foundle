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
    slideUrls: [
      "https://foundle.s3.amazonaws.com/slides/apple-slide-1.jpeg"
    ],
    iconUrl: "https://foundle.s3.amazonaws.com/icons/apple-icon.png",
    facts: [
      "Founded in 1976",
      "Steve Jobs and Steve Wozniak",
      "First product: Apple I",
    ],
    foundingYear: 1976,
  },
  {
    name: "Google",
    slideUrls: [
      "https://foundle.s3.amazonaws.com/slides/google-slide-1.png"
    ],
    iconUrl: "https://foundle.s3.amazonaws.com/icons/google-icon.png",
    facts: [
      "Founded in 1998",
      "Larry Page and Sergey Brin",
      "First product: Google Search",
    ],
    foundingYear: 1998,
  },
]
