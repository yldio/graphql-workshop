// Import React
import React from "react"
import YouTube from "react-youtube"

// Import Spectacle Core tags
import {
  Link,
  Deck,
  Heading,
  ListItem,
  List,
  Slide,
  Text,
  Fit,
  Layout,
  Image
} from "spectacle"
import images from "./images"

// Import theme
import createTheme from "spectacle/lib/themes/default"

// Require CSS
require("normalize.css")

const theme = createTheme(
  {
    primary: "white",
    secondary: "#1F2022",
    tertiary: "#03A9FC",
    quartenary: "#CECECE"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
)

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        progress="bar"
        transition={["fade"]}
        transitionDuration={500}
        theme={theme}
      >
        <Slide bgColor="secondary" textColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            Let's Learn GraphQL
          </Heading>
        </Slide>
        <Slide bgColor="secondary">
          <Layout
            style={{
              minWidth: 500,
              justifyContent: "space-between"
            }}
          >
            <Fit>
              <List
                style={{
                  padding: 0,
                  listStyle: "none",
                  margin: 0,
                  minWidth: 500
                }}
              >
                <ListItem textColor="primary">Sara Vieira</ListItem>
                <ListItem textColor="primary">Full Stack Developer</ListItem>
                <ListItem textColor="primary">@NikkitaFTW</ListItem>
                <ListItem
                  textColor="primary"
                  style={{ display: "flex", marginTop: 20 }}
                >
                  <Image
                    src={images.soccer}
                    style={{
                      width: 50,
                      height: 50,
                      margin: 0
                    }}
                  />
                  <Text textColor="primary" style={{ margin: 0 }}>
                    Football{" "}
                  </Text>
                </ListItem>
                <ListItem
                  textColor="primary"
                  style={{ display: "flex", marginTop: 20 }}
                >
                  <Image
                    src={images.zombie}
                    style={{
                      width: 50,
                      height: 50,
                      margin: 0
                    }}
                  />
                  <Text textColor="primary" style={{ margin: 0 }}>
                    Horror Movies
                  </Text>
                </ListItem>
                <ListItem textColor="primary" style={{ display: "flex" }}>
                  <Image src={images.train} />
                </ListItem>
              </List>
            </Fit>
            <Fit>
              <Image
                style={{
                  width: 350,
                  maxWidth: "inherit",
                  top: "50%",
                  position: "relative",
                  transform: "translateY(-50%)"
                }}
                src={images.YLDLogo}
              />
            </Fit>
          </Layout>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={2} textColor="primary" caps>
            Repo
          </Heading>
          <Link href="https://git.io/f4yA8" textColor="primary">
            https://git.io/f4yA8
          </Link>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={2} textColor="primary" caps>
            What is GraphQL?
          </Heading>
          <Image
            style={{ maxWidth: "40%" }}
            src="https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg"
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={2} textColor="primary">
            GraphQL is a query language for APIs.
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={2} textColor="primary">
            That's it!
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={6} textColor="primary" caps>
            Unlike rest you request exacly what you want
          </Heading>
          <Image style={{ maxWidth: "40%" }} src={images.one} />
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={2} textColor="primary">
            It's typed
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={2} textColor="primary">
            It has great tooling
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <YouTube videoId="oCT4HOJsUZQ" />
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <YouTube videoId="T571423fC68" />
        </Slide>
      </Deck>
    )
  }
}
