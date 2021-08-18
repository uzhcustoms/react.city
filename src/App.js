import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import {Validation} from './validation.js';


let city = {name: "Ужгород", 
            info: `У́жгород (укр. Ужгород) — город и территориальная община на западе Украины. Административный центр Закарпатской области, Ужгородского района и Ужгородско-Мукачевской агломерации.
                  Первое письменное упоминание о городе сделано арабским путешественником Аль-Идриси в 1154 году. Как свидетельствуют исторические документы, со времени первого упоминания фактически до конца Первой мировой войны город имел только одно название: Унгвар (венг. Ungvár, видоизменения Гункбар, Гугвар, Онгвар). Само слово состоит из двух частей: «Унг» и «вар». Что касается второй из них, здесь учёные единодушны, так как слово vár в венгерском языке означает «укрепление, крепость, замок» (в венгерский язык оно попало из одного из иранских). Большие дискуссии вызывает этимология слова «Унг». В 1860 году один из первых историков города Карой Мийсарош (1821—1890) утверждал, что «Унг» якобы означает «быстрый». Между тем, для определения указанного понятия в славянских языках употребляются совершенно другие слова. Один из исследователей Эде Маукс, опираясь на то, что среди кочующих тюркских народов вожди племён назывались «онг», и поскольку, согласно историческим трудам венгерского автора Анонима (нач XIII века), Арпад — один из вождей древних угров в конце IX — начале X веков — захватил Ужгород, то и крепость (город) получила название «Онгвар» («Унгвар»). Однако, как выяснилось, Арпад имел титул «юли» или «Дюлы» (из чего позже возникло собственное имя Дюла), а не «онг». Не подтверждается и предположение Пал Ясои, что это название происходит от имени посла восточно-римского императора Феодосия Онегеса, направленного к королю гуннов Аттиле (V век). Иван Раковский считал, что название Унгвар более славянское, чем Ужгород, и происходит от таких слов, как Уг (Унг), означающее Юг (река Унг (Уг по-словацки), сегодняшний Уж, течёт на юг) и слова «тваръ» (творить, твердыня, крепость), из которого выпала буква «т» и оно получило форму вар.`,
            sight: {name: "Липовая аллея", title: "Культурные объекты и достопримечательности", url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/04/96/10/3b/caption.jpg?w=600&h=600&s=1"},
            otherSight: [{name: "Ужгородский замок", title: "Специализированные музеи", url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/b0/2e/aa/uzhhorod-castle-in-spring.jpg?w=800&h=800&s=1"}, 
                        {name: "Крестовоздвиженский кафедральный собор", title: "Церкви и соборы", url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/d6/f0/ec/cross-exaltation-cathedral.jpg?w=700&h=700&s=1"},
                        {name: "Закарпатский музей народной архитектуры", title: "Специализированные музеи", url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/83/b1/50/cerkiew-michala-archaniola.jpg?w=800&h=800&s=1"},
                      {name: "Липовая аллея", title: "Культурные объекты и достопримечательности", url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/04/96/10/3b/caption.jpg?w=600&h=600&s=1"}],
            img: [{id:1, url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Aerial_view_Uzhhorod_-Amphitheatre-0308.jpg/1024px-Aerial_view_Uzhhorod_-Amphitheatre-0308.jpg"},
                {id:2, url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/21-101-0044_Uzgorod02.jpg/1280px-21-101-0044_Uzgorod02.jpg"},
                {id:3, url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Uzhhorod%2C_Zakarpats%27ka_oblast%2C_Ukraine_-_panoramio_%2897%29.jpg/1280px-Uzhhorod%2C_Zakarpats%27ka_oblast%2C_Ukraine_-_panoramio_%2897%29.jpg"},
                {id:4, url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/UzhhorodBridge2.jpg/1024px-UzhhorodBridge2.jpg"},
                {id:5, url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/%D0%92%D0%B8%D1%85%D1%96%D0%B4_%D0%B7_%D0%A2%D0%B5%D0%B0%D1%82%D1%80%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D1%97_%D0%BF%D0%BB%D0%BE%D1%89%D1%96_%D0%BD%D0%B0_%D0%B2%D1%83%D0%BB._%D0%9A%D0%BE%D1%80%D0%B7%D0%BE.jpg/1024px-%D0%92%D0%B8%D1%85%D1%96%D0%B4_%D0%B7_%D0%A2%D0%B5%D0%B0%D1%82%D1%80%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D1%97_%D0%BF%D0%BB%D0%BE%D1%89%D1%96_%D0%BD%D0%B0_%D0%B2%D1%83%D0%BB._%D0%9A%D0%BE%D1%80%D0%B7%D0%BE.jpg"},
                {id:6, url: "http://www.mukachevo.net/Content/img/news/626/p_626894_1_slidertop2.jpg"},
                {id:7, url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Aerial_view_Uzhhorod_-Amphitheatre-0308.jpg/1024px-Aerial_view_Uzhhorod_-Amphitheatre-0308.jpg"},
                {id:8, url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/21-101-0044_Uzgorod02.jpg/1280px-21-101-0044_Uzgorod02.jpg"},
                {id:9, url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Uzhhorod%2C_Zakarpats%27ka_oblast%2C_Ukraine_-_panoramio_%2897%29.jpg/1280px-Uzhhorod%2C_Zakarpats%27ka_oblast%2C_Ukraine_-_panoramio_%2897%29.jpg"},
                {id:10, url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/UzhhorodBridge2.jpg/1024px-UzhhorodBridge2.jpg"},
                {id:11, url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/%D0%92%D0%B8%D1%85%D1%96%D0%B4_%D0%B7_%D0%A2%D0%B5%D0%B0%D1%82%D1%80%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D1%97_%D0%BF%D0%BB%D0%BE%D1%89%D1%96_%D0%BD%D0%B0_%D0%B2%D1%83%D0%BB._%D0%9A%D0%BE%D1%80%D0%B7%D0%BE.jpg/1024px-%D0%92%D0%B8%D1%85%D1%96%D0%B4_%D0%B7_%D0%A2%D0%B5%D0%B0%D1%82%D1%80%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D1%97_%D0%BF%D0%BB%D0%BE%D1%89%D1%96_%D0%BD%D0%B0_%D0%B2%D1%83%D0%BB._%D0%9A%D0%BE%D1%80%D0%B7%D0%BE.jpg"},
                {id:12, url: "http://www.mukachevo.net/Content/img/news/626/p_626894_1_slidertop2.jpg"}],
            coat: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Coat_of_arms_of_the_city_of_Uzhhorod.svg/800px-Coat_of_arms_of_the_city_of_Uzhhorod.svg.png"
    }
    console.log(city);

function InfoСity() {
  return (
    <div className="info">
     <h1>{city.name} </h1>
      <p>{city.info}</p>
    </div>
  );
}

function Sight() {
    return (
    <div className="info">
      <img src={city.sight.url} alt="" width="30%"></img>
      <h4>{city.sight.name} </h4>
      <span>{city.sight.title}</span>
    </div>
  )
}

function OtherSight() {
  return (
    <div className="otherSight">
    {city.otherSight.map((item) => <div className="info">
      <img src={item.url} alt="" width="100%"></img>
      <h4>{item.name} </h4>
      <span>{item.title}</span>
    </div>) }
    </div>
  );
}

function AvtorImg(props) {
  // const id = props.match.params.id;
 
  return (
    <div className="gallery">
      {city.img.map((item) => 
      <div className="gallery-item">
          <a key={item.id} href={item.url} target="_blank" rel="noreferrer">
          <img className="imgs" src={item.url} width="100%" alt=""></img>
          </a>
      </div>
      )}
    </div>
  );
}

AvtorImg.defaultProps = [
city.img
]

function Complid() {
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Заявка прийнята!</h2>
    </div>
  );
}

function Form({ submitForm }) {
  const [values, setValues] = useState({
    name: "",
    pasword: "",
    mail: "",
    area: ""
  });
  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };
  const [dataCorect, setDataCorect] = useState(false);
  const [errors, setErrors] = useState({});
  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
    setDataCorect(true);
    console.log(values);
    console.log(Validation(values));
  };
  useEffect(() => {
    if (Object.keys(errors).length === 0 && dataCorect) {
      submitForm(true);
    }
  });
  return (
    <div className="form">
      <form>
        <label>Имя</label>
        <input
          type="text"
          placeholder="Имя"
          name="name"
          value={values.name}
          onChange={handleChange}
        />
        {errors.name && <p className="errors">{errors.name}</p>}
        <label>Пароль</label>
        <input
          type="password"
          placeholder="Пароль"
          name="pasword"
          value={values.pasword}
          onChange={handleChange}
        />
        {errors.pasword && <p className="errors">{errors.pasword}</p>}
        <label>Email</label>
        <input
          type="email"
          placeholder="Email"
          name="mail"
          value={values.mail}
          onChange={handleChange}
        />
        {errors.mail && <p className="errors">{errors.mail}</p>}
        <input style={{ marginTop: "25px" }} type="file" name="file" />
        <textarea
          style={{ marginTop: "25px" }}
          name="area"
          placeholder="Опис фото"
          value={values.area}
          onChange={handleChange}
        ></textarea>
        {errors.area && <p className="errors">{errors.area}</p>}
        <input
          style={{ marginTop: "25px" }}
          type="submit"
          onClick={handleSubmit}
        />
      </form>
    </div>
  );
}

function City() {
  return (
    <div className="nav">
      <img src={city.coat} alt="" width="40px"></img>
      <Link to="/info" className="links">
        Информация
      </Link>
      <Link to="/sight" className="links">
        Достопримечательность
      </Link>
      <Link to="/galery" className="links">
        Другие достопримечательности
      </Link>
            <Link
        to={`/img/1?&url=${city.img[0].url}`}
        className="links"      >
        Галерея
      </Link>
       <Link to="/form" className="links">
        Добавить фото
      </Link>
    </div>
  );
}

function GetForm() {
  const [formSubmit, setFormSubmit] = useState(false);
  const submitForm = () => {
    setFormSubmit(true);
  };
  return(
    <div>
      {!formSubmit ? <Form submitForm={submitForm} /> : <Complid />}
    </div>
  )

}
export default function App() {
  
  return (
    <div className="App">
      <Router>
        <div>
          <City />
          <Switch>
            <Route exact path="/" component={InfoСity} />
            <Route path="/info" component={InfoСity} />
            <Route path="/sight" component={Sight} />
            <Route path="/galery" component={OtherSight} />
            <Route path="/img/:id" component={AvtorImg} />
            <Route path="/form" component={GetForm} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}


