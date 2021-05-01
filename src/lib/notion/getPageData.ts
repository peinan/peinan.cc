import rpc, { values } from './rpc'

export default async function getPageData(pageId: string) {
  // a reasonable size limit for the largest blog post (1MB),
  // as one chunk is about 10KB
  const maximumChunkNumber = 100
  try {
    var chunkNumber = 0
    var data = await loadPageChunk({ pageId, chunkNumber })
    var blocks = data.recordMap.block
    let cover = {
      url: null,
      position: null,
      blockId: null,
    }

    while (data.cursor.stack.length !== 0 && chunkNumber < maximumChunkNumber) {
      chunkNumber = chunkNumber + 1
      data = await loadPageChunk({ pageId, chunkNumber, cursor: data.cursor })
      blocks = Object.assign(blocks, data.recordMap.block)
    }
    const blockArray = values(blocks)
    if (blockArray[0] && blockArray[0].value.content) {
      // get cover
      cover = getCover(blockArray[0].value)
      // remove table blocks
      blockArray.splice(0, 3)
    }
    return { cover: cover, blocks: blockArray }
  } catch (err) {
    console.error(`Failed to load pageData for ${pageId}`, err)
    return { blocks: [] }
  }
}

export function loadPageChunk({
  pageId,
  limit = 30,
  cursor = { stack: [] },
  chunkNumber = 0,
  verticalColumns = false,
}: any) {
  return rpc('loadPageChunk', {
    pageId,
    limit,
    cursor,
    chunkNumber,
    verticalColumns,
  })
}

export function getCover(value) {
  if (!value.format?.page_cover) return null
  return {
    url: value.format?.page_cover,
    position: value.format?.page_position || null,
    blockId: value.id || null,
  }
}
