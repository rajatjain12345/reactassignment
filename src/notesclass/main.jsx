
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import ListItem from './ListItem'

// import Todo from './Todo'

// import AxiosMagic from './AxiosMagic'

import MovieSearch from './MovieSearch'

// const items = [
//   {
//     name: "Abhishek",
//     phone: 1234512345,
//   },
//   {
//     name: "Shaitan",
//     phone: 123455421,
//   },
//   {
//     name: "Kartik",
//     phone: 5566455664,
//   },
//   {
//     name: "Amit",
//     phone: 1234545677,
//   },
// ];


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <ListItem items={items}/> */}
    <MovieSearch />
  </React.StrictMode>,
)
