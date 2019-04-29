import React from 'react';
import {Button } from 'reactstrap';

//Css
import '../../global/css/bootstrap.css';



const article = (props)=>(
  <tr key={props.id}>
    <td>{props.name}</td>
    <td>{props.description}</td>
    <td>{props.price}</td>
    <td>{props.store_name}</td>
    <td>{props.total_in_shelf}</td>
    <td>{props.total_in_vault}</td>
    <td><Button outline color="danger" size="sm">x</Button></td>
  </tr>
);

export default article;
