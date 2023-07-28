import React, { useState, useEffect, useCallback} from 'react';
import { Button } from '@mui/material';
import './App.css';

import { collection, getDocs } from "firebase/firestore";
import { db } from './firebase';
function App() {

  const [datas, setDatas] = useState([]);
  const usersCollectionRef = collection(db, "certificate");

  useEffect(() => {
    const getData = async () => {
      const data = await getDocs(usersCollectionRef);
      setDatas(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getData();

  },[setDatas] )

  return (
    <div className="App">
      <div className='title'>
        Certificates
      </div>
      {
        datas.map((data) => {
          return data.data.map((dat) => {
            return (
              <>
                <div className='img'>
                  <img src={dat.image} />
                </div>
                <div className='button'>
                  <Button style={{ backgroundColor: '#192E76' }} variant="contained" href={dat.pdf}>Download</Button>
                </div>
                <hr style={{ width: '80%' }}></hr>
              </>
            )
          })
        })
      }

    </div>
  );
}

export default App;
