/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

const documents = {
    "\n  query getPages($first: Int) {\n    pages(first: $first) {\n      id\n      heading\n      slug\n      body {\n        html\n      }\n    }\n  }\n": types.GetPagesDocument,
    "\n  query getPageBySlug($slug: String!) {\n    page(where: { slug: $slug }) {\n      id\n      slug\n      heading\n      body {\n        html\n      }\n    }\n  }\n": types.GetPageBySlugDocument,
    "\n  query getPlaces {\n    places {\n      id\n      name\n      location {\n        latitude\n        longitude\n      }\n      slug\n      description {\n        html\n      }\n      gallery {\n        width\n        height\n        url\n      }\n    }\n  }\n": types.GetPlacesDocument,
};

export function graphql(source: "\n  query getPages($first: Int) {\n    pages(first: $first) {\n      id\n      heading\n      slug\n      body {\n        html\n      }\n    }\n  }\n"): (typeof documents)["\n  query getPages($first: Int) {\n    pages(first: $first) {\n      id\n      heading\n      slug\n      body {\n        html\n      }\n    }\n  }\n"];
export function graphql(source: "\n  query getPageBySlug($slug: String!) {\n    page(where: { slug: $slug }) {\n      id\n      slug\n      heading\n      body {\n        html\n      }\n    }\n  }\n"): (typeof documents)["\n  query getPageBySlug($slug: String!) {\n    page(where: { slug: $slug }) {\n      id\n      slug\n      heading\n      body {\n        html\n      }\n    }\n  }\n"];
export function graphql(source: "\n  query getPlaces {\n    places {\n      id\n      name\n      location {\n        latitude\n        longitude\n      }\n      slug\n      description {\n        html\n      }\n      gallery {\n        width\n        height\n        url\n      }\n    }\n  }\n"): (typeof documents)["\n  query getPlaces {\n    places {\n      id\n      name\n      location {\n        latitude\n        longitude\n      }\n      slug\n      description {\n        html\n      }\n      gallery {\n        width\n        height\n        url\n      }\n    }\n  }\n"];

export function graphql(source: string): unknown;
export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;