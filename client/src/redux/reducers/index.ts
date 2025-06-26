// src/redux/reducers/index.ts
import { combineReducers } from "redux";
import * as SampleReducer from "./sampleReducer";

const rootReducer = combineReducers({
  sample: SampleReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
