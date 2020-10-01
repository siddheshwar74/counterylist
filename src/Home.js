import React from 'react';

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            regions: [{name:'Asia',param:'asia'},{name:'Europe',param:'europe'}],
            selectedRegion:{name:'Asia',param:'asia'},
            countries:[],
            countryInfo:null
          };
    }

    componentDidMount() {
        this.apiCall(this.state.selectedRegion);
      }

      apiCall(term){
        fetch("https://restcountries.eu/rest/v2/region/"+term.param)
          .then(res => res.json())
          .then(
            (result) => {
              
              this.setState({
                countries: result
              });
            },
            (error) => {
              
            }
          )
      }

    selectCountry(country){
     this.setState({countryInfo:country});
    }

    selectRegion(region){
      this.setState({selectedRegion:region,countries:[],countryInfo:null});
      this.apiCall(region);
    }
    showRegions(){
      return this.state.regions.map((region,i) => <div key={i} onClick={() => this.selectRegion(region)} className={'region-box mt-2' + (this.state.selectedRegion.name === region.name ? ' active' : '')}>{region.name}</div>)
    }

    showCountryInfo(){
      let countryInfo = this.state.countryInfo;
      let selectedRegion = this.state.selectedRegion;
      return countryInfo!==null && (
        <div className="country-details">
        <div className="selected-region">
        {selectedRegion.name} /<span>{this.state.countryInfo.name}</span>
      </div>
      <div className="float-left w-100 country-flag-name">
        <div className="float-left countery-flag">
             <img src={this.state.countryInfo.flag} alt={countryInfo.name} className="flag-img-view"></img>
        </div>
        <div className="float-left ml-4 contory-div">
          <div className="country-name">{countryInfo.name} <span>({countryInfo.cioc})</span></div>
           <div className="country-capital">{countryInfo.capital}</div>
         </div>
      </div>
      <div className="row country-info-main">
        <div className="col-lg-6 pl-0">
          <div className="info-box">
           <label>Demonym</label>
           <div>{countryInfo.demonym}</div>
          </div>										
        </div>
        <div className="col-lg-6 pl-0">
          <div className="info-box">
          <label>Calling Code</label>
     <div>{countryInfo.callingCodes[0]}</div>
          </div>            
        </div>
        <div className="col-lg-6 pl-0">
        <div className="info-box">
           <label>Currency</label>
           <div>{countryInfo.currencies[0].symbol} {countryInfo.currencies[0].name}</div>
         </div>
        </div>
        <div className="col-lg-6 pl-0">
           <div className="info-box">
             <label>Population</label>
             <div>{countryInfo.population}</div>
           </div>
        </div>
      </div>
 </div>
      )
    }

    showCountries(){
        if (this.state.countryInfo !== null){
          return this.state.countries.map((country,i) => 
          <div key={i}>
            <div onClick={() => this.selectCountry(country)}  className={'country-box mt-2' + (this.state.countryInfo.name === country.name ? ' active' : '')}>
              <div className="float-left country-name-left">{country.name}</div>
              <div className="float-right"><img src={country.flag} alt={country.name} className="flag-img"></img></div>
            </div>
          </div>
          )
        }else{
          return this.state.countries.map((country,i) => 
          <div key={i}>
            <div onClick={() => this.selectCountry(country)} className='country-box mt-2'>
              <div className="float-left country-name-left">{country.name}</div>
              <div className="float-right"><img src={country.flag} alt={country.name} className="flag-img"></img></div>
            </div>
          </div>
          )
        }     
    }
   render() {
      return (
         <div>
           <div className="container">
            <div className="row main-row">
              <div className="col-lg-2 col-md-3">
                  <div className="selected-label">Select a Region</div>
                  {this.showRegions()}       
              </div>
              <div className="col-lg-5 col-md-5">
                  <div className="conuntery-div float-right">
                  <div className="selected-label">Select a Country</div>
                  <div className="country-wrapper">
                    {this.showCountries()}
                  </div>
                  </div>
                 
              </div>
              <div className="col-lg-5 col-md-4">
                {this.showCountryInfo()}
                 </div>
            </div>
           </div>
         </div>
      );
   }
}

export default Home;