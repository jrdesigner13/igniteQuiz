export const QUIZ = [
  {
    id: '1',
    title: 'Using states',
    level: 1,
    questions: [
      {
        title: 'Hooks are a way to work with functions in React instead of classes. useState and useEffect are examples of well-used hooks. However, it is not yet possible to create our own hooks.',
        alternatives: [
          'True',
          'False'
        ],
        correct: 0
      },
      {
        title: 'Immutability in React is very important because if we directly mutate the value of a state instead of replacing it with a new value, your component will not correctly re-render.',
        alternatives: [
          'True',
          'False'
        ],
        correct: 0
      },
      {
        title: 'About rendering in React, check the incorrect alternative:',
        alternatives: [
          'There are two common cases where a React component renders: the initial component rendering and state updates.',
          'Re-renders typically do not recreate all components like the initial render',
          'An update to a state of a parent component can cause a child (nested) component to be re-rendered.',
          'React does not follow a defined flow when rendering a screen, and the process steps can vary a lot.'
        ],
        correct: 0  
      },
    ]
  },
  {
    id: '2',
    title: 'Using Typescript',
    level: 2,
    questions: [
      {
        title: "What type of assignment is this variable, `const fullName: string = 'Dylan Israel';`?",
        alternatives: [
          'Explicit',
          'Implicit'
        ],
        correct: 0
      },
      {
        title: "What is the type of `const exemplo = ['Dylan']`?",
        alternatives: [
          'unknown[]',
          'string',
          'string[]',
          'any[]'
        ],
        correct: 2
      },
      {
        title: "keyof can be used with index signatures to extract the index type.",
        alternatives: [
          'True',
          'False',
        ],
        correct: 0
      },
    ]
  },
  {
    id: '3',
    title: 'React Navigation',
    level: 2,
    questions: [
      {
        title: 'What is the best description to identify Stack Navigator?',
        alternatives: [
          'Adds a sticky menu to the bottom of the device, making it easier to access frequently used screens.',
          'When opening a new screen, this new screen is placed on top of the navigation stack and when returning screens, they are removed from this stack.',
          'Adds a side menu, occupying the entire height of the device. At first this menu is hidden and you can open the menu by dragging the screen.'
        ],
        correct: 1
      },
      {
        title: 'By “typing” the routes, you have the advantage of knowing at the time of navigation whether a route receives parameters or not and what format the parameters are in.',
        alternatives: [
          'True.',
          'False'
        ],
        correct: 0
      },
      {
        title: 'About the NavigationContainer it is correct to say.',
        alternatives: [
          'The NavigationContainer is the component in which we create a route in the application, passing it the properties "name" and "component".',
          'The NavigationContainer is a “hook” exported from within react navigation that allows us to access functions like "navigate" and "goBack".',
          'The NavigationContainer is a context that shares all routes and navigation properties with our application.'
        ],
        correct: 2
      },
    ]
  },
  {
    id: '4',
    title: 'Styled Components',
    level: 3,
    questions: [
      {
        title: 'CSS-in-JS is the styling strategy by which JavaScript is used to style components.',
        alternatives: [
          'True',
          'False'
        ],
        correct: 0
      },
      {
        title: 'Check below the alternative that does not correspond to a characteristic of Styled Components.',
        alternatives: [
          'Perform the styled default import and use it to create the components (ex.: styled.View).',
          'You can either create predefined styled components with "styled." how much to forward custom components to it per styled().',
          'The way of styling the components is very similar to what we use when working directly with CSS (lowercase letters, separated by a hyphen and with a semicolon at the end).',
          'It is possible to customize only component styles (prop style) via styled, that is, it is not possible to configure other properties/attributes of the component.'
        ],
        correct: 1
      },
      {
        title: 'With Styled Components it is possible to isolate the structure of the component from its styling.',
        alternatives: [
          'True',
          'False'
        ],
        correct: 0
      },
    ]
  },
  {
    id: '5',
    title: 'Local Storage',
    level: 2,
    questions: [
      {
        title: 'Which of the following methods saves information to AsyncStorage?',
        alternatives: [
          'AsyncStorage.removeItem',
          'AsyncStorage.setItem',
          'AsyncStorage.getItem'
        ],
        correct: 1
      },
      {
        title: 'What best describes PropDrilling?',
        alternatives: [
          'Strategy where you pass properties between components until you reach the desired component.',
          'Strategy where you save information locally on the device (storage) and access it when you need it.',
          'Strategy where you share information between components through contexts (Context API).'
        ],
        correct: 1
      },
      {
        title: 'What is the correct way to save objects in AsyncStorage?',
        alternatives: [
          "await AsyncStorage.setItem('@app:key', { id: 1, name: 'Item 1' });",
          "await AsyncStorage.getItem('@app:key', JSON.stringify({ id: 1, name: 'Item 1' }));",
          "await AsyncStorage.setItem('@app:key', JSON.stringify({ id: 1, name: 'Item 1' }));"
        ],
        correct: 2
      },
    ]
  },
  {
    id: '6',
    title: 'React Native',
    level: 1,
    questions: [
      {
        title: 'Check the correct alternative about React Native:',
        alternatives: [
          'React Native is a Javascript framework based on React capable of creating applications for Android and iOS only.',
          'Unlike React, React Native is built entirely by the community and has nothing to do with Facebook.',
          'With React Native you can maintain almost all your application by Javascript and manipulate native code if necessary.',
          'Despite the prominence of ReactJS on the Web, React Native is not currently widely used in the mobile market.'
        ],
        correct: 2
      },
      {
        title: 'Check the incorrect alternative about React Native CLI and Expo',
        alternatives: [
          'With both React Native CLI and Expo it is possible to create applications for iOS and Android.',
          'React Native CLI is the "rawest" way to create a React Native project. Expo brings more features on top of this base, for example Expo Go.',
          'With Expo it is possible to test iOS applications through Expo Go if you have a physical iOS device even if you do not have a macOS system, which is not possible with React Native CLI.',
          'The official React Native documentation only recommends the React Native CLI, not even mentioning Expo.'
        ],
        correct: 3
      },
      {
        title: 'About the Expo, mark the correct alternative:',
        alternatives: [
          'Expo has two traditional paths when creating a project: Managed Workflow and Bare Workflow.',
          'Managed Workflow is the way to create projects where from the beginning you have access to your native code.',
          'With Bare Workflow you cannot use Expo Go at any time.',
          'React Native environment setup for Managed Workflow is more complex than for Bare Workflow'
        ],
        correct: 3
      },
      {
        title: 'About componentization in React Native, choose the wrong alternative:',
        alternatives: [
          'Componentizing is a way to reuse code snippets in multiple places in your code.',
          'One of the advantages of componentization is to simplify a very complex component into multiple smaller components, thus facilitating code maintenance.',
          'Despite helping to reuse and simplify the code, componentizing reduces the productivity and readability of the project.',
          'None is correct.'
        ],
        correct: 3
      },
    ]
  },
];