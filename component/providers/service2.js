import React from 'react';

export default class ServiceW {

  getData() {
    return fetch('http://api.wunderground.com/api/ae9315bcbc999bfc/conditions/q/VN/Hanoi.json')
      .then((response) => {
          console.log(response);
          return response.json();
      }).then((resp)=>{
        console.log(resp);

      });

  }

}
