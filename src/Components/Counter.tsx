import { useState } from "react";
import classes from './Counter.module.scss';

export const Counter = () => {
   const [count, setCount] = useState(0)

   const ChangeCount = () => {
      setCount((prev) => prev + 1)
   }

   return (
      <>
         <h1 className={classes.red}>{count}</h1>
         <button onClick={ChangeCount}>Counter</button>
      </>
  )
}
