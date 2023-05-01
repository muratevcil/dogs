import {useState,useEffect} from 'react';
import {useFetch} from "./useFetch.js";
const {data,isPending,error} = useFetch("https://www.dbrawl.com/api/mlbb/getMatchByRoomName/BROTEST3");
console.log(data);