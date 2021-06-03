export enum MovieAction {
  REQUEST,
  FAILURE,
  SUCCESS,
}

function onRequest() {
  return {
    type: MovieAction.REQUEST,
  };
}

function onFailure(err: any) {
  return {
    type: MovieAction.FAILURE,
    message: err.message,
  };
}

function onSuccess(data: any) {
  return {
    type: MovieAction.SUCCESS,
    data: data,
  };
}

export function get() {
  return (dispatch: any) => {
    dispatch(onSuccess({ data: "robi" }));
  };
}
