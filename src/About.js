import React from 'react'
import { Image, List, Icon } from 'semantic-ui-react'
import './about.css'

const About = () => {
  return (
    <div id="about">
      <div id="potrait-container">
      <Image id="potrait" src="/images/stephanie.jpg" />
      </div>
      <div id="bio-container">
        <h2>About Me</h2>
        <p id="bio">Stephanie, a NYC graphic designer, attended Penn State University. During her first year she discovered her love for design and typography after learning names like Chip Kidd, Alexey Brodovich, and Saul Bass. She has previously worked for SELF magazine and Architectural Digest. It was at Architectural Digest where she developed an interest for interior design. Currently she is the Senior Designer for Schumacher and Patterson Flynn Martin where she has been able to combine her love for all things creative.</p>
        <List bulleted horizontal link>
          <List.Item as="a" href="mailto:stephanie.diaz26@gmail.com" >
            <Icon name="mail" />
            Email Me
          </List.Item>
          <List.Item as="a" href="https://www.linkedin.com/in/stephanie-diaz-382ab561/" target="_blank">
              <Icon name="linkedin" />
              LinkedIn
          </List.Item>
        </List>
      </div>
    </div>
  )
}

export default About;
