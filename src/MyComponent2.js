//1.Import Area
import MyComponent3 from "./MyComponent3";


//2.Function Defination Area
function MyComponent2(){
    //Every function return something
    return <span>
             Hello From MyComponent2
             <MyComponent3 />
           </span>
    
}


//3.Export Area
export default MyComponent2;