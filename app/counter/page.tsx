"use client";
import { Button } from "@/components/ui/button";
// import type { RootState } from "../GlobalRedux/store";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
} from "../GlobalRedux/Features/counter/counterSlice";

export default function Counter() {
  const count = useSelector((state: any) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col gap-2 w-full">
      <a id="redux"></a>
      <h4>Redux Toolkit</h4>
      <div className="flex gap-4 w-full items-center">
        <Button       
          className="capitalize"
          onClick={() => dispatch(increment())}
        >
          Increment
        </Button>

        <Button
          className="capitalize"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </Button>
        <Button        
          className="capitalize"
          onClick={() => dispatch(incrementByAmount(2))}
        >
          Increment by 2
        </Button>
        <span className="text-2xl font-bold">{count}</span>
      </div>
    </div>
  );
}
