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

export function charactersFindForId(id) {
  return (next) => {
    fetch(`http://marvel-is-broke.herokuapp.com/series/${id}/characters`)
    .then(response => response.json())
    .then((data) => {
      next(charactersFindAllComplete(data.data.results));
    });
  };
}

export function comicsFindForId(id) {
  return (next) => {
    fetch(`http://marvel-is-broke.herokuapp.com/series/${id}/comics`)
    .then(response => response.json())
    .then((data) => {
      next(comicsFindAllComplete(data.data.results));
    });
  };
}

export function seriesInfoSearch(name) {
  return (next) => {
    fetch(`http://marvel-is-broke.herokuapp.com/series?limit=1&titleStartsWith=${name}`)
    .then(response => response.json())
    .then((data) => {
      const series = data.data.results[0];

      if (series) {
        next(seriesInfoLoadComplete(series));
        next(charactersFindForId(series.id));
        next(comicsFindForId(series.id));
      }
    });
  };
}
