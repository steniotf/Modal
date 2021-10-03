const button = document.querySelector('button')
const popup =document.querySelector('.popup-wrapper')


button.addEventListener('click', () =>{
  popup.style.display = 'block'
})

popup.addEventListener('click', event =>{
  const classNameOfClickedElement = event.target.classList[0]
  const className=['popup-close', 'popup-link','popup-wrapper']
  const shouldClosePoup = className.some(className => className === classNameOfClickedElement)

  if  (shouldClosePoup){
    popup.style.display = 'none'
  }

})
