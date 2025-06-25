// types/sampleTypes.ts

// Action Constants
export const SAMPLE_ACTION_REQUEST = 'SAMPLE_ACTION_REQUEST';
export const SAMPLE_ACTION_SUCCESS = 'SAMPLE_ACTION_SUCCESS';
export const SAMPLE_ACTION_FAILURE = 'SAMPLE_ACTION_FAILURE';

// Action Interfaces
export interface SampleActionRequest {
  type: typeof SAMPLE_ACTION_REQUEST;
  payload?: string;
}

export interface SampleActionSuccess {
  type: typeof SAMPLE_ACTION_SUCCESS;
  payload: string;
}

export interface SampleActionFailure {
  type: typeof SAMPLE_ACTION_FAILURE;
  error: string;
}

// Reducer State Interface
export interface SampleState {
  loading: boolean;
  data: string | null;
  error: string | null;
}

// Union Action Type
export type SampleAction =
  | SampleActionRequest
  | SampleActionSuccess
  | SampleActionFailure;
