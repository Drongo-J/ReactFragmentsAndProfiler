import './App.css';
import Blog from './Blog';
import Counter from './Counter'
import MyList from './MyList';
import { Profiler, StrictMode, useState } from 'react';
import Item from './Item';

function onRender(id, phase, actualDuration, baseDuration, startTime, commitTime) {
  console.log("Id " + id + "\n phase " + phase + "\n actualDuration " + actualDuration + "\n baseDuration " + baseDuration + "\n startTime " + startTime + "\n commitTime " + commitTime);
}


let initialStories = [
  {
    id: 0,
    label: "Ankit's story"
  },
  {
    id: 1,
    label: "John's story"
  }
]
function App() {
  let [stories, setStories] = useState(initialStories);
  return (
    // <Profiler onRender={onRender}>
    //   <div>
    //     <Counter></Counter>
    //     <MyList></MyList>
    //     <Blog></Blog>
    //   </div>
    // </Profiler>
    // <StrictMode>
    //   <div>
    //     <Counter></Counter>
    //     <MyList></MyList>
    //     <Blog></Blog>
    //   </div>
    // </StrictMode>

    <div style={{
      width: "100%",
      height: "100%",
      backgroundColor: "springgreen"
    }}>
      {/* <Item items={initialStories}></Item> */}
    </div>
  );
}

export default App;
