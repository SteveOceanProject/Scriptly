import React, { useState } from 'react'
import { createEditor } from 'slate'
import { Slate, Editable, withReact } from 'slate-react'
import {useRecoilState} from 'recoil';
import {editedSpeechText, updateTitle, formattedSpeech} from '../../atoms.jsx';


const MyEditor = () => {
  const [editor] = useState(() => withReact(createEditor()))
  const [tempText, setTemp] = useState('')

  const [editedValue, setEdited] = useRecoilState(editedSpeechText);
  const [titleValue, setTitle] = useRecoilState(updateTitle);
  const [formattedValue, setFormatted] = useRecoilState(formattedSpeech);

  const initialValue = [
    {
      type: 'paragraph',
      children: [{ text: editedValue }],
    },
  ];

  const titleListener = () => {
    setTitle(event.target.value)
  }


  return (
    <Slate editor={editor} value={initialValue} onChange={(value) => {
      let currentString = '';
      let formatted = '';
      value.forEach((element) => {

        currentString += element.children[0].text;
      })
      setEdited(currentString)
      value.forEach((value) => {
        formatted += value.children[0].text + '\n';
        setFormatted(formatted);
      })
    }}>
      <form>
        <input
          type='text'
          placeholder='Enter A Title For Your Speech'
          value={titleValue}
          onChange={titleListener}
          style={{
            alignItems: 'center',
            width: '50vw',
            border: '4 solid black'
          }}>
          </input>
      </form>
      <Editable
        placeholder='Begin Typing Here'
        style={{
          margin: '25px',
          width: '80vw'}}/>
    </Slate>
  )
}

export default MyEditor;