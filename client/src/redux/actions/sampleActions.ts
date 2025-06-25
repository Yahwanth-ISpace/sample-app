import {
  SampleTypes
} from "../types";


// Action Creators
export const sampleActionRequest = (payload?: string): SampleActionRequest => ({
  type: SAMPLE_ACTION_REQUEST,
  payload,
});

export const sampleActionSuccess = (payload: string): SampleActionSuccess => ({
  type: SAMPLE_ACTION_SUCCESS,
  payload,
});

export const sampleActionFailure = (error: string): SampleActionFailure => ({
  type: SAMPLE_ACTION_FAILURE,
  error,
});
