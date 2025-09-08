import { Layout } from "antd"
import React from 'react'
import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"

const MainScreen = () => {
  return (
    <Layout>
      <Header />
      <Layout.Content>
        <Outlet />
      </Layout.Content>
      <Footer/>
    </Layout>
  )
}

export default MainScreen