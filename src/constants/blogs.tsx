import streamsBuffers from 'public/images/streams_buffers.png';
import eventLoop from 'public/images/event_loop_phases.png';
import nodejsArchitecture from 'public/images/node_architecture.png';
import jsScope from 'public/images/js_scope.png';

export const blogs = [
  {
    href: 'https://web-dev-soumadip.hashnode.dev/understanding-nodejs-streams-and-buffers-a-practical-guide',
    title: 'Node.js Streams & Buffers',
    description:
      'Learn how Node.js streams and buffers work under the hood, and how to use them effectively in your applications.',
    thumbnail: streamsBuffers,
    stack: ['Nodejs', 'Backend'],
  },
  {
    href: 'https://web-dev-soumadip.hashnode.dev/demystifying-nodejs-event-loop-phases',
    title: 'Node.js Event Loop Phases',
    description: 'Demystify Node.js event loop phases and learn how they work under the hood.',
    thumbnail: eventLoop,
    stack: ['Nodejs', 'Backend'],
  },
  {
    href: 'https://web-dev-soumadip.hashnode.dev/nodejs-architecture-the-engine-behind-scalable-apps',
    title: 'Node.js Architecture',
    description:
      'Learn how Node.js architecture works under the hood, and how to design scalable applications.',
    thumbnail: nodejsArchitecture,
    stack: ['Nodejs', 'Backend'],
  },
  {
    href: 'https://web-dev-soumadip.hashnode.dev/understanding-javascript-scope',
    title: 'JavaScript Scope & Execution',
    description:
      'Learn how JavaScript scope and execution works under the hood, including hoisting, closures, and lexical scoping.',
    thumbnail: jsScope,
    stack: ['JavaScript', 'Frontend'],
  },
];
