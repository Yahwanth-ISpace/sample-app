import { SampleTypes } from "../types";

// Action Creators
export const sampleActionRequest = (
  payload?: string
): SampleTypes.SampleActionRequest => ({
  type: SampleTypes.SAMPLE_ACTION_REQUEST,
  payload,
});

export const sampleActionSuccess = (
  payload: string
): SampleTypes.SampleActionSuccess => ({
  type: SampleTypes.SAMPLE_ACTION_SUCCESS,
  payload,
});

export const sampleActionFailure = (
  error: string
): SampleTypes.SampleActionFailure => ({
  type: SampleTypes.SAMPLE_ACTION_FAILURE,
  error,
});
