export function seriesInfoLoadComplete(data) {
  return {
    type: 'SERIES_INFO@LOAD_COMPLETE',
    data,
  };
}

export function charactersFindAllComplete(data) {
  return {
    type: 'CHARACTERS@FIND_ALL_COMPLETE',
    data,
  };
}

export function comicsFindAllComplete(data) {
  return {
    type: 'COMICS@FIND_ALL_COMPLETE',
    data,
  };
}

export function setModal(data) {
  return {
    type: 'MODAL@SET',
    data,
  };
}

export function clearModal() {
  return {
    type: 'MODAL@CLEAR',
  };
}

export function seriesInfoSearch(name) {
  return (dispatch) => {
    fetch(`http://marvel-is-broke.herokuapp.com/series?limit=1&titleStartsWith=${name}`)
    .then(response => response.json())
    .then((data) => {
      const characters = data.data.results;
    });
    dispatch(seriesInfoLoadComplete(characters));
    dispatch(comicsFindForId(characters));
  };
}

export function charactersFindForId(id) {
  return (dispatch) => {
    fetch(`http://marvel-is-broke.herokuapp.com/series?limit=1&titleStartsWith=${id}`)
    .then(response => response.json())
    .then((data) => {
      const comics = data.data.results;
    });
    dispatch(charactersFindAllComplete(comics));
  };
}

export function comicsFindForId(id) {
  return (dispatch) => {
    fetch(`http://marvel-is-broke.herokuapp.com/series?limit=1&titleStartsWith=${id}`)
    .then(response = response.json())
    .then((data) => {
      const comics = data.data.results;
    });
    dispatch(charactersFindAllComplete(comics));
  };
}
