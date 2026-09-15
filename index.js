function getStreams(tmdbId, mediaType, season, episode) {
  // Segnaposto: non effettua scraping né fornisce stream.
  return Promise.resolve([]);
}

module.exports = { getStreams };
