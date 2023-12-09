import { builder } from '../builder'

export enum SortOrder {
  asc = 'asc',
  desc = 'desc',
}

builder.enumType(SortOrder, {
  name: 'SortOrder',
})
