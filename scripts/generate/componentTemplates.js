// component.tsx
exports.component = (name) => `import React from 'react';
import styles from './${name}.module.scss';
interface ${name}Props {}
export const ${name}: React.FC<${name}Props> = ({}) => (
  <div>Hello 👋, I am a ${name} component.</div>
);
`;

// storybook
exports.story = (name) => `import { ComponentStory } from "@storybook/react";

import { ${name} } from "./${name}";

export const Default: ComponentStory<typeof ${name}> = (args) => (
  <${name} {...args} />
);

Default.args = {};

const ${name}Meta = {
  title: "Foundry UI/${name}",
  component: ${name},
};

export default ${name}Meta;
`;

// component.test.tsx
exports.test = (name) => `import React from 'react';
import { render } from '@testing-library/react';
import { ${name} } from '../${name}';
describe('${name} Component', () => {
  test('it should match the snapshot', () => {
    const { asFragment } = render(<${name} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
`;

// index.ts
exports.barrel = (name) => `export { ${name} } from './${name}';
`;
