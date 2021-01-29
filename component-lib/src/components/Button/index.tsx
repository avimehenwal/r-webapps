import React from 'react'; // we need this to make JSX compile

interface CardProps {
  title: string,
  paragraph: string
}

let defaultProps: CardProps = {
  title: 'Default Title',
  paragraph: 'Non eiusmod occaecat adipisicing ipsum cillum laborum excepteur amet quis et nostrud reprehenderit. Sit quis magna deserunt dolore elit laborum adipisicing non id commodo occaecat ut aliqua. Tempor veniam non eiusmod eu voluptate do elit adipisicing incididunt id nostrud consequat esse.'
}

export const Button = (props = defaultProps) =>
  <aside>
    <h2>{props.title}</h2>
    <p>
      {props.paragraph}
    </p>
  </aside>
