/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Genre = {
  __typename?: 'Genre';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type Movie = {
  __typename?: 'Movie';
  genre?: Maybe<Genre>;
  id: Scalars['ID']['output'];
  poster?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addMovie?: Maybe<Movie>;
  deleteMovie?: Maybe<Scalars['Boolean']['output']>;
  updateMovie?: Maybe<Movie>;
};


export type MutationAddMovieArgs = {
  genreId: Scalars['ID']['input'];
  poster?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};


export type MutationDeleteMovieArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateMovieArgs = {
  genreId: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
  poster?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type Query = {
  __typename?: 'Query';
  getAllMovies?: Maybe<Array<Maybe<Movie>>>;
  getGenres?: Maybe<Array<Maybe<Genre>>>;
  getMovie?: Maybe<Movie>;
};


export type QueryGetMovieArgs = {
  id: Scalars['ID']['input'];
};
