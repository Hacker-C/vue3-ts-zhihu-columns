import request from './request'
import { ColumnProps } from '@/dtypes'
import { R } from '@/dtypes'

const getAllColumns = async (): R<ColumnProps[]> => {
  const columns = await request({
    url: '/columns',
  })
  return columns
}

const getColumnById = async (columnId: number): R<ColumnProps> => {
  const column = await request({
    url: '/columns/' + columnId,
  })
  return column
}

export { getAllColumns, getColumnById }
