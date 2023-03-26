import axios from "axios";
import React, {useEffect} from "react";
import { Alert } from "react-native";

var numbers = 0;
var data = [];
const Sector = (props) => {

  var data = JSON.stringify(
    `{\n      ${props.key1}: ${props.value1},\n      ${props.key2}: ${props.value2}\n      }: ''`
  );
  var config = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://app.trycarbonapi.com/api/${props.sector}?${props.key1}=${props.value1}&${props.key2}=${props.value2}`,
    headers: {
      Authorization:
      "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiYzJlODNiMGZjYjk1MWQ5YWFmNzgyNTQ5MGNhMDJlMjkyNGRmN2IyYzE2NjZkOWMyYWRjNGUxYWYzMGU2MzRmNmJlODE3OWUxMWQ1ODc4MjUiLCJpYXQiOjE2Nzk4MTI3NjcsIm5iZiI6MTY3OTgxMjc2NywiZXhwIjoxNzExNDM1MTY3LCJzdWIiOiI0MDM0Iiwic2NvcGVzIjpbXX0.S_Fqlh7_vqDVrs1SXMvGYcNgqOzcHIPUQIQQFj71WZZ1xjWYoKCVr_7bAm96Mz9NW94OGVNQam7fAXdVSCc_ZA",
      "Content-Type": "application/x-www-form-urlencoded",
      Cookie:
        "XSRF-TOKEN=eyJpdiI6InFBcjQ0U3laL1EvczNWa01icnVhdkE9PSIsInZhbHVlIjoiVGZFM3pLMi8vbmVIcGVYd1pIQTZaenExek1nVmVXRHZHUkpITnhaSGdvc0lwWHc3LzNuOCszSTBDcGJjbGJWYkRyYkJJcGEyeWdtZlRvWVkzMGYzaktFd0M1Zk4wNXRKWkpIbWpQbnIvZXVUWFB5Q1R3c1hUY1U4STVJTTRLdXYiLCJtYWMiOiI3YjUwYTY4YWNkYjg3MjcxMzg3YTc4OTJkZmM1ZDNmN2ZkMzlhNzAxNDI4NTcyYmE0ZDA3YzgyOWE3MzdhZDE4In0%3D; trycarbonapi_session=eyJpdiI6InBpQnhMS2hyZnJuTEl3aEc2OHpuY2c9PSIsInZhbHVlIjoiZk5mZ291WG5Rc01WdFhKVUJPbjg1Y1pIbHowY1Zpa1V3dEluSXp6VzdQNjNDYzhFejVVWXlaS0gwNGlwQkxYSW52MlZKT1pGSlRtMVZLT1lsUTBXMlhJeXJiOE5DWE40OHgwQmxnd0xWV0ZxZmNzVy9lQ0JRY05lUC9jUER3cG0iLCJtYWMiOiIwY2NjNDljMzMyYmNlNTViMTUyYzhhNDY5ZDEyYTc5ZTFiMjA1NjY4MWRkMmIxY2UyYmU1ZGM1N2NmNTdiN2Q3In0%3D",
    },
    data: data,
  };

  axios(config)
    .then(function (response) {
      const result = JSON.stringify(response.data.carbon);
      numbers = parseFloat(result.match(/\d+(\.\d+)?/g)[0]);
    //   Alert.alert(`${result}`);
    //   console.log(result);
    //   console.log(numbers);
    //   props.status(false);
    Alert.alert(
      'Carbon Emission Calculated',
      `${result}`,
      [
        {text: 'Ok', onPress: () => console.log('Yes button clicked')},
        {text: 'Cancel', onPress: () => console.log('No button clicked'), style: 'cancel'},
      ],
      { 
        cancelable: true 
      }
    )
  console.log(result);
    console.log(numbers);
    props.status(false);
    addValues();
    
    })  
      
};

function addValues() {
  console.log("value of numbers is:" + numbers);
  data.push(numbers);
  console.log(data);
}

export const TotalSum = (props) => {
  let sum = 0;
  for(let i=0;i<data.length;i+=1){
    sum += data[i];
  }
  console.log(sum);
  Alert.alert(
    'Total Carbon Emitted',
    `${sum}`,
    [
      {text: 'Ok', onPress: () => console.log('Yes button clicked')},
      {text: 'Cancel', onPress: () => console.log('No button clicked'), style: 'cancel'},
    ],
    { 
      cancelable: true 
    }
  )
  useEffect(() => {
    props.resultStatus(true);
  }, []);
}

export default Sector;
export var result;
  