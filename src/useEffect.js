import React from 'react'
import {useEffect, useState} from 'react';
import $ from 'jquery';

function UseEffect() {

    const [data, setData] = useState("");

    useEffect(() => {
        $.ajax({
            type: 'GET',
            url: 'https://jsonplaceholder.typicode.com/comments'
        })
        .done(data=>{
            setData(data[0].email)
        })
    },[])

  return (
    <div>{data}</div>
  )
}

export default UseEffect;