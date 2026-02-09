
import Watch from './components/Sunglass/Watch/Watch'


function App() {
  const watches=[
    {id:1,name:'Apple watch',price:200},
    {id:2,name:'samsung watch',price:200},
    {id:3,name:'MI watch',price:200},
  ]

  return (
    <>
      <h1>Vite + React</h1>
      <div className="app">
        {
        watches.map(watch=><Watch key={watch.id} watch={watch}></Watch>)
      }
      </div>
    </>
  )
}

export default App
