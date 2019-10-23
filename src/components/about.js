import React from 'react';
import kashpirovskiy from '../images/kashpirovskiy.jpg'


export default class About extends React.Component {
  render() {
    return (
      <div>
        <h1>About</h1>
        <div className="about-content">
          <img src={kashpirovskiy} alt=""/>
          <p>
            Пускай эта страница будет наполнена положительной энергетикой Кашпировского.
            Теперь Вы можете подставлять стакан с водой к монитору, и заряжать её. 
          </p>
        </div>
      </div>
    )
  }
}
