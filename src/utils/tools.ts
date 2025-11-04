import { message } from 'ant-design-vue'

export function copyText(text: string) {
  /* Create a textarea element and set its value to the text to be copied */
  const textarea = document.createElement('textarea')
  textarea.value = text

  /* Append the textarea to the document body */
  document.body.appendChild(textarea)

  /* Select the content of the created textarea element */
  textarea.select()

  try {
    /* Execute the browser's copy command to place the selected content into the clipboard */
    const successful = document.execCommand('copy')

    if (successful) message.success('Text copied to clipboard!')
    else message.error('Unable to copy text')
  } catch (err) {
    message.error('Browser does not support copy command!')
  }

  /* Remove the textarea element that was added to the document */
  document.body.removeChild(textarea)
}
