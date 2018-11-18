export interface ActorDetailsState {
  _id: string;
  imdbId: string;
  name: string;
  birthday: string;
  country: string;
  gender: 'male' | 'female';
  photoUrl: string;
}

export function initializeActorDetailsState(): ActorDetailsState {
  return {
    _id: null,
    imdbId: null,
    name: null,
    birthday: null,
    country: null,
    gender: null,
    photoUrl: null,
  };
}

