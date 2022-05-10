import { atom, selector } from 'recoil';
const parser = require('./components/shared/scriptlyShared.js');


export const pageView = atom({
  key: 'pageView',
  default: 'speech'
})

export const allSpeeches = atom({
  key: 'allSpeeches',
  default: [],
})

export const currentSpeechText = atom({
  key: 'currentSpeechText',
  default: ''
})

export const editedSpeechText = atom({
  key: 'editedSpeechText',
  default: 'a',
})

export const loginStatus = atom({
  key: 'login',
  default: 'none',
})

export const updateTitle = atom({
  key: 'updateTitle',
  default: '',
})

export const resultsModal = atom({
  key: 'resultsModal',
  default: false,
})

export const currentAnalysis = atom({
  key: 'currentAnalysis',
  default: {},
})

export const parseSelector = selector({
  key: 'parseSelector',
  get: ({get}) => {
    let data = get(editedValue)
    let parse = parser.parseTextToArray(data)
  }
})