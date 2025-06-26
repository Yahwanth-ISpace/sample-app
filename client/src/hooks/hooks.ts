// src/hooks/useAuth.ts
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../redux/store";

import { useDispatch } from "react-redux";
import type { ThunkDispatch } from "redux-thunk";
import type { AnyAction } from "redux";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useAppDispatch = () =>
  useDispatch<ThunkDispatch<RootState, any, AnyAction>>();
