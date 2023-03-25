import axios from "axios";
import React from "react";
import { Alert } from "react-native";

const Sector = (props) => {
  // Alert.alert(props.teText);

  var data = JSON.stringify(
    `{\n      ${props.key1}: ${props.value1},\n      ${props.key2}: ${props.value2}\n      }: ''`
  );
  var config = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://app.trycarbonapi.com/api/${props.sector}?${props.key1}=${props.value1}&${props.key2}=${props.value2}`,
    headers: {
      Authorization:
      "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiNTc3MmVkM2Q2NmM5ZWNmMzk2NGZjYTI3NjU0OWFlOTcxNjMzNDY5MTY0ZGRkNzFmOWE0ZWQzMzU1YjZlYWQyYjJmYTgwMjA4MmJhMGU4MDciLCJpYXQiOjE2Nzk3NDYxODAsIm5iZiI6MTY3OTc0NjE4MCwiZXhwIjoxNzExMzY4NTc5LCJzdWIiOiIzOTg0Iiwic2NvcGVzIjpbXX0.lJz0i_McYFvvpICVl9eyWae-EVppw5ila8UsXi_fZstsG2x1BS-HuoIXxeGzVErdO_Uz-EPLhxA8iZKnW-eE1A",
      "Content-Type": "application/x-www-form-urlencoded",
      Cookie:
        "XSRF-TOKEN=eyJpdiI6InFBcjQ0U3laL1EvczNWa01icnVhdkE9PSIsInZhbHVlIjoiVGZFM3pLMi8vbmVIcGVYd1pIQTZaenExek1nVmVXRHZHUkpITnhaSGdvc0lwWHc3LzNuOCszSTBDcGJjbGJWYkRyYkJJcGEyeWdtZlRvWVkzMGYzaktFd0M1Zk4wNXRKWkpIbWpQbnIvZXVUWFB5Q1R3c1hUY1U4STVJTTRLdXYiLCJtYWMiOiI3YjUwYTY4YWNkYjg3MjcxMzg3YTc4OTJkZmM1ZDNmN2ZkMzlhNzAxNDI4NTcyYmE0ZDA3YzgyOWE3MzdhZDE4In0%3D; trycarbonapi_session=eyJpdiI6InBpQnhMS2hyZnJuTEl3aEc2OHpuY2c9PSIsInZhbHVlIjoiZk5mZ291WG5Rc01WdFhKVUJPbjg1Y1pIbHowY1Zpa1V3dEluSXp6VzdQNjNDYzhFejVVWXlaS0gwNGlwQkxYSW52MlZKT1pGSlRtMVZLT1lsUTBXMlhJeXJiOE5DWE40OHgwQmxnd0xWV0ZxZmNzVy9lQ0JRY05lUC9jUER3cG0iLCJtYWMiOiIwY2NjNDljMzMyYmNlNTViMTUyYzhhNDY5ZDEyYTc5ZTFiMjA1NjY4MWRkMmIxY2UyYmU1ZGM1N2NmNTdiN2Q3In0%3D",
    },
    data: data,
  };

  axios(config)
    .then(function (response) {
      const result = JSON.stringify(response.data.carbon);
      const numbers = parseFloat(result.match(/\d+(\.\d+)?/g)[0]);
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
    })    
    
};

export default Sector;
export var result;
