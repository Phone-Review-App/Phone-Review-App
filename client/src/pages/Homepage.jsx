import React, { useState, useEffect } from "react";
import axios from 'axios';
import './Homepage.css';
import Card from '../components/Card'
import DropdownMenu from '../components/DropdownMenu'; // Remove me after test
import MyComponent from '../components/MyComponent'; // Remove me after test
import Radio from '../components/Radio'; // Remove me after test


const Homepage = () => {
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    getProviders();
  },[])

  async function getProviders() {
    const fetchedProviders = await axios.get('/api/providers');
    setProviders(fetchedProviders.data)
  }

  return (
    <>
    <div className="grid-container">
    {
      providers.map((provider) => {
        return (
          <Card 
            cardName={provider.name}
            img_url={provider.img_url}
            averageScore={provider.overall}
            english_support={provider.english_support}
            site_url={provider.site_url}
            description={provider.description}
          />
        )
      })
    }
  </div>
  
  <DropdownMenu /> 
  <MyComponent />
  <Radio />
    </>
    
  );
};

export default Homepage;