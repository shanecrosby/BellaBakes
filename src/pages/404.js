import * as React from "react"
import Layout from '../components/layout'; // Import the layout component
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const NotFoundPage = () => {
    const data = useStaticQuery(graphql`
    query {
        allFile(filter: {extension: { in: ["jpeg", "jpg", "png"] } }) {
            nodes {
                relativePath
                childImageSharp {
                    gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
                }
            }
        }
        bannerImage: file(relativePath: { eq: "mark-eder-R9OS29xJb-8-unsplash.jpg" }) {
            childImageSharp {
                gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
            }
        }
    }
`);
    return (
        <Layout>
            <main>
                    <GatsbyImage image={getImage(data.bannerImage)} alt="A sandy desert." className="banner-image" />
                    <h1 className="main-title cover blue">Page not found</h1>
            </main>
        </Layout>
    )
}

export default NotFoundPage

export const Head = () => <title>Not found</title>
