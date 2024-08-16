import componentsImg from './assets/components.png';
import propsImg from'./assets/config.png';
import jsxImg from './assets/jsx-ui.png';
import stateImg from './assets/state-mgmt.png';
import reactCoreConcept from './assets/react-core-concepts.png'

export const CORE_CONCEPTS = [
    {
        image:componentsImg,
        title:'Components',
        description: 'The Core UI bulding block-compose the user interface by conbining multiple components.'
    },
    {
        image: jsxImg,
        title:'JSX',
        description:'Return(potentially dynamic) HTML(ish) code to define the actual markupthat will be rendered.'
    },
    {
        image:propsImg,
        title:'Props',
        description:'Make components configurable (and therefore resuable) by passing input data to them'
    },
    {
        image:stateImg,
        title:'State',
        description:'React_managed data which, when cnaged,caues the component to re-render & the UI to update.'
    },
    
];

export const EXAMPLES = 
{
    components :{
        title: 'Components',
        description:'Components are the building blocks of react application. A components is a self-contained modules(HTML+optional CSS+JS) that rendard some output',
        code: `
        function Welcome(){
          return <h1>Hello,World!<h1/>
        }`,
    },
    jsx: {
        title:'JSX',
        description:'JSX is a syntax extention to javaScript. It is similar to a tamplate language.But it has full power of JavaScript (e.g. It may output dynamic content)',
        code: `
        functon Welcome(props)
        {
          return <h1>Hello,{props.name}</h1>
        }`,
    },

    state:{
        title:'State',
        description:'State allows React componentts to change their output over time',
        code :`
        function Counter()
    {
      const [isVisible, setIsVisible] = useState(false);   
    }`,
    },
    props:{
       title:'Props',
       description:'Components accept arbitory inputs called props. Thay are like function arguments',
       code:`function props()
    {
         return <h1>Hello,{props.name}</h1>;
       }`
    }
}
