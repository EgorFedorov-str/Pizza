import React from 'react'
import Categories from '../components/Categories'
import Sort from '../components/Sort'
import Skeleton from '../components/Skeleton'
import PizzaBlock from '../components/PizzaBlock'
import { useState, useEffect } from "react";
import Pagination from '../components/Pagination/Pagination'
import { useContext } from 'react'
import { SearchContext } from '../App'

function Home() {
  const {searchValue} = useContext(SearchContext)
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [activeSort, setActiveSort] = useState({
    name: 'Популярности',
    sortProp: 'rating'
  });
  const pizzas = items.filter((obj) => {
    if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
      return true
    }
    return false
  }).map((pizza) => (
                    <PizzaBlock
                      sizes={pizza.sizes}
                      key={pizza.id}
                      price={pizza.price}
                      title={pizza.title}
                      imageUrl={pizza.imageUrl}
                      types={pizza.types}
                    />
                  ))
  const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index} />)
  // https://62c83de88c90491c2cb20e76.mockapi.io/pizzas
  useEffect(() => {
    setIsLoading(true);
    fetch(`https://62c83de88c90491c2cb20e76.mockapi.io/pizzas?page=${currentPage}&limit=4&${activeCategory > 0 ? `category=${activeCategory}` : ''}&sortBy=${activeSort.sortProp}&order=desc`)
      .then((Response) => {
        return Response.json();
      })
      .then((json) => {
        setItems(json);
        setIsLoading(false);
      });
      window.scrollTo(0, 0)
  }, [activeCategory, activeSort, currentPage]);
  return (
    <div className="container">
        <div className="content__top">
              <Categories value={activeCategory} onClickCategory={(index) => setActiveCategory(index)} />
              <Sort value={activeSort} onClickSort={(index) => setActiveSort(index)}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
              {isLoading
                ? skeletons
                : pizzas}
            </div>
        <Pagination onChangePage={(number) => setCurrentPage(number)}/>
    </div>
  )
}

export default Home