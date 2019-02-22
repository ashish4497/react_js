import React, {  Component, Fragment} from 'react';
import News from '../components/News';


class CountryInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country:[
        {
          ae: "The United Arab Emirates"
        },
        {
          ar: "The Argentine Republic"
        },
        {
          at: "The Republic of Austria"
        },
        {
          au: "The Commonwealth of Austia"
        },
        {
          br: "The Federative Republic of Brazil"
        },
        {
          ca: "Canada"
        },
        {
          ch: "The Swiss Confederation"
        },
        {
          cn: "The People's Republic of China"
        },
        {
          co: "The Republic of Colombia"
        },
        {
          cu: "The Republic of Cuba"
        },
        {
          cz: "The Czech Republic"
        },
        {
          de: "The Federal Republic oralia"
        },
        {
          be: "The Kingdom of Belgium"
        },
        {
          bg: "The Republic of Bulgarf Germany"
        },
        {
          eg: "The Arab Republic of Egypt"
        },
        {
          fr: "The French Republic"
        },
        {
          gb: "The United Kingdom of Great Britain and Northern Ireland"},

          {gr: "The Hellenic Republic"},
        {
          hk: "The Hong Kong Special Administrative Region"
        },
        {
          hu: "Hungary"
        },
        {
          id: "The Republic of Indonesia"
        },
        {
          ie: "Ireland"
        },
        {
          il: "The State of Israel"
        },
        { in: "The Republic of India"
        },
        {
          it: "The Italian Republic"
        },
        {
          jp: "Japan"
        },
        {
          kr: "The Republic of Korea"
        },
        {
          lt: "The Republic of Lithuania"
        },
        {
          lv: "The Republic of Latvia"
        },
        {
          ma: "The Kingdom of Morocco"
        },
        {
          mx: "The United Mexican States"
        },
        {
          my: "Malaysia"
        },
        {
          ng: "The Federal Republic of Nigeria"
        },
        {
          nl: "The Kingdom of the Netherlands"
        },
        {
          no: "The Kingdom of Norway"
        },
        {
          nz: "New Zealand"
        },
        {
          ph: "The Republic of the Philippines"
        },
        {
          pl: "The Republic of Poland"
        },
        {
          pt: "The Portuguese Republic"
        },
        {
          ro: "Romania"
        },
        {
          rs: "The Republic of Serbia"
        },
        {
          ru: "The Russian Federation"
        },
        {
          sa: "The Kingdom of Saudi Arabia"
        },
        {
          se: "The Swiss Confederation"
        },
        {
          sg: "The Republic of Singapore"
        },
        {
          si: "The Republic of Slovenia"
        },
        {
          sk: "The Slovak Republic"
        },
        {
          th: "The Kingdom of Thailand"
        },
        {
          tr: "The Republic of Turkey"
        },
        {
          tw: "The Republic of China"
        },
        {
          ua: "Ukraine"
        },
        {
          us: "The United States of America"
        },
        {
          ve: "The Bolivarian Republic of Venezuela"
        },
        {
          za: "The Republic of South Africa"
        }
      ],
      newsinfo:[],
      category : ["business", "entertainment", "general", "health", "science", "sports", "technology"],
      categoeryInfo : "",
      countryInfo : ""
    }
    // this.countrynews = this.countrynews.bind(this);
    this.handlefetch = this.handlefetch.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.countryInfo = this.countryInfo.bind(this)
    this.searchNews = this.searchNews.bind(this)
  }
  // this.setState({info: this.state.country})
  //  countrynews (e) {

  //   // this.setState({countryInfo : e.target.value})
  //   // var countrynews = (e.target.value);
  //   // console.log(countrynews)
  //   // this.handlefetch(countrynews)
  // }
  handleChange (e) {
    this.setState({categoeryInfo : e.target.value})
    // var cat = (e.target.value)
  }
  countryInfo (e) {
    // console.log(e)
    this.setState({countryInfo: e.target.value})
  }
  searchNews (e) {
    var queary = e.target.value;
    fetch(`https://newsapi.org/v2/everything?q=${queary}&apiKey=9b6e4ba310984f1eb99e6246ec316f40`)
    .then((res ) => res.json()).then((data)=> {console.log(data)
      this.setState({newsinfo:data})
    })
  }
  handlefetch (countrynews) {
   fetch(`https://newsapi.org/v2/top-headlines?country=${this.state.countryInfo}&category=${this.state.categoeryInfo}&apiKey=9b6e4ba310984f1eb99e6246ec316f40`)
    .then((res ) => res.json()).then((data)=> {console.log(data)
      this.setState({newsinfo:data})
    })
  }
  
  render() {
    return ( 
    <Fragment>
      <div className= "main-seaction">
        <div className="country_name">
        <div className="col-1">
           <div className ="search-button">
             <input type="text" placeholder="search news" className="country-search" onKeyUp = {this.searchNews}/>
           </div>
           <select className= "select-category"  onChange={this.handleChange}>
             <option className="select-category">category</option>
             {
               this.state.category.map((value,id) => {
                 return  <option  value = {value} key={id}> {value} </option>
               })
             }
           </select>
          <select className ="listof_country" onChange={this.countryInfo}>
          <option>Get news by Country</option>
          {
            this.state.country.map((value,id) => 
            {
              // console.log(Object.keys(value)[0],"hyy")
              return <option value = {Object.keys(value)[0]} key={id}>{Object.values(value)[0]}</option>
            })
          } 
          </select>
          <button className="sumit-news"onClick ={this.handlefetch}>submit</button>
        </div>
        <div className="col-2">
          <h4 className="title">news</h4>
          <section className="header_seaction">
            <News countrynews ={this.state.newsinfo.articles}/>
          </section>
        </div>
        </div>
      </div>
      </Fragment>
    )
  }
}
export default CountryInfo;