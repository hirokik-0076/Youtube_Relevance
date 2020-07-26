import React from 'react';

const Home: React.FC = () => {
  return(
    <h1>Home</h1>
  )
}

const Relevance: React.FC = () => {
  return(
    <h1>Relevance</h1>
  )
}

const Routes = [
  {
    path: '/',
    sidebarName: 'Home',
    component: Home
  },
  {
    path: '/relevance',
    sidebarName: "Relevance",
    component: Relevance
  }
]

export default Routes;