export const domFunc = () => {
  const box1 = document.createElement('div')
  box1.classList.add('box1')
  box1.innerText = 'this is css style'
  document.body.appendChild(box1)

  const box2 = document.createElement('div')
  box2.classList.add('box2')
  box2.innerText = 'this is less style'
  document.body.appendChild(box2)

  const box3 = document.createElement('div')
  box3.classList.add('box3')
  box3.innerText = 'this is sass style'
  document.body.appendChild(box3)

  const imgBox = document.createElement('div')
  imgBox.style.width = '300px'
  imgBox.style.height = '500px'
  imgBox.classList.add('img-box')
  document.body.appendChild(imgBox)
}
