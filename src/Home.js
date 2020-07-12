import React from 'react';

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            items: [],
            value:''
          };
    }

    componentDidMount() {
        this.apiCall(null);
      }

      apiCall(term){
          console.log(term);
          let encoded = encodeURI(term);
          console.log(encoded);
        fetch("https://itunes.apple.com/search?term="+encoded)
          .then(res => res.json())
          .then(
            (result) => {
                console.log(result.results)
              this.setState({
                items: result.results
              });
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              
            }
          )
      }

    handleChange(e){
        console.log(e.target.value);
        this.apiCall(e.target.value);
    }
   render() {
    const { items } = this.state;
      return (
         <div>
           <input type="text" onChange={this.handleChange.bind(this)}></input>
           <ul>
           {items.map(item => (
            <li key={item.trackId}>
              {item.artistName} {item.collectionName} {item.collectionPrice}
            </li>
          ))}
           </ul>
         </div>
      );
   }
}

export default Home;

