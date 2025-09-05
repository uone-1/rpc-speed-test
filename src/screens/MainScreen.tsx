import { Layout } from "antd"
import React from 'react'
import { Outlet } from "react-router-dom"
import Header from "../components/Header"

const MainScreen = () => {
  return (
    <Layout>
      <Header />

      <Layout.Content>
        <Outlet />
      </Layout.Content>
    </Layout>
  )
}

export default MainScreen