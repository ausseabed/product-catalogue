import * as rs from './reference-system.json'

export interface SearchRecordInterface {
  Area: string;
  Code: number;
  DataSource: string;
  Deprecated: boolean;
  Links: {
    href: string;
    rel: string;
  }[];
  Name: string;
  Remarks: string;
  RevisionDate: string;
  Type: string;
}

export const ReferenceSystem = rs.Results as SearchRecordInterface[]
