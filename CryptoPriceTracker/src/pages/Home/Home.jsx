import React, { useContext, useEffect, useState } from 'react';
import "./Home.css";
import { CoinContext } from '../../context/CoinContext';
import { Link } from 'react-router-dom';

const Home = () => {

  const {allCoin, currency} = useContext(CoinContext)
  const [displayCoin,setDisplayCoin] = useState([]);
  const [input, setInput] = useState('')

  const inputHandler = (e) => {
    setInput(e.target.value);
    if(e.target.value === ''){
      setDisplayCoin(allCoin);
    }
  }

const searchHandler = async (e) => {
  // console.log('Form submitted:', e);
  e.preventDefault();
  const coins =  allCoin.filter((item)=>{
   return item.name.toLowerCase().includes(input.toLowerCase())
  })
  setDisplayCoin(coins)
}

  useEffect(()=>{
    setDisplayCoin(allCoin)
  },[allCoin])


  return (
    <div className='home'>
      <div className="hero">
        <h1>Largest <br/> Crypto MarketPlace</h1>
        <p>Welcome to the world's largest cryptocurrency marketplace. Sign up to explore more about cryptos. </p>


        {/* search box */}
        <form onSubmit={searchHandler} >
            <input onChange={inputHandler} list='coinlist' type="text" value={input} placeholder='Search crypto..'  required  className='text-black'/>
            
            {/* search box suggestion */}
            <datalist id='coinlist'>
              {allCoin.map((item, id)=>(
              <option key={id} value={item.name}/> 
             ))}
            </datalist>



            <button type='submit'>Search</button>
        </form>
      </div>

{/* display table  */}
      <div className="crypto-table">
        <div className="table-layout">
            <p>#</p>
            <p>Coins</p>
            <p>Price</p>
            <p style={{textAlign:"center"}}>24H Change</p>
            <p className='market-cap'>Market Cap</p>
        </div>
        {
          displayCoin.slice(0,10).map((item,id)=>(
            <Link to={`/coin/${item.id }`}>
            <div className="table-layout" key={id}>
                 <p>{item.market_cap_rank} </p>
                 <div> 
                  <img src= {item.image} alt="" />
                  <p>{item.name + " - "+ item.symbol} </p>

                 </div>
                 <p>{currency.symbol} {item.current_price.toLocaleString()} </p>
                 <p className={item.price_change_percentage_24h >0 ? "green": "red"} >{Math.floor(item.price_change_percentage_24h*100)/100} </p>
                 <p className='market-cap'>  {currency.symbol} {item.market_cap.toLocaleString()} </p>
            </div>
            </Link>
          ))
        }
      </div>


    </div>
  );
};

export default Home;
