export default function news(news = { page: 1, list: [], loading: false }, action) {
  switch (action.type) {
    case 'news/loading':
      return {
        ...news,
        loading: true
      }
    case 'news/update':
      return {
        ...news,
        list: action.list,
        loading: false
      }
    case 'news/prev':
      return {
        ...news,
        page: news.page > 1 ? news.page - 1 : news.page
      }
    case 'news/next':
      return {
        ...news,
        page: news.page + 1
      }
    default:
      return news
  }
}
