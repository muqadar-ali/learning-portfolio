import * as React from "react"
import Layout  from "../components/layout"
import { StaticImage } from 'gatsby-plugin-image'


const IndexPage = () =>{
  return (
    <Layout pageTitle="Muqadar Ali Jamali">
      <p>This is my home page using gatsby tutorial </p>
      <StaticImage 
        alt="me" 
        src="../images/profile.jpg"
      />
    </Layout>
    
  )
}

export default IndexPage