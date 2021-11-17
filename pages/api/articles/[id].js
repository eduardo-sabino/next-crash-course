import { articles } from '../../../data'

export default function handler(req, res) {
    const id = req.query.id
    const article = articles.filter(article => article.id === id)
    if(!article.length > 0) return res.status(404).json({message: `article with the id of ${id} not found`})
    res.status(200).json(article[0])
}