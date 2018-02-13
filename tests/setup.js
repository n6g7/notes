import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

window.MathJax = {
  Hub: {
    Config: jest.fn(),
    Queue: jest.fn()
  },
  InputJax: {
    TeX: 'hey'
  }
}

window.fetch = jest.fn(() => Promise.resolve({
  text: () => Promise.resolve('abc')
}))
