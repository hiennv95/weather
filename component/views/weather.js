import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View,
  ListView
} from 'react-native';
import ServiceW from './../providers/service2.js';


export default class Weather extends Component {
  //private ser= new ServiceW;
  constructor(props){
    super(props);
    this.state = {
    dataSource : new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),

    };

  }

  componentWillMount(){
    //   new Promise(resolve =>{ fetch('https://facebook.github.io/react-native/movies.json',{method:'GET'})
    //    .then((response) => response.json()).then((resp) =>{
    //     this.setState({
    //       dataSource:this.state.dataSource.cloneWithRows(resp.movies),
    //     })
    //   })
    // });
    ServiceW.getData().then((res)=>{
      console.log(res);
    });

  }
  itemListview(item){
    return(
      <View style={{margin:5,justifyContent:'center'}}>
        <Text style={{textAlign:'center'}}>
          {item.title}
        </Text>
        <Image  style={{width:50,height:50,justifyContent:'center'}} source={{uri:'https://facebook.github.io/react/img/logo_og.png'}}/>
        <Text style={{textAlign:'center'}}>
          {item.releaseYear}
        </Text>
      </View>
    )

  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
           />
        <Image
          style={{flex:1/2}}
          source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
        />
      <View style={{flex:1/2}}>
        <View style={{flex:1/3,justifyContent:'center'}} >
          <Text style={styles.welcome}>
            New DelHi
          </Text>
          <Text style={styles.time}>
            Wednesday 7:00 PM
          </Text>
        </View>
        <View style={{flex:1/3,justifyContent:'center'}}>
          <Text style={styles.templ}>26 *</Text>
        </View>
        <ListView style={{flex:1/3}} horizontal={true}
            dataSource={this.state.dataSource}
            renderRow={this.itemListview.bind(this)}
        />
        </View>

      </View>
    );
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  time:{
    fontWeight:"100",
    textAlign:'center',
    fontSize:14,
    color: '#BF360C',

  },
  templ:{
    fontWeight:"700",
    fontSize: 48,
    justifyContent:'center',
    textAlign: 'center',
    color: '#BF360C',
  },
  welcome: {
    fontWeight:"700",
    fontSize: 36,
    textAlign: 'center',
    color: '#BF360C',

  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
