const FILTER_TYPE = Object.freeze({
  ALL: 'all',
  ACTIVE: 'active',
  WATCHED: 'watched',
  LIKED: 'liked',
  UNLIKED: 'unliked',
});

const WATCHED_STATUS = Object.freeze({
    WATCHED: 'watched',
    NOT_YET: 'not_yet',
});

const LIKED_STATUS = Object.freeze({
    LIKED: 'liked',
    NOT_YET: 'not_yet',
    UNLIKED: 'unliked',
});

export {
    FILTER_TYPE,
    WATCHED_STATUS,
    LIKED_STATUS,
};
