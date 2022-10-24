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
    fundingAmount: 250000, //https://en.wikipedia.org/wiki/Apple_Inc
    ipo: true,
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
    fundingAmount: 36100000, //https://www.crunchbase.com/organization/google
    ipo: true,
  },
  {
    name: "LinkedIn",
    slideUrls: [
      //Insert Slide Here
    ],
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/291px-LinkedIn_Logo.svg.png?20170711102837",
    facts: [
      "Founded in 2003",
      "Reid Hoffman",
      "First product: LinkedIn Connections Database",
    ],
    foundingYear: 1998,
    fundingAmount: 154800000, //https://www.crunchbase.com/organization/linkedin
    ipo: false,
  },
  {
    name: "AirBnB",
    slideUrls: [
      //Insert Slide Here
    ],
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/640px-Airbnb_Logo_B%C3%A9lo.svg.png",
    facts: [
      "Founded in 2008",
      "Brian Chesky, Nathan Blecharczyk, and Joe Gebbia",
      "First product: Airbnb",
    ],
    foundingYear: 2008,
    fundingAmount: 6400000000, //https://www.crunchbase.com/organization/airbnb
    ipo: true
  },
]
