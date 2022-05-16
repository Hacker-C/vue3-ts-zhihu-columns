import request from './request'

const getAllColumns = async () => {
  const columns = await request({
    url: '/columns',
  })
  return columns
}

const getColumnById = async (columnId: number) => {
  const column = await request({
    url: '/columns/' + columnId,
  })
  return column
}

export { getAllColumns, getColumnById }
