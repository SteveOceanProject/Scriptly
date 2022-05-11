import React, {useEffect} from 'react';
import {useRecoilState} from 'recoil';
import {currentSpeechText, currentAnalysis, editedSpeechText, currentAnalysis2} from '../atoms.jsx';
const parser = require('../components/shared/scriptlyShared.js');
const { fear } = require('./fearfulWords.js');
const { joy } = require('./joyfulWords.js');
const { trust } = require('./trustworthyWords.js');
const { positive } = require('./positiveWords.js');
const { negative } = require('./negativeWords.js');

const Analyzer = () => {
  const [editedValue, setEdited] = useRecoilState(editedSpeechText);
  const [analysisValue, setAnalysis] = useRecoilState(currentAnalysis);
  const [analysisValue2, setAnalysis2] = useRecoilState(currentAnalysis2);


  useEffect(() => {
    funcWrapper(editedValue);
    }, [editedValue]);

    const funcWrapper = (string) => {


      // account for other characters on split/filter
      let split = parser.parseTextToArray(string)
      console.log(split, 'this is split')
      // ship this off with submit
      let emotion = {
        fear: 0,
        joy: 0,
        trust: 0,
        positive: 0,
        negative: 0,
        wordCount: 0,
      }

      split.forEach((value) => {
        emotion.totalCount++;
        if (fear.includes(value)) {
          emotion.anger++;
        } else if (positive.includes(value)) {
          emotion.positive++;
        } else if (negative.includes(value)) {
          emotion.negative++;
        } else if (joy.includes(value)) {
          emotion.joy++;
        } else if (trust.includes(value)) {
          emotion.trust++;
        }
      })
      setAnalysis2(emotion)
      setAnalysis(emotion)
      console.log(emotion)
    }
}

export default Analyzer;