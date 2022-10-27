import React from 'react'

function Categories({value, onClickCategory}) {

  const arrCategories = ['Все', 'Мясные' , 'Вегетарианская' , 'Гриль' , 'Острые', 'Закрытые']
 
  return (
    <div  className="categories">
                <ul>
                  {arrCategories.map((category, index) => {
                    return (
                        <li onClick={() => onClickCategory(index)} className={value === index ? 'active' : ''} key={category}>{category}</li>
                    )})}
                </ul>
              </div>
  )
}

export default Categories