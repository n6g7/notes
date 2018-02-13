// https://flatuicolors.com/palette/fr
const primaryOptions = [
  '#fa983a',
  '#e58e26',
  '#e55039',
  '#eb2f06',
  '#b71540',
  '#6a89cc',
  '#4a69bd',
  '#1e3799',
  '#0c2461',
  '#60a3bc',
  '#3c6382',
  '#0a3d62',
  '#38ada9',
  '#079992'
]

const primary = primaryOptions[Math.floor(Math.random() * primaryOptions.length)]
console.info(`Using ${primary} as primary colour.`)

export default {
  colours: {
    grey: '#f6f6f6',
    primary
  }
}
