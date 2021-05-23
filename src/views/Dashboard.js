import React, { useState, useEffect, Fragment } from 'react';
import MainLayout from "../components/MainLayout";
import SideBar from "../components/SideBar";

const Dashboard = () => {
  const [userEmail, setUserEmail] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('token') === null) {
      window.location.replace('http://localhost:8000/');
    } else {
      fetch('http://127.0.0.1:8000/accounts/auth/login/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${localStorage.getItem('token')}`
        }
      })
        .then(res => res.json())
        .then(data => {
          setUserEmail(data.email);
          setLoading(false);
        });
    }
  }, []);

  return (
    <div>
      <MainLayout />
      <SideBar />
    </div>
  );
};

export default Dashboard;