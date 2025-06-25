// reducers/sampleReducer.ts

import { SampleActions } from "../actions";
import { SampleTypes } from "../types";

export interface SampleState {
  loading: boolean;
  data: string | null;
  error: string | null;
}

const initialState: SampleState = {
  loading: false,
  data: null,
  error: null,
};

export const sampleReducer = (
  state: SampleState = initialState,
  action: SampleActions
): SampleState => {
  switch (action.type) {
    case SAMPLE_ACTION_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case SAMPLE_ACTION_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case SAMPLE_ACTION_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
