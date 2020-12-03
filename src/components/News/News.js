import React from "react";
import news from '../../images/news.gif'

const News = (props) => {
    return (
      <div className="m-3 text-center text-white">
      <img className="w-50 rounded-circle" src={news} alt={"news"}/>
  <h3>Новости</h3>
  </div>
    )
}

export default News