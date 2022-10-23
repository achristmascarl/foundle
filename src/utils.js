export function c(...classNames) {
  return classNames
    .filter(v => v)
    .join(' ')
    .trim()
    .replace(/\s{2,}/g, ' ');
}

export const exampleData = [
  {
    name: "Apple",
    slideUrls: [
      "https://www.slideteam.net/wp/wp-content/uploads/2021/12/Slide4-6-784x441.jpg"
    ],
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Apple-logo.png",
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
      "https://www.slideteam.net/wp/wp-content/uploads/2021/12/Slide4-6-784x441.jpg"
    ],
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Apple-logo.png",
    facts: [
      "Founded in 1998",
      "Larry Page and Sergey Brin",
      "First product: Google Search",
    ],
    foundingYear: 1998,
  },
]
